import NextAuth, { CredentialsSignin } from "next-auth";
import Github from "next-auth/providers/github";
import Credential from "next-auth/providers/credentials";
import clientPromise, { connectMongoose } from "./lib/db";
import User from "./models/user.model";
import * as argon2 from "argon2";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Role } from "./types/types";

declare module "next-auth" {
    interface User {
        role?: Role;
    }
    interface JWT {
        role?: Role;
    }
}

class LoginError extends CredentialsSignin {
    code = "Invalid Credentials";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Github({
            allowDangerousEmailAccountLinking: true,
        }),
        Credential({
            credentials: {
                email: { type: "text", label: "email" },
                password: { type: "password", label: "password" },
            },
            authorize: async (credentials) => {
                await connectMongoose();
                const userExists = await User.findOne({
                    email: credentials.email,
                });
                if (!userExists) throw new LoginError();
                if (
                    await argon2.verify(
                        userExists.password as string,
                        credentials.password as string,
                    )
                ) {
                    return {
                        id: userExists.id as string,
                        email: userExists.email,
                        name: userExists.name,
                        role: userExists.role,
                    };
                } else throw new LoginError();
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        signIn: async ({ user, account }) => {
            await connectMongoose();

            const existingUser = await User.findOne({ email: user.email });
            if (
                existingUser &&
                account &&
                !existingUser.provider.includes(account.provider)
            ) {
                await existingUser.updateOne({
                    provider: [...existingUser.provider, account.provider],
                });
            }
            return true;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.email = user.email;
                token.name = user.name;
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.id = token.id as string;
                session.user.role = token.role as Role | undefined;
            }
            return session;
        },
    },
    adapter: MongoDBAdapter(clientPromise),
});
