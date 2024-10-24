<script lang="ts">
    let { toggleMenu, isMenuOpen} = $props();
   	import {menu} from '$lib/data/staticData.svelte'
    import { Button } from '$lib/components/ui/button';

    
    function stopPropagation(e: { stopPropagation: () => void; }) {
		e.stopPropagation();
	}
    
</script>



{#if isMenuOpen}
    <div class="fixed inset-0 z-50 bg-black bg-opacity-75 backdrop-blur-sm" onclick={() => toggleMenu}>
        <div class="h-full w-64 bg-gradient-to-br from-purple-900 to-indigo-900 p-6" onclick={stopPropagation}>
            <nav class="flex flex-col space-y-6">
                {#each menu as item}
                    <a href={item.href} class="text-lg transition duration-300 hover:text-purple-300">{item.title}</a>
                {/each}
            </nav>
        </div>
    </div>
{/if}