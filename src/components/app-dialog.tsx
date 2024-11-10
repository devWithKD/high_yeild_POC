import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface AppDialogProps {
    title: string;
    dialogDecription: string;
    Icon: React.ElementType;
    children: React.ReactNode;
}

export function AppDialog({
    title,
    dialogDecription,
    Icon,
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
                {children}
            </DialogContent>
        </Dialog>
    );
}
