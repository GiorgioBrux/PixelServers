<script>
	import Card from "$lib/components/ui/card/card.svelte";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Separator } from '$lib/components/ui/separator';

    const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
</script>

<main class="flex-grow bg-gradient-to-b from-purple-800 to-indigo-900">
    <section class="container flex justify-center">
        <h1>ciao</h1>
        <ScrollArea class="h-72 w-2/6 rounded-md border">
            <div class="p-4">
              <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
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
