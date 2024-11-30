import { RecentInvestmentTransaction } from "./recent-investment-tansaction";

const tansactions = [
    {
        id: 1,
        avtarName: "OM",
        investorName: "Olivia Martin",
        investorEmail: "olivia.martin@email.com",
        investedAmount: 1999.0,
    },
    {
        id: 2,
        avtarName: "JL",
        investorName: "Jackson Lee",
        investorEmail: "jackson.lee@email.com",
        investedAmount: 39.0,
    },
    {
        id: 3,
        avtarName: "IN",
        investorName: "Isabella Nguyen",
        investorEmail: "isabella.nguyen@email.com",
        investedAmount: 299.0,
    },
    {
        id: 4,
        avtarName: "WK",
        investorName: "William Kim",
        investorEmail: "will@email.com",
        investedAmount: 99.0,
    },
    {
        id: 5,
        avtarName: "SD",
        investorName: "Sofia Davis",
        investorEmail: "sofia.davis@email.com",
        investedAmount: 39.0,
    },
];

export function RecentInvestments() {
    return (
        <div className="space-y-8">
            {tansactions.map((e, i) => (
                <RecentInvestmentTransaction
                    key={i}
                    avtarName={e.avtarName}
                    investorName={e.investorName}
                    investorEmail={e.investorEmail}
                    investedAmount={e.investedAmount}
                />
            ))}
        </div>
    );
}
