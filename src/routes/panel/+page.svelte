<script>
	import Card from "$lib/components/ui/card/card.svelte";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Separator } from '$lib/components/ui/separator';

    const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
</script>

<main class="flex-grow bg-gradient-to-b from-purple-800 to-indigo-900 flex">

  <section class="container flex grow">
      <ScrollArea class="h-72 grow rounded-md border">
          <div class="p-4">
            <h4 class="mb-4 text-sm font-medium leading-none">Console</h4>
            {#each tags as tag}
              <div class="text-sm">
                {tag}
              </div>
              <Separator class="my-2" />
            {/each}
          </div>
      </ScrollArea>
  </section>

  <section class="container flex w-[40%]">
    <ScrollArea class="h-72 grow rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">Console</h4>
          {#each tags as tag}
            <div class="text-sm">
              {tag}
            </div>
            <Separator class="my-2" />
          {/each}
        </div>
    </ScrollArea>
  </section>

    
</main>
