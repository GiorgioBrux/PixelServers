// src/lib/utils/currency.ts
interface CurrencyFormat {
    symbol: string;
    symbolFirst: boolean;
}

const CURRENCY_FORMATS: Record<string, CurrencyFormat> = {
    // Symbols before amount
    'USD': { symbol: '$', symbolFirst: true },
    'GBP': { symbol: '£', symbolFirst: true },
    'EUR': { symbol: '€', symbolFirst: true },
    'CAD': { symbol: 'CA$', symbolFirst: true },
    'AUD': { symbol: 'A$', symbolFirst: true },
    'NZD': { symbol: 'NZ$', symbolFirst: true },

    // Symbols after amount
    'SEK': { symbol: 'kr', symbolFirst: false },
    'DKK': { symbol: 'kr', symbolFirst: false },
    'NOK': { symbol: 'kr', symbolFirst: false },
    'JPY': { symbol: '¥', symbolFirst: true },
    'PLN': { symbol: 'zł', symbolFirst: false },
    'CZK': { symbol: 'Kč', symbolFirst: false }
};

// src/lib/utils/currency.ts
export function formatCurrency(country: string, amount: number, currency: string): string {
    try {
        return new Intl.NumberFormat(country, {
            style: 'currency',
            currency: currency,
            currencyDisplay: 'symbol',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (error) {
        // Fallback to basic formatting if currency code is invalid
        const format = CURRENCY_FORMATS[currency] || { symbol: currency, symbolFirst: true };
        return format.symbolFirst 
            ? `${format.symbol}${amount.toFixed(2)}`
            : `${amount.toFixed(2)}${format.symbol}`;
    }
}
