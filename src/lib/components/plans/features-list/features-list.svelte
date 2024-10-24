<script lang="ts">
    import { Check } from 'lucide-svelte';
    import { features } from '$lib/data/staticData.svelte';
</script>

<div class="mb-10 text-center">
    <h2 class="mb-4 text-2xl font-semibold text-white">All Plans Include</h2>
    <ul class="inline-block text-left text-white/80">
        {#each features as feature}
            <li class="mb-2 flex items-center">
                <div class="mr-2 rounded-full bg-green-500/20 p-1">
                    <Check class="h-4 w-4 text-green-500" />
                </div>
                {feature}
            </li>
        {/each}
    </ul>
</div>
