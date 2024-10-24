<script lang="ts">
    import { loadStripe, type Stripe } from '@stripe/stripe-js';
    import { Elements, PaymentElement } from 'svelte-stripe';
    import { onMount } from 'svelte';
    import { PUBLIC_STRIPE_KEY } from '$env/static/public';
    import { Card } from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import { Loader2 } from 'lucide-svelte';

    let stripe: Stripe | null = null;
    let elements: any;
    let isLoading = false;
    let errorMessage = '';
    let clientSecret: string;

    onMount(async () => {
        stripe = await loadStripe(PUBLIC_STRIPE_KEY);
        // Fetch client secret from your backend
        // const response = await fetch('/api/create-payment-intent');
        // clientSecret = await response.json();
    });

    async function submit(e: Event) {
        e.preventDefault();
        if (!stripe || !elements) return;

        isLoading = true;
        errorMessage = '';

        try {
            const { error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment/success`,
                },
            });

            if (error) {
                errorMessage = error.message || 'An error occurred';
            }
        } catch (e) {
            errorMessage = 'An unexpected error occurred';
        } finally {
            isLoading = false;
        }
    }
</script>

<main class="flex flex-grow flex-col items-center bg-gradient-to-b from-purple-800 to-indigo-900 px-4 py-12">
    <Card class="w-full max-w-2xl bg-black/20 backdrop-blur-sm">
        <div class="p-8">
            <h1 class="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
                Complete Your Purchase
            </h1>
            <p class="mb-8 text-lg text-purple-200">
                Secure payment for your Minecraft server
            </p>

            {#if stripe && clientSecret}
                <Elements {stripe} {clientSecret} bind:elements>
                    <form on:submit|preventDefault={submit} class="space-y-6">
                        <div class="rounded-lg bg-black/30 p-4">
                            <PaymentElement 
                                options={{
                                    layout: 'tabs'
                                }}
                            />
                        </div>

                        {#if errorMessage}
                            <div class="rounded-md bg-red-500/20 p-4 text-red-200">
                                {errorMessage}
                            </div>
                        {/if}

                        <Button 
                            type="submit" 
                            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                            disabled={isLoading}
                        >
                            {#if isLoading}
                                <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            {:else}
                                Complete Payment
                            {/if}
                        </Button>
                    </form>
                </Elements>
            {:else}
                <div class="flex justify-center">
                    <Loader2 class="h-8 w-8 animate-spin text-purple-400" />
                </div>
            {/if}

            <div class="mt-6 text-center text-sm text-purple-200">
                <p>Your payment is secured by Stripe</p>
            </div>
        </div>
    </Card>
</main>
