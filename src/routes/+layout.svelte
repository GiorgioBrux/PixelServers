<script lang="ts">
	import '../app.css';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import MinMenu from '$lib/components/layout/MinMenu.svelte';
	import {menu} from '$lib/data/staticData.svelte'
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	let { children } = $props();
	let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

	

</script>



<div class="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
	<Header toggleMenu/>
	{@render children()}

	<Footer/>

	<MinMenu toggleMenu isMenuOpen/>
</div>