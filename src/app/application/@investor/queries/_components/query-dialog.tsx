"use client";

import { AppDialog } from "@/components/app-dialog";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
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
import { createUnit } from "@/actions/unitActions";

const formSchema = z.object({
    query: z.string().min(5, "Name must be at least 3 charachter long"),
    type: z.enum(["booking", "investment", ""]),
});

export function QueryDialog({
    type,
    title,
    Icon,
    btnBgClassName,
}: {
    type: "add" | "update";
    title: string;
    Icon: React.ReactNode;
    btnBgClassName: string;
}) {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            query: "",
            type: "",
        },
        mode: "onChange",
    });

    async function onSubmitAddQuery(values: z.infer<typeof formSchema>) {
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

    return (
        <AppDialog title={title} Icon={Icon} btnBgClassName={btnBgClassName}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmitAddQuery)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="booking">
                                            Booking
                                        </SelectItem>
                                        <SelectItem value="investment">
                                            Investment
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Query</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Type your message here."
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
