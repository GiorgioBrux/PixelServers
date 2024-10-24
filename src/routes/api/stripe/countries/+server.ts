import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private'

const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function GET() {
    try {
        const countries = await stripe.countrySpecs.list({limit: 200});
        return new Response(JSON.stringify(countries.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch countries' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}