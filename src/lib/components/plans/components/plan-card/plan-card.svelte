<!-- src/lib/components/plans/plan-card/plan-card.svelte -->
<script lang="ts">
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import { HardDrive, Clock, Cpu, Users, Zap } from 'lucide-svelte';
    import type { Plan } from '$lib/types/plans';
    import { formatCurrency } from '$lib/utils/currency';

    export let plan: Plan;
    export let isNerdMode = false;
    export let currency = 'EUR';
    export let countryCode: string;

    $: price = plan.prices[currency] || plan.prices['EUR'];
    $: formattedPrice = formatCurrency(countryCode, price, currency);
</script>

<Card class="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/60">
    {#if plan.mostPopular}
        <div class="absolute right-0 top-0 m-2 rounded-full bg-yellow-500 px-4 py-1 text-sm font-bold text-black shadow-lg">
            Popular
        </div>
    {/if}

    <CardHeader>
        <div class="flex items-center justify-center">
            <CardTitle class="text-2xl font-bold text-white">
                {plan.players}+ Players | {plan.ram}
            </CardTitle>
        </div>
    </CardHeader>

    <CardContent>
        <div class="flex items-center justify-around">
            <div>
                <div class="flex items-center space-x-2 text-white/80">
                    <HardDrive class="h-4 w-4" />
                    <span>{plan.ssd}</span>
                </div>
                <div class="flex items-center space-x-2 text-white/80">
                    <Clock class="h-4 w-4" />
                    <span>{plan.backups.slots} slots / {plan.backups.frequency}</span>
                </div>
            </div>
            <div class="text-right">
                <div class="text-3xl font-bold text-white">{formattedPrice}</div>
                <div class="text-sm text-gray-400">/monthly</div>
            </div>
        </div>

        {#if isNerdMode}
            <div class="space-y-2 rounded-lg bg-black/20 p-3">
                <div class="flex justify-between text-sm text-white/70">
                    <span>CPU</span>
                    <span>{plan.techSpecs.cpuCores}</span>
                </div>
                <div class="flex justify-between text-sm text-white/70">
                    <span>IOPS</span>
                    <span>{plan.techSpecs.iops}</span>
                </div>
            </div>
        {/if}
    </CardContent>

    <CardFooter>
        <Button class="w-full bg-blue-600 hover:bg-blue-700" size="lg">Order</Button>
    </CardFooter>
</Card>
