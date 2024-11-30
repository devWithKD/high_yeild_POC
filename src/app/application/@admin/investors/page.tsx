import { columns } from "./columns";
import { AppDataTable } from "@/components/app-data-table";
import { UserInterface } from "@/types/types";
// import { UserDialog } from "./user-dialog";
// import { UserPlus } from "lucide-react";

async function getInvestors(): Promise<Array<Partial<UserInterface>>> {
    return [{}];
}

export default async function Home() {
    const data = await getInvestors();

    return (
        <div id="temp1" className="container mx-auto py-10">
            {/* <UserDialog
                type="add"
                title="Add User"
                Icon={<UserPlus />}
                btnBgClassName="bg-green-400"
            /> */}
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}
