"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type MonthData = { month: string; investment: number; revenue: number }[];

interface YearlyData {
    [year: string]: MonthData;
}

const yearlyData: YearlyData = {
    "2023": [
        { month: "January", investment: 186, revenue: 80 },
        { month: "February", investment: 305, revenue: 200 },
        { month: "March", investment: 237, revenue: 120 },
        { month: "April", investment: 73, revenue: 190 },
        { month: "May", investment: 209, revenue: 130 },
        { month: "June", investment: 214, revenue: 140 },
    ],
    "2024": [
        { month: "January", investment: 186, revenue: 80 },
        { month: "February", investment: 305, revenue: 200 },
        { month: "March", investment: 237, revenue: 120 },
        { month: "April", investment: 73, revenue: 190 },
        { month: "May", investment: 209, revenue: 130 },
        { month: "June", investment: 214, revenue: 140 },
    ],
};

const chartConfig = {
    investment: {
        label: "Investment",
        color: "hsl(var(--chart-1))",
    },
    revenue: {
        label: "Revenue",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function AnalyticsPnLChart({
    cardTitle,
    cardDescription,
}: {
    cardTitle: string;
    cardDescription: string;
}) {
    const years: string[] = Object.keys(yearlyData);
    const charts: string[] = ["Bar Chart", "Line Chart"];

    const [chartData, setChartData] = useState<MonthData>(yearlyData[years[0]]);
    const [chartType, setChartType] = useState<string>("Bar Chart");

    function selectionHandleYear(selection: string) {
        setChartData(yearlyData[selection]);
    }

    function selectionHandleChart(selection: string) {
        setChartType(selection);
    }

    console.log(years);

    return (
        <Card>
            <CardHeader>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
                    <div className="col-span-6">
                        <CardTitle>{cardTitle}</CardTitle>
                        <CardDescription>{cardDescription}</CardDescription>
                    </div>
                    <div className="col-span-6 flex justify-end space-x-2">
                        <Select
                            defaultValue={years[0]}
                            onValueChange={selectionHandleYear}
                        >
                            <SelectTrigger className="h-[30px] w-[180px] text-[10px]">
                                <SelectValue placeholder="Select a Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {years.map((e, i) => (
                                        <SelectItem key={i} value={e}>
                                            {e}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select
                            defaultValue={charts[0]}
                            onValueChange={selectionHandleChart}
                        >
                            <SelectTrigger className="h-[30px] w-[180px] text-[10px]">
                                <SelectValue placeholder="Select a Chart" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {charts.map((e, i) => (
                                        <SelectItem key={i} value={e}>
                                            {e}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    {chartType === "Bar Chart" ? (
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={
                                    <ChartTooltipContent indicator="dashed" />
                                }
                            />
                            <Bar
                                dataKey="investment"
                                fill="var(--color-investment)"
                                radius={4}
                            />
                            <Bar
                                dataKey="revenue"
                                fill="var(--color-revenue)"
                                radius={4}
                            />
                        </BarChart>
                    ) : (
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <Line
                                dataKey="investment"
                                type="monotone"
                                stroke="var(--color-investment)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                dataKey="revenue"
                                type="monotone"
                                stroke="var(--color-revenue)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    )}
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    );
}
