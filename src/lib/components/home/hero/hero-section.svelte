<script lang="ts">
    import { Button } from '$lib/components/ui/button';
</script>

<section class="relative min-h-[600px] overflow-hidden">
    <div class="container relative z-10 mx-auto flex min-h-[600px] items-center justify-center px-4">
        <div class="text-center">
            <h1 
                class="mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-5xl 
                font-bold text-transparent md:text-7xl"
            >
                Pixel-Perfect Minecraft Hosting
            </h1>
            <p class="mb-8 text-xl text-purple-200">
                Experience lag-free gameplay in a world of endless possibilities
            </p>
            <Button
                href="/plans"
                size="lg"
                class="transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
                px-8 py-3 font-bold text-white transition-all duration-300 
                hover:scale-105 hover:from-purple-600 hover:to-pink-600"
            >
                Start Your Adventure
            </Button>
        </div>
    </div>
    <div 
        class="absolute inset-0 bg-[url('/images/home/minecraft-bg.jpg')] 
        bg-cover bg-center opacity-20"
    ></div>
    <div 
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
    ></div>
</section>
