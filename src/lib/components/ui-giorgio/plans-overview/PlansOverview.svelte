<script lang="ts">
    let { title, description, plans, overlayFrom, overlayTo, backgroundImage, classNames} : {title: string, description: string, plans: {ram: string, bestFor?: String, price: number}[], overlayFrom: string, overlayTo: String, backgroundImage: string, classNames ?: string} = $props();

	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
</script>
  
  <Card class="relative rounded-xl border-blue-600 bg-cover {classNames}" style="background-color: url({backgroundImage}); color: #ffffff">
    <!-- Overlay per l'immagine di sfondo -->
    <div
      class="pointer-events-none absolute inset-0 z-0 rounded-xl bg-gradient-to-r opacity-75 bg-gradient-to-r {overlayFrom} {overlayTo}"
    ></div>
  
    <!-- Contenuto del Card sopra l'overlay -->
    <div class="relative z-10 m-12">
      <h1 class="mb-2 text-6xl font-semibold text-white">{title}</h1>
      <p class="mb-8 text-2xl text-white">{description}</p>
      <div class="grid gap-6 md:grid-cols-3">
        {#each plans as plan}
          <Card class="relative rounded-xl border-fuchsia-600">
            <CardHeader>
              <CardTitle>{plan.ram} RAM</CardTitle>
              {#if plan.bestFor}
                <CardDescription>Best for {plan.bestFor}</CardDescription>
              {/if}
            </CardHeader>
            <CardContent>
              <p class="text-3xl font-bold">${plan.price}/mo</p>
            </CardContent>
            <CardFooter>
              <Button
                size="lg"
                class="w-full transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600"
                >Start Your Adventure</Button
              >
            </CardFooter>
          </Card>
        {/each}
      </div>
    </div>
  </Card>
  