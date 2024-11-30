import { columns } from "./columns";
import { AppDataTable } from "@/components/app-data-table";
import { UserDialog } from "./user-dialog";
import { getUsers } from "@/actions/userActions";
import { UserPlus } from "lucide-react";

export default async function Home() {
    let data = await getUsers();
    data = data.filter((user) => user.role != "super_admin");

    return (
        <div id="temp1" className="container mx-auto py-10">
            <UserDialog
                type="add"
                title="Add User"
                Icon={<UserPlus />}
                btnBgClassName="bg-green-400"
            />
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}
