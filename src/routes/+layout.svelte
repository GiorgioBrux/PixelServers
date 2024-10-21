<script>
	import '../app.css';
	import { Input } from '$lib/components/ui/input';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	/**
	 * @param {{ stopPropagation: () => void; }} e
	 */
	function stopPropagation(e) {
		e.stopPropagation();
	}

</script>



<div class="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
	<header class="sticky top-0 z-50 bg-black bg-opacity-50 p-4 backdrop-blur-md">
		<div class="container mx-auto flex items-center justify-between">
			<div class="flex items-center space-x-4">
				<h1 class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">PixelServers</h1>
			</div>
			<nav class="hidden space-x-6 md:flex">
				<a href="/" class="transition duration-300 hover:text-purple-300">Home</a>
				<a href="/plans" class="transition duration-300 hover:text-purple-300">Plans</a>
				<a href="#" class="transition duration-300 hover:text-purple-300">Features</a>
				<a href="#" class="transition duration-300 hover:text-purple-300">Support</a>
			</nav>
			<div class="flex items-center space-x-4">
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src="/images/user.png" alt="User" />
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button variant="ghost" size="icon" class="md:hidden" onclick={toggleMenu}>
					<Menu class="h-6 w-6" />
				</Button>
			</div>
		</div>
	</header>

	<slot></slot>

	<footer class="bg-black bg-opacity-75 py-12 backdrop-blur-md">
		<div class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
			<div class="mb-4 md:mb-0">
				<span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">PixelServers</span>
				<p class="mt-4 text-sm text-gray-300">Empowering Minecraft communities with top-tier hosting solutions since 2024.</p>
			</div>
			<div>
				<h4 class="mb-4 text-lg font-semibold">Quick Links</h4>
				<nav class="flex flex-col space-y-2">
					<a href="#" class="transition duration-300 hover:text-purple-300">Home</a>
					<a href="#" class="transition duration-300 hover:text-purple-300">Plans</a>
					<a href="#" class="transition duration-300 hover:text-purple-300">Features</a>
					<a href="#" class="transition duration-300 hover:text-purple-300">Support</a>
				</nav>
			</div>
			<div>
				<h4 class="mb-4 text-lg font-semibold">Legal</h4>
				<nav class="flex flex-col space-y-2">
					<a href="#" class="transition duration-300 hover:text-purple-300">Terms of Service</a>
					<a href="#" class="transition duration-300 hover:text-purple-300">Privacy Policy</a>
					<a href="#" class="transition duration-300 hover:text-purple-300">Refund Policy</a>
				</nav>
			</div>
			<div>
				<h4 class="mb-4 text-lg font-semibold">Connect With Us</h4>
				<p class="mt-4 text-sm text-gray-300">Subscribe to our newsletter for updates and special offers!</p>
				<div class="mt-2 flex">
					<Input
						type="email"
						placeholder="Enter your email"
						class="flex-grow bg-black bg-opacity-50 text-white placeholder-gray-400 backdrop-blur-md"
					/>
					<Button class="ml-2 bg-purple-600 hover:bg-purple-700">Subscribe</Button>
				</div>
			</div>
		</div>
		<div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
			<p>&copy; 2024 PixelServers. All rights reserved. Crafted with ❤️ for Minecraft enthusiasts.</p>
		</div>
	</footer>

	{#if isMenuOpen}
		<div class="fixed inset-0 z-50 bg-black bg-opacity-75 backdrop-blur-sm" onclick={toggleMenu}>
			<div class="h-full w-64 bg-gradient-to-br from-purple-900 to-indigo-900 p-6" onclick={stopPropagation}>
				<nav class="flex flex-col space-y-6">
					<a href="#" class="text-lg transition duration-300 hover:text-purple-300">Home</a>
					<a href="#" class="text-lg transition duration-300 hover:text-purple-300">Plans</a>
					<a href="#" class="text-lg transition duration-300 hover:text-purple-300">Features</a>
					<a href="#" class="text-lg transition duration-300 hover:text-purple-300">Support</a>
				</nav>
			</div>
		</div>
	{/if}
</div>