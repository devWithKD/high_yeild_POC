import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { UserDialog } from "@/app/application/@admin/users/user-dialog";
import { deleteUser } from "@/actions/userActions";

export function ActionColumn({ userId }: { userId: string }) {
    const deleteUserFn = async () => {
        try {
            deleteUser(userId as string, "/application/users");
        } catch (er) {
            console.log(er);
        }
    };

    return (
        <div className="space-x-2 flex">
            <UserDialog
                type="update"
                title="Update User"
                Icon={<Pencil />}
                btnBgClassName="bg-blue-500"
                userId={userId}
            />
            <form action={deleteUserFn}>
                <Button type="submit" className="bg-red-500">
                    <Trash2 />
                </Button>
            </form>
        </div>
    );
}
