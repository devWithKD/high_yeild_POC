import { TransactionInterface } from "@/types/types";
import { columns } from "./_components/columns";
import { AppDataTable } from "@/components/app-data-table";
async function GetTransactions(): Promise<
    Array<Partial<TransactionInterface>>
> {
    return [
        {
            user: {
                name: "Tom Holand",
            },
            type: "debit",
            transaction_date: new Date(Date.now()),
            transaction_amount: 5000,
        },
    ];
}

export default async function Home() {
    const data = await GetTransactions();

    return (
        <div id="temp1" className="container mx-auto py-10">
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}
