<script lang="ts">
    import { dataCentersStore, pingDataCenters } from '$lib/stores/datacenters';
    import DatacenterCard from './datacenter-card.svelte';
    import BigGlobe from '$lib/components/ui-giorgio/big-globe/big-globe.svelte';
    import { onMount, onDestroy } from 'svelte';

    
    let intervalId: ReturnType<typeof setInterval>;

    onMount(() => {
        pingDataCenters();
        intervalId = setInterval(pingDataCenters, 10000);
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

<section class="bg-opacity-50 pb-16 backdrop-blur-md">
    <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
            <div class="w-full rounded-xl bg-purple-800 bg-opacity-50 p-6 md:w-1/2 md:p-8">
                <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
                    Global Network of Data Centers
                </h2>
                <p class="mb-6 text-base text-purple-200 md:text-lg">
                    Experience lightning-fast connections with our strategically placed data centers 
                    around the world. Low latency, high performance, and unparalleled reliability 
                    for your Minecraft adventures.
                </p>
                <ul class="space-y-2">
                    {#each $dataCentersStore as center}
                        <DatacenterCard {center} />
                    {/each}
                </ul>
            </div>
            <div class="relative aspect-square w-full overflow-visible px-12 md:w-1/2 md:max-w-md lg:max-w-lg xl:max-w-xl">
                <BigGlobe />
            </div>
        </div>
    </div>
</section>
