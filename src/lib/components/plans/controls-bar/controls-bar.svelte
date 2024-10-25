<script lang="ts">
    import CountrySelector from '../country-selector/country-selector.svelte';
    import { Settings2, Info } from 'lucide-svelte';
    import type { Country } from '$lib/types/plans';

    let {countries, selectedCountry = $bindable(), isNerdMode = $bindable()} : {countries: Country[], selectedCountry: string, isNerdMode: boolean}= $props();
</script>

<div class="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
    <div class="flex flex-wrap items-center gap-4">
        <CountrySelector {countries} bind:selectedCountry bind:isNerdMode open={false} />

        <label class="flex cursor-pointer items-center gap-2 rounded-md bg-black/30 px-3 py-2">
            <Settings2 class="h-4 w-4 text-purple-400" />
            <span class="text-sm text-white">Nerd Mode</span>
            <input type="checkbox" bind:checked={isNerdMode} class="h-4 w-4 rounded border-gray-700" />
        </label>
    </div>

    <div class="flex items-center gap-2 text-sm text-white/80">
        <Info class="h-4 w-4" />
        <span>Monthly billing only - Cancel anytime</span>
    </div>
</div>
