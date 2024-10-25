<!-- src/lib/components/plans/plans-overview/plans-overview.svelte -->
<script lang="ts">
	import PlanCard from '../plan-card/plan-card.svelte';
	import type { PlanCategory } from '$lib/types/plans';

	let {
		title,
		description,
		plans,
		overlayFrom,
		overlayTo,
		classNames,
		isNerdMode = false,
		currency = 'EUR',
		countryCode
	}: {
		title: string;
		description: string;
		plans: PlanCategory['plans'];
		overlayFrom: string;
		overlayTo: string;
		classNames: string;
		isNerdMode: boolean;
		currency: string;
		countryCode: string
	} = $props();
</script>

<div class="relative rounded-xl bg-gradient-to-br {overlayFrom} {overlayTo} p-8 {classNames}">
	<div class="mb-8 text-center">
		<h2 class="text-3xl font-bold text-white">{title}</h2>
		<p class="text-white/80">{description}</p>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each plans.reverse() as plan}
			<PlanCard {plan} {isNerdMode} {currency} {countryCode}/>
		{/each}
	</div>
</div>
