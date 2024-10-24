<script>
    import { menu, legal } from "$lib/data/staticData.svelte";
	import Input from "../ui/input/input.svelte";

</script>
<footer class="bg-black bg-opacity-75 py-12 backdrop-blur-md">
    <div class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div class="mb-4 md:mb-0">
            <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">PixelServers</span>
            <p class="mt-4 text-sm text-gray-300">Empowering Minecraft communities with top-tier hosting solutions since 2024.</p>
        </div>

        <div>
            <h4 class="mb-4 text-lg font-semibold">Quick Links</h4>
            <nav class="flex flex-col space-y-2">
                {#each menu as item}
                    <a href={item.href} class="transition duration-300 hover:text-purple-300">{item.title}</a>
                {/each}
            </nav>
        </div>
        <div>
            <h4 class="mb-4 text-lg font-semibold">Legal</h4>
            <nav class="flex flex-col space-y-2">
                {#each legal as item}
                    <a href={item.href} class="transition duration-300 hover:text-purple-300">{item.title}</a>
                {/each}
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