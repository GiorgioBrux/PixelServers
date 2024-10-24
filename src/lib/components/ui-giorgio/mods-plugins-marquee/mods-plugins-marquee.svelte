<script lang="ts">
    import Marquee from "$lib/components/ui-animation-svelte/marquee/Marquee.svelte";
    import ModrinthCard from "$lib/components/ui-giorgio/modrinth-card/modrinth-card.svelte";
    import type { Mod, Modpack } from "$lib/data/staticData.svelte";
    let {mods, modpacks} : {mods: Mod[], modpacks: Modpack[]} = $props();

    $inspect(mods);
  </script>
  
<!-- ModsPluginsMarquee.svelte -->
<div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
    <!-- Fade Edges using Tailwind mask -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="h-full w-full mask-gradient-x"></div>
    </div>

    <!-- Marquee Content -->
    <Marquee pauseOnHover class="[--duration:30s] mb-2">
        {#each mods as item}
          <ModrinthCard {...item} />
        {/each}
    </Marquee>
  
    <Marquee reverse pauseOnHover class="[--duration:25s]">
        {#each modpacks as item}
          <ModrinthCard {...item} />
        {/each}
    </Marquee>
  </div>
  