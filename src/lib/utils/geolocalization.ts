// src/lib/utils/geolocation.ts
export async function detectUserCountry(): Promise<string> {
    // Helper to validate country code
    const isValidCountryCode = (code: string | undefined): code is string => {
        return typeof code === 'string' && code.length === 2;
    };

    try {
        // 1. Try browser's language setting
        const browserLang = navigator.languages?.[0] || navigator.language;
        if (browserLang) {
            const browserCountry = browserLang.split('-')[1]?.toUpperCase();
            if (isValidCountryCode(browserCountry)) {
                console.log('Country detected from browser language:', browserCountry);
                return browserCountry;
            }
        }

        // 2. Try Intl API timezone
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone) {
            try {
                // This will throw if the region isn't found
                const timeZoneCountry = new Intl.Locale(timeZone).region;
                if (isValidCountryCode(timeZoneCountry)) {
                    console.log('Country detected from timezone:', timeZoneCountry);
                    return timeZoneCountry;
                }
            } catch (e) {
                console.debug('Failed to get country from timezone');
            }
        }

        // 3. Only if client-side methods fail, try server-side
        console.log('Falling back to server-side geolocation');
        const response = await fetch('/api/geoip');
        const { country } = await response.json();
        if (isValidCountryCode(country)) {
            console.log('Country detected from server:', country);
            return country;
        }

        // 4. Final fallback
        console.log('All detection methods failed, using default: US');
        return 'US';
    } catch (error) {
        console.error('Country detection failed:', error);
        return 'US';
    }
}

// Optional: Add validation against supported countries
export async function detectUserCountryWithValidation(supportedCountries: string[]): Promise<string> {
    const detectedCountry = await detectUserCountry();
    return supportedCountries.includes(detectedCountry) ? detectedCountry : 'US';
}
