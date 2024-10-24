<script lang="ts">
    import { cn } from "$lib/utils";
    import * as Card from "$lib/components/ui/card/";


    export let img: string;
    export let name: string;
    export let username: string;
    export let body: string;
  </script>


<Card.Root class={cn(
    "w-72 overflow-hidden rounded-xl transition-all duration-300",
    "border border-white/10 bg-purple-950/40 backdrop-blur-sm",
    "hover:border-white/20 hover:bg-purple-900/40 hover:shadow-lg hover:shadow-purple-500/10"
  )}>
    <Card.Content class="p-4">
      <div class="flex items-center gap-3">
        <img 
          class="h-10 w-10 rounded-full ring-2 ring-white/10" 
          width="40" 
          height="40" 
          alt="" 
          src={img} 
        />
        <div class="flex flex-col">
          <Card.Title class="text-base font-semibold text-white">
            {name}
          </Card.Title>
          <Card.Description class="text-sm text-white/60">
            {username}
          </Card.Description>
        </div>
      </div>
      <blockquote class="mt-3 text-sm text-white/80">
        {body}
      </blockquote>
    </Card.Content>
  </Card.Root>