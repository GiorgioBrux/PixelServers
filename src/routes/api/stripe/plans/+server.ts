// routes/api/stripe/plans/+server.ts
import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit';
import type { Plan, Plans } from '$lib/types/plans';
const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function GET({ url }) {
    try {
        const currency = url.searchParams.get('currency')?.toUpperCase() || 'EUR';

        const products = await stripe.products.list({
            active: true,
            limit: 100
        });

        const prices = await stripe.prices.list({
            active: true,
            expand: ['data.product'],
            limit: 100
        });

        const planMap = new Map<string, Plan>();

        // Process products first
        products.data.forEach(product => {
            planMap.set(product.id, {
                players: product.metadata.players,
                ram: product.metadata.ram,
                ssd: product.metadata.ssd,
                backups: {
                    slots: parseInt(product.metadata.backup_slots),
                    frequency: product.metadata.backup_frequency
                },
                techSpecs: {
                    cpuCores: product.metadata.cpu_cores,
                    iops: product.metadata.iops
                },
                mostPopular: product.metadata.mostPopular === 'true',
                prices: {}
            });
        });

        // Add prices to products
        prices.data.forEach(price => {
            const productId = typeof price.product === 'string' 
                ? price.product 
                : (price.product as Stripe.Product).id;

            const plan = planMap.get(productId);
            if (plan && price.unit_amount) {
                plan.prices[price.currency.toUpperCase()] = price.unit_amount / 100;
            }
        });

        const plans : Plans = {
            vanillaPlans: [] as Plan[],
            modpackPlans: [] as Plan[],
            communityPlans: [] as Plan[]
        };

        planMap.forEach((plan, productId) => {
            const product = products.data.find(p => p.id === productId);
            if (product) {
                switch (product.metadata.plan_type) {
                    case 'vanilla':
                        plans.vanillaPlans.push(plan);
                        break;
                    case 'modpack':
                        plans.modpackPlans.push(plan);
                        break;
                    case 'communities':
                        plans.communityPlans.push(plan);
                        break;
                }
            }
        });

        return json(plans);
    } catch (error) {
        console.error('Error fetching plans:', error);
        return json({ error: 'Failed to fetch plans' }, { status: 500 });
    }
}
