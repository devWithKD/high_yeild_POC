export interface UserInterface {
    id: string;
    role: "super_admin" | "admin" | "accountant" | "investor" | "support" | "";
    name: string;
    email: string;
    image?: string;
    emailVerified?: unknown;
    password?: string;
    provider: string;
}

// interface Investor extends User {
//     investments: string[]; // investement IDs
// }

// interface Investement {
//     unit: string; // Unit ID
//     invested_amt: number; //const
//     investment_date: Date;
//     maturity: Date;
//     percent_investment: number;
//     current_value: number;
// }

export interface UnitInterface {
    name: string;
    type: string;
    assetValue: number;
    investedValue: number;
    profitLoss: number;
}

// interface Quereies {
//     type: "booking" | "investment";
//     description: string;
//     bookingFrom?: Date;
//     bookingTo?: Date;
// }
