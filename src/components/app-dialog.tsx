import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export interface AppDialogProps {
    title: string;
    Icon: React.ReactNode;
    btnBgClassName: string;
    children: React.ReactNode;
}

export function AppDialog({
    title,
    Icon,
    btnBgClassName,
    children,
}: AppDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className={btnBgClassName}>
                    {Icon}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
