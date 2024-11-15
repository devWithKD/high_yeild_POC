import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { UnitDialog } from "./unit-dialog";

export function ActionColumn({ unitId }: { unitId: string }) {
    return (
        <div className="space-x-2">
            <UnitDialog
                type="update"
                title="Update Unit"
                Icon={<Pencil />}
                btnBgClassName="bg-blue-500"
                unitId={unitId}
            />
            <Button type="submit" className="bg-red-500">
                <Trash2 />
            </Button>
        </div>
    );
}
