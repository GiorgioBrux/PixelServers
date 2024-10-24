<script>
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Check } from 'lucide-svelte';
	import PlansOverview from '$lib/components/ui-giorgio/plans-overview/PlansOverview.svelte';
	import { plans, features } from '$lib/data/staticData.svelte';

	
</script>

<main class="flex-grow bg-gradient-to-b from-purple-800 to-indigo-900">
	<section class="container">
		<h1 class="mb-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text pb-2 pt-10 text-center text-5xl font-bold text-transparent">
			Our Hosting Plans
		</h1>
		<p class="mb-12 mb-16 text-center text-2xl text-purple-200">Choose the perfect plan for your Minecraft adventure</p>
		{#each plans as plan}
			<PlansOverview {...plan} />
		{/each}

	</section>
	<Separator class="my-10" />

	<div class="mb-10 text-center">
		<h2 class="mb-4 text-2xl font-semibold">All Plans Include</h2>
		<ul class="inline-block text-left">
			{#each features as feature}
				<li class="mb-2 flex items-center">
					<Check class="mr-2 h-5 w-5 text-green-500" />
					{feature}
				</li>
			{/each}
		</ul>
	</div>

	<div class="text-center">
		<h2 class="mb-4 text-2xl font-semibold">Need a custom plan?</h2>
		<p class="mb-6">Contact us for tailored solutions to fit your specific requirements.</p>
		<Button variant="outline">Contact Sales</Button>
	</div>
</main>
