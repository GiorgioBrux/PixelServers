// src/lib/types/plans.ts
export interface Country {
    code: string;
    currency: string;
    name: string;
    FlagComponent: any; // We can make this more specific later
}

export interface Plan {
    // Add plan interface here based on your data structure
}

export interface PlansPageData {
    countries: Country[];
    plans: Plan[];
}
