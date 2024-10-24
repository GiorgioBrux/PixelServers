<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { ChevronRight, Clock, Zap } from 'lucide-svelte';
    import GradientAnimation from '$lib/components/ui-aceternity-svelte/gradient-animation/gradient-animation.svelte';
	import StatsGrid from './stats-grid.svelte';
</script>

<section class="relative overflow-hidden py-24">
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
        <div class="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" ></div>
        <div class="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[100px]" ></div>
    </div>

    <div class="container relative mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
            <h2 class="mb-2 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text pb-4 
                       text-5xl font-bold text-transparent md:text-6xl">
                Ready to Start?
            </h2>
            <p class="mb-10 text-xl text-purple-200 md:text-2xl">
                Choose your plan and start your adventure in minutes
            </p>

            <div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                    href="/plans"
                    size="lg"
                    class="group relative bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 
                           text-lg font-bold hover:from-purple-700 hover:to-pink-600"
                >
                    View Our Plans
                    <span class="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                        <ChevronRight class="h-5 w-5" />
                    </span>
                </Button>

                <Button
                    variant="ghost"
                    size="lg"
                    class="group border border-purple-300/10 bg-purple-800/40 text-lg text-purple-100 
                           backdrop-blur-sm hover:border-purple-300/20 hover:bg-purple-700/50 hover:text-white"
                >
                    Learn More
                    <span class="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                        <ChevronRight class="h-5 w-5" />
                    </span>
                </Button>
            </div>

            <div class="relative mt-16">
                <StatsGrid />
            </div>
        </div>
    </div>
</section>
