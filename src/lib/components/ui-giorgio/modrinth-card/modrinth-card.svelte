<script lang="ts">
    import { cn } from "$lib/utils";
    import * as Card from "$lib/components/ui/card/";

    let {imgType, name, description, type}: {imgType: 'png' | 'gif', name: string, description: string, type: "mod" | "modpack"} = $props();

    //$inspect({img, name, description, type});
    // Truncate description to 100 characters
    let truncatedDescription = $derived(
        description && description.length > 100 
            ? description.slice(0, 100) + "..." 
            : description
    );
</script>
<Card.Root class={cn(
    "w-[400px] overflow-hidden rounded-xl transition-all duration-300", // Wider card for better layout
    "border border-white/10 bg-purple-950/40 backdrop-blur-sm",
    "hover:border-white/20 hover:bg-purple-900/40 hover:shadow-lg hover:shadow-purple-500/10",
    "group cursor-pointer p-2"
)}>
    <Card.Content class="p-4">
        <div class="flex items-start gap-4"> <!-- Increased gap -->
            <div class="relative flex-shrink-0"> <!-- Added flex-shrink-0 to prevent image squishing -->
                <img 
                    class="h-16 w-16 rounded-lg object-cover transition-all duration-300 group-hover:ring-white/20" 
                    width="64"
                    height="64"
                    alt={`${name}'s logo`} 
                    src={`images/home/marquee/${type}s/${name.toLowerCase().replaceAll(' ', '_')}.${imgType}`} 
                />
            </div>
            <div class="flex flex-col min-w-0"> <!-- Added min-w-0 to handle text overflow properly -->
                <Card.Title class="text-base font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 truncate">
                    {name}
                </Card.Title>
                <Card.Description class="mt-1 text-sm text-white/70 line-clamp-2">
                    {truncatedDescription}
                </Card.Description>
            </div>
        </div>
    </Card.Content>
</Card.Root>
