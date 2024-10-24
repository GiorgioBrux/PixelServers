<script>
    import Marquee from "$lib/components/ui-animation-svelte/marquee/Marquee.svelte";
    import ModrinthCard from "../modrinth-card/modrinth-card.svelte";
    const reviews = [
      {
        name: "Bhide",
        username: "@Bhide",
        body: "Noicee work. I love it. Keep it up.",
        img: "https://avatar.vercel.sh/jack",
      },
      {
        name: "Jodd",
        username: "@Jodd",
        body: "Wooww, this is what I was looking for. Great work.",
        img: "https://avatar.vercel.sh/jill",
      },
      {
        name: "Pokie",
        username: "@Pokie",
        body: "Svelte is Amazing and so are you. Keep it up.",
        img: "https://avatar.vercel.sh/john",
      },
      {
        name: "pablo",
        username: "@pablo",
        body: "Remarkable Stuff broooo. Added to my favourites.",
        img: "https://avatar.vercel.sh/jane",
      },
      {
        name: "Saloni",
        username: "@Saloni",
        body: "Acche hai, Chal mera Portfolio banade.",
        img: "https://avatar.vercel.sh/jenny",
      },
      {
        name: "Bhai",
        username: "@Bhai",
        body: "Svelte made easy with these components. Great work.",
        img: "https://avatar.vercel.sh/james",
      },
    ];
  
    let firstRow = reviews.slice(0, reviews.length / 2);
    let secondRow = reviews.slice(reviews.length / 2);
  </script>
  
<!-- ModsPluginsMarquee.svelte -->
<div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
    <!-- Fade Edges using Tailwind mask -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="h-full w-full mask-gradient-x"></div>
    </div>
  
    <!-- Marquee Content -->
    <Marquee pauseOnHover class="[--duration:30s] mb-2">
      <div class="flex gap-4 px-4">
        {#each firstRow as item}
          <ModrinthCard {...item} />
        {/each}
      </div>
    </Marquee>
  
    <Marquee reverse pauseOnHover class="[--duration:25s]">
      <div class="flex gap-4 px-4">
        {#each secondRow as item}
          <ModrinthCard {...item} />
        {/each}
      </div>
    </Marquee>
  </div>
  