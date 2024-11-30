export const internalRoles = [
    "super_admin",
    "admin",
    "accountant",
    "support",
] as const;

export type InternalRole = (typeof internalRoles)[number];

export function isInternalRole(value: string): value is InternalRole {
    return (internalRoles as readonly string[]).includes(value);
}

export const roles = [...internalRoles, "investor", ""] as const;

export type Role = (typeof roles)[number];

export interface UserInterface {
    id: string;
    role: Role;
    name: string;
    email: string;
    image?: string;
    emailVerified?: unknown;
    password?: string;
    provider: [string];
}

export interface TransactionInterface {
    user: Partial<UserInterface>;
    type: "credit" | "debit" | "investment";
    transaction_date: Date;
    transaction_amount: number;
}

// interface Investor extends User {
//     investments: string[]; // investement IDs
// }

export interface InvestementInterface {
    unit: string; // Unit ID
    invested_amt: number; //const
    investment_date: Date;
    maturity: Date;
    percent_investment: number;
    current_value: number;
}

export interface UnitInterface {
    id: string;
    name: string;
    type: string;
    assetValue: number;
    investedValue: number;
    profitLoss: number;
}

export interface QuereiesInterface {
    user: Partial<UserInterface>;
    type: "booking" | "investment";
    state: "raised" | "inprocess" | "resolved";
    description: string;
    answer: string;
    bookingFrom?: Date;
    bookingTo?: Date;
}

// export interface QuereiesCard extends QuereiesInterface {
//     name: string;
//     email: string;
// }
