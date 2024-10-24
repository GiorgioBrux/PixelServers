<script lang="ts">
	import type { Component } from "svelte";

    export let icon: any;
    export let title: string;
    export let description: string;
  </script>
  
  <div class="transform rounded-xl bg-purple-800 bg-opacity-50 p-8 text-center backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-lg">
    <svelte:component this={icon} class="mx-auto mb-6 h-16 w-16" />
    <h3 class="mb-4 text-2xl font-semibold text-white">{title}</h3>
    <p class="text-purple-200">{description}</p>
  </div>