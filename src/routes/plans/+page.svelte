<script lang="ts">
    import type { PageData } from './$types';
    import { Separator } from '$lib/components/ui/separator';
    import { Loader2 } from 'lucide-svelte';
    import ControlsBar from '$lib/components/plans/controls-bar/controls-bar.svelte';
    import FeaturesList from '$lib/components/plans/features-list/features-list.svelte';
    import CustomPlanCta from '$lib/components/plans/custom-plan-cta/custom-plan-cta.svelte';
	import PlansOverview from '$lib/components/ui-giorgio/plans-overview/PlansOverview.svelte';

    const { data } = $props<{ data: PageData }>();

    let isNerdMode = $state(false);
    let selectedCountry = $state('Us');
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

        {#if data.plans.length === 0}
            <div class="flex justify-center">
                <Loader2 class="h-8 w-8 animate-spin text-purple-400" />
            </div>
        {:else}
            {#each data.plans as plan}
                <PlansOverview {...plan} plans={Array.isArray(plan.plans) ? plan.plans : [plan.plans]} />
            {/each}
        {/if}

        <Separator class="my-10" />

        <FeaturesList />
        <CustomPlanCta />
    </section>
</main>
