// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";
import { HandCoins } from "lucide-react";
import { InvestInUnitDialog } from "./unit-dialog";
// import { deleteUnit } from "@/actions/unitActions";
import { UnitInterface } from "@/types/types";

export function ActionColumn({ unit }: { unit: Partial<UnitInterface> }) {
    console.log(unit);
    // const deleteUnitFn = async () => {
    //     try {
    //         deleteUnit(unit.id as string, "/application/units");
    //     } catch (er) {
    //         console.log(er);
    //     }
    // };

    return (
        <div className="space-x-2 flex">
            <InvestInUnitDialog
                type="update"
                title="Update Unit"
                Icon={<HandCoins />}
                btnBgClassName="bg-blue-500"
            />
            {/* <form action={deleteUnitFn}>
                <Button type="submit" className="bg-red-500">
                    <Trash2 />
                </Button>
            </form> */}
        </div>
    );
}
