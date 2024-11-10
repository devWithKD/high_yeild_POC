"use client";

import { AppDialog } from "@/components/app-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { User } from "@/types/types";

// interface FormData {
//     username: string;
//     email: string;
//     password: string;
//     role: "admin" | "accountant" | "investor";
// }

export function AddUserDialog() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Partial<User>>();

    const onSubmitAddUser: SubmitHandler<Partial<User>> = (data) => {
        console.log(data);
    };

    return (
        <AppDialog
            title="Add User"
            dialogDecription="Add user profile here. Click add when you're done."
            Icon={UserPlus}
            // handleSubmitForm={handleSubmit(onSubmitAddUser)}
        >
            <form action="post" onSubmit={handleSubmit(onSubmitAddUser)}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="name"
                            placeholder="name"
                            className="col-span-3"
                            type="text"
                            {...register("name", {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Min-length should be 6.",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Max-length should be 10.",
                                },
                            })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            className="col-span-3"
                            {...register("email", {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Min-length should be 6.",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Max-length should be 50.",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="w-[200px] text-sm text-red-600">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="*****"
                            className="col-span-3"
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Min-length should be 6.",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Max-length should be 20.",
                                },
                            })}
                        />
                        {errors.password && (
                            <span>{errors.password.message}</span>
                        )}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            Role
                        </Label>
                        <select
                            {...register("role", {
                                required: true,
                            })}
                        >
                            <option value="admin">admin</option>
                            <option value="accountant">accountant</option>
                            <option value="investor">investor</option>
                        </select>
                        {/* <Select
                            {...register("role", {
                                required: true,
                            })}
                        >
                            <SelectTrigger className="w-[278px]">
                                <SelectValue placeholder="Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dark">admin</SelectItem>
                                <SelectItem value="light">
                                    accountant
                                </SelectItem>
                                <SelectItem value="system">investor</SelectItem>
                            </SelectContent>
                        </Select> */}
                    </div>
                </div>
                <Button type="submit">add</Button>
            </form>
        </AppDialog>
    );
}
