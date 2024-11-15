"use client";

import { AppDialog } from "@/components/app-dialog";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInterface } from "@/types/types";
import { createUser } from "@/actions/userActions";
import { usePathname } from "next/navigation";
// import { UserDoc } from "@/models/user.model";

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 charachter long"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 charachters long"),
    role: z.enum([
        "super_admin",
        "admin",
        "accountant",
        "investor",
        "support",
        "",
    ]),
});

export function UserDialog({
    type,
    user,
    title,
    Icon,
    btnBgClassName,
    // userId,
}: {
    type: "add" | "update";
    user?: Partial<UserInterface>;
    title: string;
    Icon: React.ReactNode;
    btnBgClassName: string;
    userId?: string;
}) {
    const { toast } = useToast();
    const path = usePathname();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: type === "add" ? "" : user?.name,
            email: type === "add" ? "" : user?.email,
            password: "",
            role: type === "add" ? "" : user?.role,
        },
    });

    async function onSubmitAddUser(values: z.infer<typeof formSchema>) {
        try {
            await createUser(values, path);

            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            {JSON.stringify(values, null, 2)}
                        </code>
                    </pre>
                ),
            });
            // console.log(values);
        } catch (error) {
            console.error("Form submission error:", error);
        }
    }

    async function onSubmitUpdateUser(values: z.infer<typeof formSchema>) {
        try {
            // console.log(userId);
            // const user: UserInterface = await getUserByID(userId ? userId : "");
            // console.log(user);

            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            {JSON.stringify(values, null, 2)}
                        </code>
                    </pre>
                ),
            });
            console.log(values);
        } catch (error) {
            console.error("Form submission error:", error);
        }
    }

    return (
        <AppDialog title={title} Icon={Icon} btnBgClassName={btnBgClassName}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(
                        type === "add" ? onSubmitAddUser : onSubmitUpdateUser,
                    )}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Jone Dou"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="example@email.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder={
                                            type === "add"
                                                ? "*****"
                                                : "unchanged"
                                        }
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Role" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="admin">
                                            Admin
                                        </SelectItem>
                                        <SelectItem value="accountant">
                                            Accountent
                                        </SelectItem>
                                        <SelectItem value="investor">
                                            Investor
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end w-full pt-4">
                        <DialogTrigger
                            asChild
                            disabled={!form.formState.isValid}
                        >
                            <Button type="submit">
                                {type.toLocaleUpperCase()}
                            </Button>
                        </DialogTrigger>
                    </div>
                </form>
            </Form>
        </AppDialog>
    );
}
