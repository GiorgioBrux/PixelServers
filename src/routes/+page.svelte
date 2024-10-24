<script lang="ts">
	import CtaSection from "$lib/components/home/cta/cta-section.svelte";
	import FeaturesCards from "$lib/components/home/features-cards/features-cards.svelte";
	import FeaturesSection from "$lib/components/home/features/features-section.svelte";
	import HeroSection from "$lib/components/home/hero/hero-section.svelte";
	import ModsSection from "$lib/components/home/mods/mods-section.svelte";
</script>

<main class="flex-grow">
    <HeroSection />
	<FeaturesCards />
    <ModsSection />
    <FeaturesSection />
    <CtaSection />
</main>
