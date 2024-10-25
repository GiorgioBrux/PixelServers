// src/lib/types/stripe.ts
export interface StripePlan {
    id: string;
    name: string;
    ram: string;
    ssd: string;
    players: string;
    bestFor: string;
    mostPopular: boolean;
    plan_type: 'vanilla' | 'modpack' | 'communities';
    prices: {
        [currency: string]: number;
    };
}
