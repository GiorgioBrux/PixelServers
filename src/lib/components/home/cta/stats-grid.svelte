<script lang="ts">
    import { Clock, Zap } from 'lucide-svelte';
</script>

<div class="relative grid grid-cols-1 items-center gap-8 rounded-2xl border border-purple-400/10 
            bg-purple-800/20 p-8 backdrop-blur-sm md:grid-cols-3">
    <div class="flex flex-col items-center space-y-2 p-4">
        <Clock class="mb-2 h-8 w-8 text-purple-200" />
        <span class="text-3xl font-bold text-purple-100">24/7</span>
        <div class="flex items-center gap-2">
            <span class="text-purple-200">Support Available</span>
            <span class="relative flex h-3 w-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
        </div>
    </div>

    <div class="flex flex-col items-center space-y-4 p-4">
        <div class="flex -space-x-4">
            {#each Array(4) as _, i}
                <div class="relative h-10 w-10 overflow-hidden rounded-full border-2 border-purple-800 
                            bg-gradient-to-r from-purple-500 to-pink-500">
                    <img 
                        src={`/team-member-${i + 1}.jpg`} 
                        alt="Team member" 
                        class="h-full w-full object-cover" 
                    />
                </div>
            {/each}
        </div>
        <p class="text-lg text-purple-200">Our expert team is ready to help you succeed</p>
    </div>

    <div class="flex flex-col items-center space-y-2 p-4">
        <Zap class="mb-2 h-8 w-8 text-purple-200" />
        <span class="text-3xl font-bold text-purple-100">~15m</span>
        <span class="text-purple-200">Average Response</span>
    </div>
</div>
