<script>
	import { Button } from '$lib/components/ui/button';
	import { Server, Cpu, Clock, X, Shield, Globe, Zap, ChevronRight } from 'lucide-svelte';
	import PlanCard from '$lib/components/ui-giorgio/plan-card/plan-card.svelte';
	import FeatureCard from '$lib/components/ui-giorgio/feature-card/feature-card.svelte';


// Import JSON data
  import plans from '$lib/data/plans.json';
</script>


	<main class="flex-grow">
		<section class="relative overflow-hidden py-20">
			<div class="container relative z-10 mx-auto text-center">
				<h2 class="mb-6 animate-pulse text-5xl font-bold md:text-7xl">Pixel-Perfect Minecraft Hosting</h2>
				<p class="mb-8 text-xl text-purple-200">Experience lag-free gameplay in a world of endless possibilities</p>
				<Button
					href="/plans"
					size="lg"
					class="transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600"
					>Start Your Adventure</Button
				>
			</div>
			<div class="absolute inset-0 bg-[url('/images/minecraft-bg.jpg')] bg-cover bg-center opacity-20"></div>
		</section>

		
		<section class="bg-black bg-opacity-50 py-16 backdrop-blur-md">
			<div class="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
			  <FeatureCard
				icon={Server}
				title="Blazing-Fast Servers"
				description="Enjoy seamless gameplay with our cutting-edge hardware"
			  />
		  
			  <FeatureCard
				icon={Cpu}
				title="One-Click Setup"
				description="Launch your server in minutes with our intuitive interface"
			  />
		  
			  <FeatureCard
				icon={Clock}
				title="24/7 Expert Support"
				description="Our pixel wizards are always here to assist you"
			  />
			</div>
		  
			<div class="container mx-auto mt-10 grid grid-cols-1 gap-12 md:grid-cols-3">
			  <FeatureCard
				icon={Shield}
				title="DDoS Protection"
				description="Advanced security to keep your server safe from attacks"
			  />
		  
			  <FeatureCard
				icon={Globe}
				title="Global Network"
				description="Low-latency connections from multiple data centers worldwide"
			  />
		  
			  <FeatureCard
				icon={Zap}
				title="Instant Scaling"
				description="Easily upgrade or downgrade your server as your community changes"
			  />
			</div>
		  </section>

		
	<section class="bg-gradient-to-b from-purple-900 to-black py-20">
		<div class="container mx-auto">
			<h2 class="mb-12 text-center text-4xl font-bold text-white">Choose Your Perfect Plan</h2>
			<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each plans as plan}
				  <PlanCard {plan} />
				{/each}
			  </div>

			<div class="text-center">
				<Button size="lg" class="bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:from-purple-600 hover:to-pink-600">
					View All Plans
					<ChevronRight class="ml-2 h-5 w-5" />
				</Button>
			</div>
		</div>
	</section>
	</main>

