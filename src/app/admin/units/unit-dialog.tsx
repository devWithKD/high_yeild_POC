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
import { Input } from "@/components/ui/input";
import { UnitInterface } from "@/types/types";
import { createUser } from "@/actions/userActions";
// import { UserDoc } from "@/models/user.model";

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 charachter long"),
    type: z.string(),
    assetValue: z.number(),
    investedValue: z.number(),
});

export function UnitDialog({
    type,
    user,
    title,
    Icon,
    btnBgClassName,
    unitId,
}: {
    type: "add" | "update";
    user?: Partial<UnitInterface>;
    title: string;
    Icon: React.ReactNode;
    btnBgClassName: string;
    unitId?: string;
}) {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: type === "add" ? "" : user?.name,
            type: type === "add" ? "" : user?.type,
            assetValue: type === "add" ? undefined : user?.assetValue,
            investedValue: type === "add" ? undefined : user?.investedValue,
        },
    });

    async function onSubmitAddUser(values: z.infer<typeof formSchema>) {
        try {
            await createUser(values, "/admin/users");

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

    async function onSubmitUpdateUser(values: z.infer<typeof formSchema>) {
        try {
            console.log(unitId);
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
                        type === "add" ? onSubmitAddUser : onSubmitUpdateUser
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
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <FormControl>
                                    <Input
                                        type="type"
                                        placeholder="flat"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="assetValue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Asset Value</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="₹0000"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="investedValue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Invested Value</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="₹0000"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end w-full pt-4">
                        <DialogTrigger className="just" asChild>
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
