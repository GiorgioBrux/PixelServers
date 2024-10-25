// src/lib/types/plans.ts
export interface Country {
    code: string;
    currency: string;
    name: string;
}

export interface TechSpecs {
    cpuCores: string;
    iops: string;
}

export interface Backups {
    slots: number;
    frequency: string;
}

export interface Plan {
    players: string;
    ram: string;
    ssd: string;
    backups: Backups;
    techSpecs: TechSpecs;
    mostPopular: boolean;
    prices: {
        [currency: string]: number;
    };
}

export interface Plans {
    vanillaPlans: Plan[];
    modpackPlans: Plan[];
    communityPlans: Plan[];
}

export interface PlanCategory {
    title: string;
    description: string;
    plans: Plan[];
    overlayFrom?: string;
    overlayTo?: string;
    classNames?: string;
}
