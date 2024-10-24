// routes/api/stripe/plans/+server.ts
import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit';
import type { Plans } from '$lib/data/staticData.svelte';

const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function GET() {
    try {
        const products = await stripe.products.list({
            active: true,
            expand: ['data.default_price'],
            limit: 100
        });

        const plans = {
            vanillaPlans: [] as Plans[],
            modpackPlans: [] as Plans[],
            communityPlans: [] as Plans[]
        };

        products.data.forEach(product => {
            const price = product.default_price as Stripe.Price;
            const planData = {
                ram: product.metadata.ram,
                ssd: product.metadata.ssd,
                players: product.metadata.players,
                bestFor: product.metadata.bestFor,
                price: price.unit_amount ? price.unit_amount / 100 : 0,
                mostPopular: product.metadata.mostPopular === 'true'
            };

            switch (product.metadata.plan_type) {
                case 'vanilla':
                    plans.vanillaPlans.push(planData);
                    break;
                case 'modpack':
                    plans.modpackPlans.push(planData);
                    break;
                case 'communities':
                    plans.communityPlans.push(planData);
                    break;
            }
        });

        return json(plans);
    } catch (error) {
        console.error('Error fetching plans:', error);
        return json({ error: 'Failed to fetch plans' }, { status: 500 });
    }
}
