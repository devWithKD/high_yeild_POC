"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
    { date: "2024-04-01", investment: 222, revenue: 150 },
    { date: "2024-04-02", investment: 97, revenue: 180 },
    { date: "2024-04-03", investment: 167, revenue: 120 },
    { date: "2024-04-04", investment: 242, revenue: 260 },
    { date: "2024-04-05", investment: 373, revenue: 290 },
    { date: "2024-04-06", investment: 301, revenue: 340 },
    { date: "2024-04-07", investment: 245, revenue: 180 },
    { date: "2024-04-08", investment: 409, revenue: 320 },
    { date: "2024-04-09", investment: 59, revenue: 110 },
    { date: "2024-04-10", investment: 261, revenue: 190 },
    { date: "2024-04-11", investment: 327, revenue: 350 },
    { date: "2024-04-12", investment: 292, revenue: 210 },
    { date: "2024-04-13", investment: 342, revenue: 380 },
    { date: "2024-04-14", investment: 137, revenue: 220 },
    { date: "2024-04-15", investment: 120, revenue: 170 },
    { date: "2024-04-16", investment: 138, revenue: 190 },
    { date: "2024-04-17", investment: 446, revenue: 360 },
    { date: "2024-04-18", investment: 364, revenue: 410 },
    { date: "2024-04-19", investment: 243, revenue: 180 },
    { date: "2024-04-20", investment: 89, revenue: 150 },
    { date: "2024-04-21", investment: 137, revenue: 200 },
    { date: "2024-04-22", investment: 224, revenue: 170 },
    { date: "2024-04-23", investment: 138, revenue: 230 },
    { date: "2024-04-24", investment: 387, revenue: 290 },
    { date: "2024-04-25", investment: 215, revenue: 250 },
    { date: "2024-04-26", investment: 75, revenue: 130 },
    { date: "2024-04-27", investment: 383, revenue: 420 },
    { date: "2024-04-28", investment: 122, revenue: 180 },
    { date: "2024-04-29", investment: 315, revenue: 240 },
    { date: "2024-04-30", investment: 454, revenue: 380 },
    { date: "2024-05-01", investment: 165, revenue: 220 },
    { date: "2024-05-02", investment: 293, revenue: 310 },
    { date: "2024-05-03", investment: 247, revenue: 190 },
    { date: "2024-05-04", investment: 385, revenue: 420 },
    { date: "2024-05-05", investment: 481, revenue: 390 },
    { date: "2024-05-06", investment: 498, revenue: 520 },
    { date: "2024-05-07", investment: 388, revenue: 300 },
    { date: "2024-05-08", investment: 149, revenue: 210 },
    { date: "2024-05-09", investment: 227, revenue: 180 },
    { date: "2024-05-10", investment: 293, revenue: 330 },
    { date: "2024-05-11", investment: 335, revenue: 270 },
    { date: "2024-05-12", investment: 197, revenue: 240 },
    { date: "2024-05-13", investment: 197, revenue: 160 },
    { date: "2024-05-14", investment: 448, revenue: 490 },
    { date: "2024-05-15", investment: 473, revenue: 380 },
    { date: "2024-05-16", investment: 338, revenue: 400 },
    { date: "2024-05-17", investment: 499, revenue: 420 },
    { date: "2024-05-18", investment: 315, revenue: 350 },
    { date: "2024-05-19", investment: 235, revenue: 180 },
    { date: "2024-05-20", investment: 177, revenue: 230 },
    { date: "2024-05-21", investment: 82, revenue: 140 },
    { date: "2024-05-22", investment: 81, revenue: 120 },
    { date: "2024-05-23", investment: 252, revenue: 290 },
    { date: "2024-05-24", investment: 294, revenue: 220 },
    { date: "2024-05-25", investment: 201, revenue: 250 },
    { date: "2024-05-26", investment: 213, revenue: 170 },
    { date: "2024-05-27", investment: 420, revenue: 460 },
    { date: "2024-05-28", investment: 233, revenue: 190 },
    { date: "2024-05-29", investment: 78, revenue: 130 },
    { date: "2024-05-30", investment: 340, revenue: 280 },
    { date: "2024-05-31", investment: 178, revenue: 230 },
    { date: "2024-06-01", investment: 178, revenue: 200 },
    { date: "2024-06-02", investment: 470, revenue: 410 },
    { date: "2024-06-03", investment: 103, revenue: 160 },
    { date: "2024-06-04", investment: 439, revenue: 380 },
    { date: "2024-06-05", investment: 88, revenue: 140 },
    { date: "2024-06-06", investment: 294, revenue: 250 },
    { date: "2024-06-07", investment: 323, revenue: 370 },
    { date: "2024-06-08", investment: 385, revenue: 320 },
    { date: "2024-06-09", investment: 438, revenue: 480 },
    { date: "2024-06-10", investment: 155, revenue: 200 },
    { date: "2024-06-11", investment: 92, revenue: 150 },
    { date: "2024-06-12", investment: 492, revenue: 420 },
    { date: "2024-06-13", investment: 81, revenue: 130 },
    { date: "2024-06-14", investment: 426, revenue: 380 },
    { date: "2024-06-15", investment: 307, revenue: 350 },
    { date: "2024-06-16", investment: 371, revenue: 310 },
    { date: "2024-06-17", investment: 475, revenue: 520 },
    { date: "2024-06-18", investment: 107, revenue: 170 },
    { date: "2024-06-19", investment: 341, revenue: 290 },
    { date: "2024-06-20", investment: 408, revenue: 450 },
    { date: "2024-06-21", investment: 169, revenue: 210 },
    { date: "2024-06-22", investment: 317, revenue: 270 },
    { date: "2024-06-23", investment: 480, revenue: 530 },
    { date: "2024-06-24", investment: 132, revenue: 180 },
    { date: "2024-06-25", investment: 141, revenue: 190 },
    { date: "2024-06-26", investment: 434, revenue: 380 },
    { date: "2024-06-27", investment: 448, revenue: 490 },
    { date: "2024-06-28", investment: 149, revenue: 200 },
    { date: "2024-06-29", investment: 103, revenue: 160 },
    { date: "2024-06-30", investment: 446, revenue: 400 },
];

const chartConfig = {
    views: {
        label: "Page Views",
    },
    investment: {
        label: "Investment",
        color: "hsl(var(--chart-1))",
    },
    revenue: {
        label: "Revenue",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function InsightBarGraph() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("investment");

    const total = React.useMemo(
        () => ({
            investment: chartData.reduce(
                (acc, curr) => acc + curr.investment,
                0
            ),
            revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
        }),
        []
    );

    return (
        <Card>
            <CardHeader className="flex flex-col lg:flex-row items-stretch space-y-0 border-b p-0 ">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Insights</CardTitle>
                    <CardDescription>
                        Showing total investment & revenue for the last 3 months
                    </CardDescription>
                </div>
                <div className="flex">
                    {["investment", "revenue"].map((key) => {
                        const chart = key as keyof typeof chartConfig;
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                    {total[
                                        key as keyof typeof total
                                    ].toLocaleString()}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[280px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                });
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(
                                            value
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        });
                                    }}
                                />
                            }
                        />
                        <Bar
                            dataKey={activeChart}
                            fill={`var(--color-${activeChart})`}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
