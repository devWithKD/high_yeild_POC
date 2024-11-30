import { AreaGraph } from "./area-graph";
import { InsightBarGraph } from "./insight-bar-graph";
import { PieGraph } from "./pie-graph";
import { CalendarDateRangePicker } from "@/components/app-date-range-picker";
import PageContainer from "@/components/layout/page-container";
import { RecentInvestments } from "./recent-investments";
import { Button } from "@/components/ui/button";
import { IndianRupee, Users, Boxes, ChartSpline } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsPnLChart } from "./analytics-PnL-Chart";

export default function OverViewPage() {
    return (
        <PageContainer scrollable>
            <div className="space-y-2">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Hi, Welcome back 👋
                    </h2>
                    <div className="hidden items-center space-x-2 md:flex">
                        <CalendarDateRangePicker />
                        <Button>Download</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total P&L
                                    </CardTitle>
                                    <IndianRupee className="text-zinc-400" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-[120%] font-bold">
                                        ₹45,231.89
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total investment
                                    </CardTitle>
                                    <Boxes className="text-zinc-400" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-[120%] font-bold">
                                        +2350
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total revenue
                                    </CardTitle>
                                    <ChartSpline className="text-zinc-400" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-[120%] font-bold">
                                        +12,234
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        New Investors
                                    </CardTitle>
                                    <Users className="text-zinc-400" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-[120%] font-bold">
                                        +573
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <div className="col-span-4">
                                <InsightBarGraph />
                            </div>
                            <Card className="col-span-4 md:col-span-3">
                                <CardHeader>
                                    <CardTitle>Recent Investment</CardTitle>
                                    <CardDescription>
                                        You made 265 Investment this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentInvestments />
                                </CardContent>
                            </Card>
                            <div className="col-span-4">
                                <AreaGraph />
                            </div>
                            <div className="col-span-4 md:col-span-3">
                                <PieGraph />
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="analytics" className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
                            <div className="col-span-6">
                                <AnalyticsPnLChart
                                    cardTitle="P & L Analysis"
                                    cardDescription="Yearly Analysis"
                                />
                            </div>
                            <div className="col-span-6">
                                <AnalyticsPnLChart
                                    cardTitle="P & L Analysis"
                                    cardDescription="Yearly Analysis"
                                />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </PageContainer>
    );
}
