import mongoose, { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
    role: "super_admin" | "admin" | "accountant" | "investor" | "support";
    name: string;
    email: string;
    image?: string;
    emailVerified?: unknown;
    password?: string;
    provider: string;
}

const UserSchema: Schema<UserDoc> = new Schema({
    role: String,
    name: String,
    email: String,
    image: String,
    emailVerified: String,
    password: String,
    provider: String,
});

const User =
    (mongoose.models.users as mongoose.Model<UserDoc>) ||
    mongoose.model("users", UserSchema);

export default User;
