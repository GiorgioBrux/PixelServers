// routes/api/stripe/countries/+server.ts
import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit';

const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function GET() {
    try {
        const countries = await stripe.countrySpecs.list({ limit: 200 });

        const processedCountries = countries.data.map(country => ({
            code: country.id,
            currency: country.default_currency.toUpperCase(),
            name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country.id),
            //supported_currencies: country.supported_payment_currencies.map(c => c.toUpperCase())
        }));

        return json(processedCountries);
    } catch (error) {
        console.error('Error fetching countries:', error);
        return json({ error: 'Failed to fetch countries' }, { status: 500 });
    }
}
