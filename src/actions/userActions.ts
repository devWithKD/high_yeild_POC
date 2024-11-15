"use server";

import { signIn } from "@/auth";
import { connectMongoose } from "@/lib/db";
import User, { UserDoc } from "@/models/user.model";
import { UserInterface } from "@/types/types";
import * as argon2 from "argon2";
import { revalidatePath } from "next/cache";

export async function getUsers(): Promise<Array<Partial<UserInterface>>> {
    await connectMongoose();
    const rawUsers = await User.find();
    const users = rawUsers.map((user: UserDoc) => ({
        id: user.id as string,
        role: user.role,
        name: user.name,
        email: user.email,
    }));
    return users;
}

export async function getUserByID(
    id: string,
): Promise<Partial<UserInterface> | Error> {
    await connectMongoose();
    const user = await User.findById(id);
    if (!user) throw new Error("User does not exists");
    return {
        id: user.id as string,
        role: user.role,
        name: user.name,
        email: user.email,
    };
}

export async function getUserRole(
    id: string | undefined,
): Promise<string | Error> {
    await connectMongoose();
    if (!id) throw new Error("User does not exists");
    const user = await User.findById(id);
    if (!user) throw new Error("User does not exists");
    return user.role;
}

export async function createUser(
    user: Partial<UserInterface>,
    path: string,
): Promise<null | Error> {
    await connectMongoose();
    console.log(user);
    if (!user.password || user.password == "")
        throw new Error("Password cannot be empty");
    const userExist = await User.findOne({ email: user.email });
    if (userExist) throw new Error("User alredy Exists");
    const hash = await argon2.hash(user.password);
    const newUser = new User({
        ...user,
        provider: "credentials",
        password: hash,
    });
    await newUser.save();
    revalidatePath(path);
    return null;
}

export async function updateUser(
    user: Partial<UserInterface>,
    path: string,
): Promise<null | Error> {
    await connectMongoose();
    const existingUser = await User.findById(user.id);
    if (!existingUser) throw new Error("User does not exists");
    // eslint-disable-next-line
    const { id, password, ...data } = user;
    if (password == "" || !password) {
        await existingUser.updateOne(data);
        revalidatePath(path);
        return null;
    } else {
        const hash = argon2.hash(password);
        await existingUser.updateOne({ ...data, password: hash });
        revalidatePath(path);
        return null;
    }
}

export async function deleteUser(
    userID: string,
    path: string,
): Promise<null | Error> {
    await connectMongoose();
    const userToDelete = await User.findById(userID);
    if (!userToDelete) throw new Error("User does not exists");
    await userToDelete.deleteOne();
    revalidatePath(path);
    return null;
}

export async function signInWithCreds(values: {
    email: string;
    password: string;
}) {
    await signIn("credentials", values);
}
