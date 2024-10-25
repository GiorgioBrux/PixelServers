// src/routes/plans/+page.ts
import type { Country, Plan, Plans } from '$lib/types/plans';
import { detectUserCountryWithValidation } from '$lib/utils/geolocalization';
import type { PageLoad } from './$types';


export const load: PageLoad = async ({ fetch, url }) => {

    const [countriesResponse, plansResponse] = await Promise.all([
        fetch('/api/stripe/countries'),
        fetch(`/api/stripe/plans`)
    ]);

    const countries : Country[] = await countriesResponse.json();
    const plans : Plans = await plansResponse.json();

    const planCategories = [
        {
            title: 'Vanilla Plans',
            description: 'Perfect for vanilla Minecraft servers',
            plans: plans.vanillaPlans,
            overlayFrom: 'from-blue-600',
            overlayTo: 'to-blue-900',
            classNames: ''
        },
        {
            title: 'Modpack Plans',
            description: 'Optimized for modded Minecraft',
            plans: plans.modpackPlans,
            overlayFrom: 'from-orange-600',
            overlayTo: 'to-orange-900',
            classNames: 'mt-12'
        },
        {
            title: 'Community Plans',
            description: 'For large communities and networks',
            plans: plans.communityPlans,
            overlayFrom: 'from-red-600',
            overlayTo: 'to-red-900',
            classNames: 'mt-12'
        }
    ];
    

    return { 
        countries,
        planCategories,
        guessedCountry: await detectUserCountryWithValidation(countries.map(c => c.code)),
    };
};

