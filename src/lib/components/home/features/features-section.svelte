<script lang="ts">
    import { features } from '$lib/data/staticData.svelte';
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-black to-purple-900 py-24">
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>
        <div class="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl"></div>
    </div>

    <div class="container relative mx-auto px-4">
        <div class="mx-auto mb-16 max-w-3xl text-center">
            <h2 class="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                And So Much More
            </h2>
            <p class="mt-4 text-lg text-purple-200 md:text-xl">
                Everything you need, right at your fingertips
            </p>
        </div>

        <div class="relative mx-auto max-w-5xl">
            <div class="flex flex-wrap justify-center gap-3">
                {#each features as feature}
                    <div class="flex items-center rounded-full border border-purple-300/10 bg-purple-950/40 
                                px-4 py-2 backdrop-blur-sm transition-colors duration-200 
                                hover:border-purple-300/20">
                        <svelte:component 
                            this={feature.icon} 
                            class="mr-2 h-4 w-4 text-purple-400" 
                        />
                        <span class="text-sm font-medium text-purple-100">
                            {feature.title}
                        </span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
