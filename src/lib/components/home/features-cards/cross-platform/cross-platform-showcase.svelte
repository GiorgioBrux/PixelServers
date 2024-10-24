<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Shield, ChevronRight } from 'lucide-svelte';
</script>

<div class="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
    <div class="w-full md:w-1/2">
        <img 
            src="/images/home/iphone_minecraft.png" 
            alt="Minecraft Features" 
            class="drop-shadow-2xl"
        />
    </div>
    <div class="w-full rounded-xl bg-purple-800 bg-opacity-50 p-6 text-white md:w-1/2 md:p-8">
        <h2 class="mb-4 text-3xl font-bold md:text-4xl">Java or Bedrock?</h2>
        <p class="mb-6 text-xl">
            We've got you covered! Our servers support both Java and Bedrock editions 
            of Minecraft, allowing players from all platforms to join the fun at the same time.
        </p>
        <ul class="space-y-2">
            {#each ['Cross-platform compatibility', 'Seamless integration for both editions', 'Play with friends regardless of their platform'] as feature}
                <li class="flex items-center">
                    <Shield class="mr-2 h-6 w-6 text-purple-300" />
                    <span>{feature}</span>
                </li>
            {/each}
        </ul>
        <Button 
            class="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 
            hover:from-purple-600 hover:to-pink-600"
        >
            Learn More
            <ChevronRight class="ml-2 h-5 w-5" />
        </Button>
    </div>
</div>
