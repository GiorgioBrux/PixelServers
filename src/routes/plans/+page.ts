import { getPlans } from '$lib/data/staticData.svelte.js';
import * as Icon from 'svelte-flags';
import { get } from 'svelte/store';

const getFlagComponent = (countryCode: string) => {
    const code = countryCode.toLowerCase();
    return (Icon as Record<string, any>)[code.charAt(0).toUpperCase() + code.slice(1).toLowerCase()];
};

export async function load({ fetch, params }) {
    const response = await fetch('/api/stripe/countries');
    const data = await response.json();
    const countries = data.map((country: { id: string; default_currency: string; }) => ({
        code: country.id,
        currency: country.default_currency.toUpperCase(),
        name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country.id),
        FlagComponent: `Icon.${country.id}`
    })) as {
        code: string;
        currency: string;
        name: string;
        FlagComponent: any; // Adjust the type if you know the specific type of the FlagComponent
    }[];

    // Fetch plans
    const plansResponse = await fetch('/api/stripe/plans');
    const unwrappedPlansResponse = await plansResponse.json();
    const plans = getPlans(unwrappedPlansResponse.vanillaPlans, unwrappedPlansResponse.modpackPlans, unwrappedPlansResponse.communityPlans);

    return {countries, plans}
}