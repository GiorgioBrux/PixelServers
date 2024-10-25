<!-- src/routes/plans/+page.svelte -->
<script lang="ts">
    import PlansOverview from '$lib/components/plans/components/plans-overview/PlansOverview.svelte';
    import ControlsBar from '$lib/components/plans/controls-bar/controls-bar.svelte';
    import CustomPlanCta from '$lib/components/plans/custom-plan-cta/custom-plan-cta.svelte';
    import FeaturesList from '$lib/components/plans/features-list/features-list.svelte';
    import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Country } from '$lib/types/plans';
    import type { PageData } from './$types';

    const { data } : {data: PageData} = $props();

    let isNerdMode = $state(false);
    let selectedCountry = $state(data.guessedCountry || 'US');
    let selectedCurrency = $derived(
        data.countries.find((c: Country) => c.code === selectedCountry)?.currency || 'USD'
    );

	$inspect(selectedCurrency);
	$inspect(selectedCountry)

    let currencySymbol = $derived(
        new Intl.NumberFormat('en', { 
            style: 'currency', 
            currency: selectedCurrency 
        }).format(0).replace(/[\d.]/g, '')
    );
</script>

<main class="flex-grow bg-gradient-to-b from-purple-800 to-indigo-900">
    <section class="container mx-auto px-4 py-12">
        <h1 class="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text pb-2 pt-10 text-center text-5xl font-bold text-transparent">
            Our Hosting Plans
        </h1>
        <p class="mb-8 text-center text-2xl text-purple-200">Choose the perfect plan for your Minecraft adventure</p>

        <ControlsBar 
            countries={data.countries} 
            bind:selectedCountry
            bind:isNerdMode 
        />

        {#each data.planCategories as category}
            <PlansOverview 
                {...category}
                {isNerdMode}
                currency={selectedCurrency}
                countryCode={selectedCountry}
            />
        {/each}

        <Separator class="my-10" />

        <FeaturesList />
        <CustomPlanCta />
    </section>
</main>
