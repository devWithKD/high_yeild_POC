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
    id: string;
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
