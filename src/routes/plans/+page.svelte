<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Check, Settings2, Info, Earth } from 'lucide-svelte';
	import PlansOverview from '$lib/components/ui-giorgio/plans-overview/PlansOverview.svelte';
	import { features } from '$lib/data/staticData.svelte';
	import * as Icon from 'svelte-flags';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Loader2 } from 'lucide-svelte';

	let isNerdMode = $state(false);
	let selectedCountry = $state('Us');
	const { data } = $props();

	const titleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
</script>

<main class="flex-grow bg-gradient-to-b from-purple-800 to-indigo-900">
	<section class="container mx-auto px-4 py-12">
		<!-- Header -->
		<h1 class="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text pb-2 pt-10 text-center text-5xl font-bold text-transparent">
			Our Hosting Plans
		</h1>
		<p class="mb-8 text-center text-2xl text-purple-200">Choose the perfect plan for your Minecraft adventure</p>

		<!-- Controls Bar -->
		<div class="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
			<div class="flex flex-wrap items-center gap-4">
				<!-- Country Selector -->
				<div class="flex items-center gap-2">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger class="flex items-center gap-2 rounded-md bg-black/30 px-3 py-1.5 text-sm text-white hover:bg-black/40">
							<Earth class="h-4 w-4 text-purple-400" />
							{#if selectedCountry}
								{@const FlagComponent = (Icon as Record<string, any>)[titleCase(selectedCountry)]}
								{#if FlagComponent}
									<FlagComponent size="20" />
								{/if}
							{/if}
							<span>{data.countries.find((c: { code: string }) => c.code === selectedCountry)?.name}</span>
							<span class="text-white/60">
								({data.countries.find((c: { code: string }) => c.code === selectedCountry)?.currency})
							</span>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							{#each data.countries as country}
								<DropdownMenu.Item
									on:click={() => {
										selectedCountry = country.code;
									}}
									class="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 hover:bg-white/10"
								>
									{@const FlagComponent = (Icon as Record<string, any>)[titleCase(country.code)]}
									{#if FlagComponent}
										<FlagComponent size="20" />
									{/if}
									<span class="text-white">{country.name}</span>
									<span class="ml-auto text-white/60">({country.currency})</span>
								</DropdownMenu.Item>
							{/each}
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>

				<!-- Rest of your controls -->
				<label class="flex cursor-pointer items-center gap-2 rounded-md bg-black/30 px-3 py-1.5">
					<Settings2 class="h-4 w-4 text-purple-400" />
					<span class="text-sm text-white">Nerd Mode</span>
					<input type="checkbox" bind:checked={isNerdMode} class="h-4 w-4 rounded border-gray-700" />
				</label>
			</div>

			<!-- Billing Info -->
			<div class="flex items-center gap-2 text-sm text-white/80">
				<Info class="h-4 w-4" />
				<span>Monthly billing only - Cancel anytime</span>
			</div>
		</div>

		{#if data.plans.length === 0}
			<div class="flex justify-center">
				<Loader2 class="h-8 w-8 animate-spin text-purple-400" />
			</div>
		{:else}
			<!-- Plans Overview -->
			{#each data.plans as plan}
				<PlansOverview {...plan} plans={Array.isArray(plan.plans) ? plan.plans : [plan.plans]} />
			{/each}
		{/if}

		<Separator class="my-10" />

		<!-- Features Section -->
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

		<!-- Custom Plan CTA -->
		<div class="text-center">
			<h2 class="mb-4 text-2xl font-semibold text-white">Need a custom plan?</h2>
			<p class="mb-6 text-white/80">Contact us for tailored solutions to fit your specific requirements.</p>
			<Button variant="outline" class="bg-white/10 text-white hover:bg-white/20">Contact Sales</Button>
		</div>
	</section>
</main>
