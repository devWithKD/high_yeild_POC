import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UnitInterface } from "@/types/types";
import { HandCoins } from "lucide-react";
import { InvestInUnitDialog } from "./unit-dialog";

export function MobileRecordCard({
    unitInterface,
    isAdmin,
}: {
    unitInterface: Partial<UnitInterface>;
    isAdmin: boolean;
}) {
    console.log(isAdmin);

    return (
        <Card className="w-full rounded-[16px]">
            <CardHeader className="mb-[-8px]">
                <div className="w-[100%] justify-end flex text-sm space-x-1 mb-1">
                    <Badge variant="outline">{unitInterface.type}</Badge>
                </div>
                <CardTitle className="space-x-1">
                    <span>{unitInterface.name}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between w-full items-center gap-1">
                    <div>
                        <p className="text-[10px] text-slate-500">
                            Assest Value
                        </p>
                        <h3 className="text-[20px] font-bold">
                            ₹{unitInterface.assetValue}
                        </h3>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500">
                            Invested Value
                        </p>
                        <h3 className="text-[20px] font-bold">
                            ₹{unitInterface.investedValue}
                        </h3>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex">
                <InvestInUnitDialog
                    type="update"
                    title="Update Unit"
                    Icon={<HandCoins />}
                    btnBgClassName="bg-blue-500"
                />
            </CardFooter>
        </Card>
    );
}
