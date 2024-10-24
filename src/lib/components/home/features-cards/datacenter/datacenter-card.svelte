<script lang="ts">
    import { Server, Shield } from 'lucide-svelte';
    import Badge from '$lib/components/ui/badge/badge.svelte';

    export let center: any;

    const getLatencyColor = (latency: number) => {
        if (latency < 100) return 'text-green-400';
        if (latency < 200) return 'text-yellow-400';
        return 'text-red-400';
    };
</script>

<li class="flex items-center text-white">
    <Server class="mr-2 h-5 w-5 text-purple-400" />
    {center.city}
    {#if center.coming_soon}
        <Badge class="ml-2 bg-purple-300">Soon</Badge>
    {:else}
        <span class="ml-2 text-purple-300">{center.latency}ms</span>
        {#if center.latency !== undefined}
            <Shield class="ml-2 h-5 w-5 {getLatencyColor(center.latency)}" />
        {/if}
    {/if}
</li>
