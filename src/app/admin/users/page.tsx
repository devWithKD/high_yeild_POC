import { User, columns } from "./columns";
import { AppDataTable } from "../../../components/app-data-table";
import { UserDialog } from "./add-user-dialog";

async function getData(): Promise<User[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "Sarthak",
            role: "investor",
            email: "m@example.com",
        },
        // ...
    ];
}

export default async function Home() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <UserDialog type="add" />
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}
