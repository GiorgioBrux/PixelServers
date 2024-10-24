<script lang="ts">
	import CrossPlatformShowcase from "./cross-platform/cross-platform-showcase.svelte";
	import DatacenterShowcase from "./datacenter/datacenter-showcase.svelte";
</script>

<section class="bg-opacity-50 pb-16 backdrop-blur-md">
    <div class="container mx-auto px-4">
        <!-- First row: Datacenters -->
        <DatacenterShowcase />

        <!-- Second row: Cross-platform -->
        <CrossPlatformShowcase />
    </div>
</section>
