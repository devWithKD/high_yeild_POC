import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ManipulationSection() {
    return (
        <div className="sticky top-3 left-0 z-50 w-[100%] p-3 bg-zinc-100 rounded-[16px] flex justify-between">
            <div className="flex max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search..." />
                <Button type="submit" className="rounded-[8px] bg-transparent border-[1px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                    <Search />
                </Button>
            </div>
            <div className="flex max-w-sm items-center space-x-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Types</SelectLabel>
                            <SelectItem value="booking">Booking</SelectItem>
                            <SelectItem value="investment">
                                Investment
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>States</SelectLabel>
                            <SelectItem value="raised">Raised</SelectItem>
                            <SelectItem value="inprocess">InProcess</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
