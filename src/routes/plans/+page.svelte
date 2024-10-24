<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Check, Settings2, Info, Earth, ChevronsUpDown } from 'lucide-svelte';
	import PlansOverview from '$lib/components/ui-giorgio/plans-overview/PlansOverview.svelte';
	import { features } from '$lib/data/staticData.svelte';
	import * as Icon from 'svelte-flags';
	import { Loader2 } from 'lucide-svelte';
	import * as Popover from '$lib/components/ui/popover';
	import * as Command from '$lib/components/ui/command';
	import * as ScrollArea from '$lib/components/ui/scroll-area';
	import { tick } from 'svelte';
	import { cn } from '$lib/utils.js';

	let isNerdMode = $state(false);
	let selectedCountry = $state('Us');
	const { data } = $props();
	const titleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

	let open = $state(false);
	let selectedValue = $derived(data.countries.find((c) => c.code === selectedCountry)?.name ?? 'Select country...');

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
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
					<Popover.Root bind:open let:ids>
						<Popover.Trigger asChild let:builder>
							<Button
								builders={[builder]}
								variant="outline"
								role="combobox"
								aria-expanded={open}
								class="group h-9 w-[300px] items-center justify-between border-none bg-black/30 text-white transition-all duration-200 hover:bg-purple-500/20"
							>
								<div class="flex min-w-0 flex-1 items-center gap-2">
									<Earth class="h-4 w-4 shrink-0 text-purple-400 group-hover:text-purple-300" />
									{#if selectedCountry}
										{@const FlagComponent = (Icon as Record<string, any>)[titleCase(selectedCountry)]}
										{#if FlagComponent}
											<FlagComponent size="16" class="shrink-0" />
										{/if}
										<span class="truncate text-white group-hover:text-white">{data.countries.find((c) => c.code === selectedCountry)?.name}</span>
										<span class="ml-1 shrink-0 text-white/60 group-hover:text-white/80">
											({data.countries.find((c) => c.code === selectedCountry)?.currency})
										</span>
									{/if}
								</div>
								<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-80" />
							</Button>
						</Popover.Trigger>

						<Popover.Content class="w-[300px] border-none bg-black/80 p-0 shadow-xl backdrop-blur-lg">
							<Command.Root class="bg-transparent">
								<Command.Input
									placeholder="Search countries..."
									class="h-9 border-none bg-transparent px-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0 [&_svg]:text-white [&_svg]:opacity-70"
								/>
								<Command.List>
									<Command.Empty class="px-3 py-2 text-sm text-white/60">No country found.</Command.Empty>
									<ScrollArea.Root class="h-[180px]">
										<div class="p-1">
											{#each data.countries as country}
												{@const FlagComponent = (Icon as Record<string, any>)[titleCase(country.code)]}
												<Command.Item
													value={country.name}
													class="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-white transition-colors duration-200
														   hover:bg-purple-500/20 hover:text-purple-200
														   data-[selected=true]:bg-purple-500/30 data-[selected=true]:text-purple-100"
													onSelect={() => {
														selectedCountry = country.code;
														closeAndFocusTrigger(ids.trigger);
													}}
												>
													{#if FlagComponent}
														<FlagComponent size="16" class="shrink-0" />
													{/if}
													<span class="truncate">{country.name}</span>
													<span class="ml-auto shrink-0 text-white/60">({country.currency})</span>
												</Command.Item>
											{/each}
										</div>
									</ScrollArea.Root>
								</Command.List>
							</Command.Root>
						</Popover.Content>
					</Popover.Root>
				</div>

				<!-- Rest of your controls -->
				<label class="flex cursor-pointer items-center gap-2 rounded-md bg-black/30 px-3 py-2">
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
