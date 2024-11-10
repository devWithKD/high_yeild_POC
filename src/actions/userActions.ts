"use server";

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
    id: string
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

export async function createUser(
    user: Partial<UserInterface>,
    path: string
): Promise<null | Error> {
    await connectMongoose();
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
