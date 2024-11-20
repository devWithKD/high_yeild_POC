import { columns } from "./columns";
import { AppDataTable } from "@/components/app-data-table";
import { UnitDialog } from "./unit-dialog";
// import { getUsers } from "@/actions/userActions";
import { HousePlus } from "lucide-react";
import { getUnits } from "@/actions/unitActions";

export default async function Home() {
    const data = await getUnits();

    return (
        <div id="temp1" className="container mx-auto py-10">
            <UnitDialog
                type="add"
                title="Add Unit"
                Icon={<HousePlus />}
                btnBgClassName="bg-green-400"
            />
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}
