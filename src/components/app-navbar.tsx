"use client";

import * as React from "react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

export function AppNavBar() {
    const path = usePathname();
    const validPaths: string[] = ["/application/overview"];

    const classNames: string = `flex items-center sticky top-3 left-0 z-50 mx-3 ${
        validPaths.includes(path) === false
            ? "bg-zinc-100 lg:bg-transparent"
            : ""
    } rounded-[16px]`;

    return (
        <div className={classNames}>
            <SidebarTrigger className="ms-4 rounded-[16px]" />
            <AppManipulationSection />
        </div>
    );
}

function AppManipulationSection() {
    const path = usePathname();
    const validPaths: string[] = ["/application/overview"];

    if (validPaths.includes(path) === true) return null;

    if (window.innerWidth <= 1024) {
        return <MobileScreen />;
    } else {
        return null;
    }
}

function MobileScreen() {
    return (
        <div className="w-[100%] p-3 flex justify-between space-x-3">
            <div className="flex max-w-sm items-center space-x-1">
                <Input type="text" placeholder="Search..." />
                <Button
                    type="submit"
                    className="rounded-[8px] bg-transparent border-[1px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                    <Search />
                </Button>
            </div>
        </div>
    );
}
