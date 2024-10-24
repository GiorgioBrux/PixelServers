<script lang="ts">
	import '../app.css';
	import MinMenu from '$lib/components/layout/MinMenu.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import KonomiCode from '$lib/components/layout/KonomiCode.svelte';
	import { Toaster} from 'svelte-sonner';

	let { children } = $props();
	let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

	

</script>



<div class="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
	<Header {toggleMenu}/>
	{@render children()}
	<Toaster />
	<KonomiCode/>
	<Footer/>

	<MinMenu {toggleMenu} {isMenuOpen}/>
</div>