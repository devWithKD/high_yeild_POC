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
// import { createUnit } from "@/actions/unitActions";

const formSchema = z.object({
    invested_amt: z.coerce.number(),
});

export function InvestInUnitDialog({
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
            invested_amt: 0,
        },
        mode: "onChange",
    });

    async function onSubmitAddInvetment(values: z.infer<typeof formSchema>) {
        try {
            // await createUnit(values, "/application/units");
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
                    onSubmit={form.handleSubmit(onSubmitAddInvetment)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="invested_amt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Investment Value</FormLabel>
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
