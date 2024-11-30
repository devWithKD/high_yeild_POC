"use client";

import { useEffect, useState } from "react";

import { TransactionInterface } from "@/types/types";
import { AppDataTable } from "@/components/app-data-table";
import { AppLoadingScreen } from "@/components/app-loading-screen";

import { columns } from "./_components/columns";
import { MobileRecordCard } from "./_components/mobile-record-card";

async function GetTransactions(): Promise<
    Array<Partial<TransactionInterface>>
> {
    return [
        {
            user: {
                name: "Jon Dou",
            },
            type: "debit",
            transaction_amount: 1000,
            // transaction_date: Date.now(),
        },
    ];
}

export default function Home() {
    const [data, setData] = useState<Array<Partial<TransactionInterface>>>([
        {
            user: {
                name: "Jon Dou",
            },
            type: "debit",
            transaction_amount: 1000,
            // transaction_date: Date.now(),
        },
    ]);
    const [screen, setIsPhone] = useState<"phone" | "desktop" | "loading">(
        "loading"
    );

    useEffect(() => {
        (async () => {
            const tempData = await GetTransactions();
            setData(tempData);

            if (window.innerWidth <= 1024) {
                setIsPhone("phone");
            } else {
                setIsPhone("desktop");
            }
        })();
    }, []);

    if (screen === "loading") {
        <AppLoadingScreen />;
    } else if (screen === "phone") {
        return <MobileScreen data={data} />;
    } else {
        return <DesktopScreen data={data} />;
    }
}

function DesktopScreen({
    data,
}: {
    data: Array<Partial<TransactionInterface>>;
}) {
    return (
        <div id="temp1" className="container mx-auto py-10">
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}

function MobileScreen({
    data,
}: {
    data: Array<Partial<TransactionInterface>>;
}) {
    return (
        <div className="container py-2 mt-2 flex flex-wrap">
            {data.length == 0
                ? "No Data"
                : data.map((e, i) => (
                      <MobileRecordCard
                          key={i}
                          transactionInterface={e}
                          isAdmin={false}
                      />
                  ))}
        </div>
    );
}
