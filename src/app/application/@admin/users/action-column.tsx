import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { UserDialog } from "@/app/application/@admin/users/user-dialog";

export function ActionColumn({ userId }: { userId: string }) {
    return (
        <div className="space-x-2">
            <UserDialog
                type="update"
                title="Update User"
                Icon={<Pencil />}
                btnBgClassName="bg-blue-500"
                userId={userId}
            />
            <Button type="submit" className="bg-red-500">
                <Trash2 />
            </Button>
        </div>
    );
}
