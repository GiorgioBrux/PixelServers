<script lang="ts">
	import ModsPluginsMarquee from '$lib/components/ui-giorgio/mods-plugins-marquee/mods-plugins-marquee.svelte';
    import { popularMods, popularModpacks, popularPlugins } from '$lib/data/staticData.svelte';
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-purple-900 to-black py-8">
    <!-- Background Glow Effects -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"> </div>
        <div class="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" ></div>
    </div>

    <!-- Header -->
    <div class="container relative mx-auto mt-8 px-4">
        <div class="mx-auto mb-16 max-w-3xl text-center">
            <h2 class="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl">
                Mods? Plugins? We got em' all
            </h2>
            <p class="mt-2 text-lg text-purple-200 md:text-xl">
                One-click installs for hundreds of popular mods and plugins. No technical expertise needed.
            </p>
        </div>
    </div>

    <!-- Marquee -->
    <div class="relative w-full">
        <ModsPluginsMarquee mods={popularMods} modpacks={popularModpacks} plugins={popularPlugins} />
    </div>

    <!-- Disclaimer -->
    <div class="container mx-auto mt-6 px-4">
        <p class="text-center text-xs font-light italic text-gray-400/60">
            Displayed mods, modpacks and plugins are for illustration purposes only. 
            PixelServers is not affiliated with or endorsed by their respective owners.
        </p>
    </div>
</section>
