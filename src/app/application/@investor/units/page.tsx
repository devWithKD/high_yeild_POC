"use client";

import { useEffect, useState } from "react";

import { UnitInterface } from "@/types/types";
import { AppDataTable } from "@/components/app-data-table";
import { getUnits } from "@/actions/unitActions";
import { AppLoadingScreen } from "@/components/app-loading-screen";

import { columns } from "./_components/columns";
import { MobileRecordCard } from "./_components/mobile-record-card";

export default function Home() {
    const [data, setData] = useState<Array<Partial<UnitInterface>>>([
        {
            id: "1",
            type: "Bungalow",
            name: "Ghar",
            assetValue: 7500000,
            investedValue: 5000000,
        },
    ]);
    const [screen, setIsPhone] = useState<"phone" | "desktop" | "loading">(
        "loading"
    );

    useEffect(() => {
        (async () => {
            const tempData = await getUnits();
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

function DesktopScreen({ data }: { data: Array<Partial<UnitInterface>> }) {
    return (
        <div id="temp1" className="container mx-auto py-10">
            <AppDataTable columns={columns} data={data} />
        </div>
    );
}

function MobileScreen({ data }: { data: Array<Partial<UnitInterface>> }) {
    return (
        <div className="container mt-3 px-4 py-2 flex md:grid md:grid-cols-2 flex-wrap flex-col justify-center items-center gap-3">
            {data.length == 0
                ? "No Data"
                : data.map((e, i) => (
                      <MobileRecordCard
                          key={i}
                          unitInterface={e}
                          isAdmin={false}
                      />
                  ))}
        </div>
    );
}
