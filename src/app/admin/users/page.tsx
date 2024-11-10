import { columns } from "./columns";
import { AppDataTable } from "../../../components/app-data-table";
import { UserDialog } from "./add-user-dialog";
import { getUsers } from "@/actions/userActions";

export default async function Home() {
    const data = await getUsers();

    return (
        <div id="temp1" className="container mx-auto py-10">
            <UserDialog type="add" />
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}
