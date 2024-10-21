<script>
    export let plan;
    export let cardHover = true;
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Button } from '$lib/components/ui/button';
    import { Zap } from 'lucide-svelte';
  </script>
  
  <Card class="bg-purple-800 bg-opacity-50 text-white backdrop-blur-md transform transition-all duration-300 {cardHover ? 'hover:scale-105 hover:shadow-xl' : ''}">
    <CardHeader>
      <CardTitle class="text-2xl font-bold">{plan.name}</CardTitle>
      <CardDescription class="text-purple-200">{plan.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p class="mb-4 text-4xl font-bold">
        ${plan.price}
        <span class="text-lg font-normal">/month</span>
      </p>
      <ul class="space-y-2">
        {#each plan.features as feature}
          <li class="flex items-center">
            <Zap class="mr-2 h-5 w-5 text-purple-300" />
            <span>{feature}</span>
          </li>
        {/each}
      </ul>
    </CardContent>
    <CardFooter>
      <Button class="w-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:from-purple-600 hover:to-pink-600">
        Choose Plan
      </Button>
    </CardFooter>
  </Card>
  