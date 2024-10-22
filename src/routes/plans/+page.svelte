<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';
    import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
    import { Switch } from '$lib/components/ui/switch';
    import PlanCard from '$lib/components/ui-giorgio/plan-card/plan-card.svelte';
    import plans from '$lib/data/plans.json';
    import { writable } from 'svelte/store';

    let isAdvancedMode = false;
    let serverName = '';
    let gameType = '';
    let playerCount = '';
    let recommendedPlan = writable<{ name: string; price: number; description: string; features: string[] } | null>(null);

    function handleSimpleModeSubmit() {
        // Logic to determine the recommended plan based on user inputs
        // This is a placeholder logic, adjust according to your actual plans
        const planIndex = Math.min(
            Math.floor(parseInt(playerCount) / 10),
            plans.length - 1
        );
        recommendedPlan.set(plans[planIndex]);
    }
</script>

<main class="container flex-grow">
    <h1 class="text-5xl font-bold text-center mt-4 p-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Hosting Plans</h1>
    <p class="mb-12 text-2xl text-center text-purple-200 mb-16">Choose the perfect plan for your Minecraft adventure</p>

    <div class="flex grid justify-items-end mb-4">
        <Label class="flex items-center space-x-2">
            <span>Advanced Mode</span>
            <Switch bind:checked={isAdvancedMode} />
        </Label>
        <span class="text-sm text-purple-200">If you already know what you want</span>
    </div>

    {#if !isAdvancedMode}
        <form on:submit|preventDefault={handleSimpleModeSubmit} class="space-y-6 max-w-md mx-auto">
            <div>
                <Label for="serverName">What do you want to call your server?</Label>
                <Input type="text" id="serverName" bind:value={serverName} required />
            </div>

            <div>
                <Label>What type of game do you want to play?</Label>
                <RadioGroup bind:value={gameType}>
                    <div class="flex items-center space-x-2">
                        <RadioGroupItem value="vanilla" id="vanilla" />
                        <Label for="vanilla">Vanilla Minecraft</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                        <RadioGroupItem value="modded" id="modded" />
                        <Label for="modded">Modded Minecraft</Label>
                    </div>
                </RadioGroup>
            </div>

            <div>
                <Label for="playerCount">How many players do you expect?</Label>
                <Input type="number" id="playerCount" bind:value={playerCount} required min="1" />
            </div>

            <Button type="submit" class="w-full">Find My Perfect Plan</Button>
        </form>

        {#if $recommendedPlan}
            <div class="mt-8">
                <h2 class="text-2xl font-bold mb-4">Recommended Plan</h2>
                <PlanCard plan={$recommendedPlan} />
                <div class="mt-4 text-center">
                    <Button on:click={() => isAdvancedMode = true}>View All Plans</Button>
                </div>
            </div>
        {/if}
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each plans as plan}
                <PlanCard {plan} />
            {/each}
        </div>
    {/if}
</main>
