<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Server, Cpu, Clock, X, Shield, Globe, Zap, ChevronRight } from 'lucide-svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	// Import JSON data
	import BigGlobe from '$lib/components/ui-giorgio/big-globe/big-globe.svelte';
	import dataCenters from '$lib/data/datacenters.json';
	import { writable } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import ModsPluginsMarquee from '$lib/components/ui-giorgio/mods-plugins-marquee/mods-plugins-marquee.svelte';
	import { features } from '$lib/data/staticData.svelte';
	import GradientAnimation from '$lib/components/ui-aceternity-svelte/gradient-animation/gradient-animation.svelte';
	import { popularMods, popularModpacks } from '$lib/data/staticData.svelte';


	console.log(popularModpacks)
	$inspect(popularMods)

	const dataCentersStore = writable(dataCenters);

	async function ping_test(url: string): Promise<number> {
		if (typeof window === 'undefined') {
			return 0;
		}

		const built_url = new URL(url);
		built_url.searchParams.set('t', Date.now().toString()); // Cache-busting param
		return 0;
	}

	// Test the latency of each data center every 5 seconds

	async function test_latency() {
		const updatedCenters = await Promise.all(
			$dataCentersStore.map(async (center) => {
				if (!center.coming_soon && center.testing_ip) {
					const latency = await ping_test(center.testing_ip);
					console.log('Latency for ' + center.city + ' is ' + latency + 'ms');
					return { ...center, latency };
				}
				return center;
			})
		);
		dataCentersStore.set(updatedCenters);
	}

	if (typeof window !== 'undefined') {
		const intervalId = setInterval(test_latency, 10000);
		test_latency(); // Initial call

		// Clean up the interval when the component is destroyed
		onDestroy(() => {
			clearInterval(intervalId);
		});
	}
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
		<div class="absolute inset-0 bg-[url('/images/home/minecraft-bg.jpg')] bg-cover bg-center opacity-20"></div>
	</section>
	<section class="bg-black bg-opacity-50 pb-16 backdrop-blur-md">
		<div class="container mx-auto px-4">
			<div class="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
				<div class="w-full rounded-xl bg-purple-800 bg-opacity-50 p-6 md:w-1/2 md:p-8">
					<h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">Global Network of Data Centers</h2>
					<p class="mb-6 text-base text-purple-200 md:text-lg">
						Experience lightning-fast connections with our strategically placed data centers around the world. Low latency, high performance, and
						unparalleled reliability for your Minecraft adventures.
					</p>
					<ul class="space-y-2">
						{#each $dataCentersStore as center}
							<li class="flex items-center text-white">
								<Server class="mr-2 h-5 w-5 text-purple-400" />
								{center.city}
								{#if center.coming_soon}
									<Badge class="ml-2 bg-purple-300">Soon</Badge>
								{:else}
									<span class="ml-2 text-purple-300">{center.latency}ms</span>
									{#if center.latency !== undefined && center.latency < 100}
										<Shield class="ml-2 h-5 w-5 text-green-400" />
									{:else if center.latency !== undefined && center.latency < 200}
										<Shield class="ml-2 h-5 w-5 text-yellow-400" />
									{:else if center.latency !== undefined && center.latency >= 200}
										<Shield class="ml-2 h-5 w-5 text-red-400" />
									{/if}
								{/if}
							</li>
						{/each}
					</ul>
				</div>
				<div class="relative aspect-square w-full overflow-visible px-12 md:w-1/2 md:max-w-md lg:max-w-lg xl:max-w-xl">
					<BigGlobe />
				</div>
			</div>
			<div class="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
				<div class="w-full md:w-1/2">
					<img src="/images/home/iphone_minecraft.png" alt="Minecraft Features" class="drop-shadow-2xl" />
				</div>
				<div class="w-full rounded-xl bg-purple-800 bg-opacity-50 p-6 text-white md:w-1/2 md:p-8">
					<h2 class="mb-4 text-3xl font-bold md:text-4xl">Java or Bedrock?</h2>
					<p class="mb-6 text-xl">
						We've got you covered! Our servers support both Java and Bedrock editions of Minecraft, allowing players from all platforms to join the
						fun at the same time.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center">
							<Shield class="mr-2 h-6 w-6 text-purple-300" />
							<span>Cross-platform compatibility</span>
						</li>
						<li class="flex items-center">
							<Shield class="mr-2 h-6 w-6 text-purple-300" />
							<span>Seamless integration for both editions</span>
						</li>
						<li class="flex items-center">
							<Shield class="mr-2 h-6 w-6 text-purple-300" />
							<span>Play with friends regardless of their platform</span>
						</li>
					</ul>
					<Button class="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
						Learn More
						<ChevronRight class="ml-2 h-5 w-5" />
					</Button>
				</div>
			</div>
		</div>
	</section>
	<section class="relative overflow-hidden bg-gradient-to-b from-purple-900 to-black py-8">
		<!-- Background Glow Effects -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>
			<div class="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl"></div>
		</div>

		<!-- Contained Header -->
		<div class="container relative mx-auto px-4 mt-8">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl">
					Mods? Plugins? We got em' all
				</h2>
				<p class="mt-2 text-lg text-purple-200 md:text-xl">
					One-click installs for hundreds of popular mods and plugins. No technical expertise needed.
				</p>
			</div>
		</div>
		<!-- Full-width Marquee -->
		<div class="relative w-full">
			<ModsPluginsMarquee mods={popularMods} modpacks={popularModpacks} />
		</div>
	</section>

	<section class="relative overflow-hidden bg-gradient-to-b from-black to-purple-900 py-24">
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>
			<div class="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl"></div>
		</div>

		<div class="container relative mx-auto px-4">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">And So Much More</h2>
				<p class="mt-4 text-lg text-purple-200 md:text-xl">Everything you need, right at your fingertips</p>
			</div>

			<div class="relative mx-auto max-w-5xl">
				<div class="flex flex-wrap justify-center gap-3">
					{#each features as feature}
						<div
							class="flex items-center rounded-full border border-purple-300/10 bg-purple-950/40 px-4 py-2 backdrop-blur-sm
							transition-colors duration-200 hover:border-purple-300/20"
						>
							<feature.icon class="mr-2 h-4 w-4 text-purple-400" />
							<span class="text-sm font-medium text-purple-100">{feature.title}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="anale relative overflow-hidden py-24">
		<GradientAnimation
		  gradientBackgroundStart="rgb(49, 46, 129)"
		  gradientBackgroundEnd="rgb(30, 27, 75)"
		  firstColor="79, 70, 229"
		  secondColor="99, 102, 241"
		  thirdColor="67, 56, 202"
		  fourthColor="55, 48, 163"
		  fifthColor="139, 92, 246"
		  pointerColor="79, 70, 229"
		  size="130%"
		  blendingValue="soft-light"
		  containerClassName="absolute inset-0 w-full h-full opacity-20"
		/>
	

		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]"></div>
			<div class="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[100px]"></div>
		  </div>

		<div class="container relative mx-auto px-4">
			<div class="mx-auto max-w-3xl text-center">
				<h2
					class="mb-2 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text pb-4 text-5xl font-bold text-transparent md:text-6xl"
				>
					Ready to Start?
				</h2>
				<p class="mb-10 text-xl text-purple-200 md:text-2xl">Choose your plan and start your adventure in minutes</p>

				<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
					<Button
						size="lg"
						class="group relative bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 text-lg font-bold hover:from-purple-700 hover:to-pink-600"
					>
						View Our Plans
						<span class="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
							<ChevronRight class="h-5 w-5" />
						</span>
					</Button>

					<Button
						class="group border border-purple-300/10 bg-purple-800/40 text-lg text-purple-100 hover:text-white backdrop-blur-sm hover:border-purple-300/20 hover:bg-purple-700/50"
						variant="ghost"
						size="lg"
					>
						Learn More
						<span class="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
							<ChevronRight class="h-5 w-5" />
						</span>
					</Button>
				</div>

				<div class="relative mt-16">
					<div
						class="relative grid grid-cols-1 items-center gap-8 rounded-2xl border border-purple-400/10 bg-purple-800/20 p-8 backdrop-blur-sm md:grid-cols-3"
					>
						<div class="flex flex-col items-center space-y-2 p-4">
							<Clock class="mb-2 h-8 w-8 text-purple-200" />
							<span class="text-3xl font-bold text-purple-100">24/7</span>
							<span class="text-purple-200">Support Available</span>
						</div>

						<div class="flex flex-col items-center space-y-4 p-4">
							<div class="flex -space-x-4">
								{#each Array(4) as _, i}
									<div
										class="relative h-10 w-10 overflow-hidden rounded-full border-2 border-purple-800 bg-gradient-to-r from-purple-500 to-pink-500"
									>
										<img src={`/team-member-${i + 1}.jpg`} alt="Team member" class="h-full w-full object-cover" />
									</div>
								{/each}
							</div>
							<p class="text-lg text-purple-200">Our expert team is ready to help you succeed</p>
						</div>

						<div class="flex flex-col items-center space-y-2 p-4">
							<Zap class="mb-2 h-8 w-8 text-purple-200" />
							<span class="text-3xl font-bold text-purple-100">15m</span>
							<span class="text-purple-200">Average Response</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
