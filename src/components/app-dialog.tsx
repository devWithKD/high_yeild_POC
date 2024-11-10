import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface AppDialogProps {
    title: string;
    dialogDecription: string;
    Icon: React.ElementType;
    // handleSubmitForm: () => Promise<void>;
    children: React.ReactNode;
}

export function AppDialog({
    title,
    dialogDecription,
    Icon,
    // handleSubmitForm,
    children,
}: AppDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Icon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{dialogDecription}</DialogDescription>
                </DialogHeader>
                {/* <form method="dialog" onSubmit={handleSubmitForm}> */}
                {children}
                {/* </form> */}
                {/* <DialogFooter>
                    <Button type="submit">{title}</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    );
}
