<script lang="ts">
	let {
		title,
		description,
		plans,
		overlayFrom,
		overlayTo,
		classNames,
		isNerdMode = false // Add this for the nerd mode toggle
	}: {
		title: string;
		description: string;
		plans: Plans[];
		overlayFrom?: string;
		overlayTo?: string;
		classNames?: string;
		isNerdMode?: boolean;
	} = $props();

	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { HardDrive, Clock, Cpu, Users, Zap } from 'lucide-svelte';
	import type { Plans } from '$lib/data/staticData.svelte';
</script>

<div class="relative rounded-xl bg-gradient-to-br {overlayFrom} {overlayTo} p-8 {classNames}">
	<div class="mb-8 text-center">
		<h2 class="text-3xl font-bold text-white">{title}</h2>
		<p class="text-white/80">{description}</p>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each plans.reverse() as plan}
			<Card class="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/60">
				{#if plan.mostPopular}
					<div class="absolute right-0 top-0 m-2 rounded-full bg-yellow-500 px-4 py-1 text-sm font-bold text-black shadow-lg">Popular</div>
				{/if}

				<CardHeader>
					<div class="flex items-center justify-center">
						<CardTitle class="text-2xl font-bold text-white">
							{plan.players}+ Players | {plan.ram}
						</CardTitle>
					</div>
				</CardHeader>

				<CardContent class="">
					<div class="flex items-center justify-around">
						<div>
							<div class="flex items-center space-x-2 text-white/80">
								<HardDrive class="h-4 w-4" />
								<span>{plan.ssd}</span>
							</div>

							<div class="flex items-center space-x-2 text-white/80">
								<Clock class="h-4 w-4" />
								<span>{plan.backups?.slots} slots / {plan.backups?.frequency}</span>
							</div>
						</div>

						<div class="text-right">
							<div class="text-3xl font-bold text-white">{plan.price}€</div>
							<div class="text-sm text-gray-400">/monthly</div>
						</div>
					</div>

					{#if isNerdMode}
						<div class="space-y-2 rounded-lg bg-black/20 p-3">
							<div class="flex justify-between text-sm text-white/70">
								<span>CPU</span>
								<span>{plan.techSpecs?.cpuCores}</span>
							</div>
							<div class="flex justify-between text-sm text-white/70">
								<span>IOPS</span>
								<span>{plan.techSpecs?.iops}</span>
							</div>
						</div>
					{/if}
				</CardContent>

				<CardFooter>
					<Button class="w-full bg-blue-600 hover:bg-blue-700" size="lg">Add to Cart</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>
