<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Earth, ChevronsUpDown } from 'lucide-svelte';
	import * as Icon from 'svelte-flags';
	import * as Popover from '$lib/components/ui/popover';
	import * as Command from '$lib/components/ui/command';
	import * as ScrollArea from '$lib/components/ui/scroll-area';
	import type { Country } from '$lib/types/plans';
	import { tick } from 'svelte';

	let { countries, selectedCountry = $bindable(), open, isNerdMode = $bindable() } = $props<{ countries: Country[], selectedCountry: string, open: boolean, isNerdMode: boolean }>();

	const titleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<!-- Your country selector Popover component here -->
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
					<span class="truncate text-white group-hover:text-white">{countries.find((c: { code: any; }) => c.code === selectedCountry)?.name}</span>
					<span class="ml-1 shrink-0 text-white/60 group-hover:text-white/80">
						({countries.find((c: { code: any; }) => c.code === selectedCountry)?.currency})
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
						{#each countries as country}
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
