import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TransactionInterface } from "@/types/types";

export function MobileRecordCard({
    transactionInterface,
    isAdmin,
}: {
    transactionInterface: Partial<TransactionInterface>;
    isAdmin: boolean;
}) {
    console.log(isAdmin);

    return (
        <Card className="w-[350px] rounded-[16px] m-2">
            <CardHeader className="mb-[-8px]">
                <div className="w-[100%] justify-end flex text-sm space-x-1 mb-1">
                    <Badge variant="outline">{transactionInterface.type}</Badge>
                </div>
                <CardTitle className="space-x-1">
                    <span>{transactionInterface.user?.name}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between w-full items-center gap-1">
                    <div>
                        <p className="text-[10px] text-slate-500">
                            Transaction Amount
                        </p>
                        <h3 className="text-[20px] font-bold">
                            ₹{transactionInterface.transaction_amount}
                        </h3>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500">
                            Transaction Date
                        </p>
                        <h3 className="text-[20px] font-bold">
                            10-09-2024
                            {/* {transactionInterface.transaction_date} */}
                        </h3>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
