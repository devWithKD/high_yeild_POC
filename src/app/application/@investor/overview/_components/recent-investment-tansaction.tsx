import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentInvestmentTransaction({
    avtarName,
    investorName,
    investorEmail,
    investedAmount,
}: {
    avtarName: string;
    investorName: string;
    investorEmail: string;
    investedAmount: number;
}) {
    return (
        <div className="flex items-center">
            <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{avtarName}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                    {investorName}
                </p>
                <p className="text-sm text-muted-foreground sm:block md:block xmd:hidden lg:block">
                    {investorEmail}
                </p>
            </div>
            <div className="ml-auto font-medium">+₹{investedAmount}</div>
        </div>
    );
}
