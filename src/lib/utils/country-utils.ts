// src/lib/utils/country-utils.ts

export function getCountryData(country: { id: string; default_currency: string }) {
    return {
        code: country.id,
        currency: country.default_currency.toUpperCase(),
        name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country.id),
        FlagComponent: `Icon.${country.id}`
    };
}
