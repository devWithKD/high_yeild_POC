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
import { createUnit } from "@/actions/unitActions";
// import { UserDoc } from "@/models/user.model";

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 charachter long"),
    type: z.string(),
    assetValue: z.coerce.number(),
    investedValue: z.coerce.number(),
});

export function UnitDialog({
    type,
    title,
    Icon,
    btnBgClassName,
    unit,
}: {
    type: "add" | "update";
    title: string;
    Icon: React.ReactNode;
    btnBgClassName: string;
    unit?: Partial<UnitInterface>;
}) {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: type === "add" ? "" : unit?.name,
            type: type === "add" ? "" : unit?.type,
            assetValue: type === "add" ? undefined : unit?.assetValue,
            investedValue: type === "add" ? undefined : unit?.investedValue,
        },
        mode: "onChange",
    });

    async function onSubmitAddUser(values: z.infer<typeof formSchema>) {
        try {
            await createUnit(values, "/application/units");
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
            // console.log(unitId);
            // const user: UserInterface = await getUserByID(userId ? userId : "");
            // console.log(user);
            await createUser(values, "/application/units");

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
                        render={({ field }) => {
                            console.log(field);
                            return (
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
                            );
                        }}
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
                        <DialogTrigger
                            disabled={!form.formState.isValid}
                            asChild
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
