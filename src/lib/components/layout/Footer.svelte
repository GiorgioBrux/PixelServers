<script lang="ts">
    import { menu, legal } from "$lib/data/staticData.svelte";
	import { Button } from "../ui/button";
	import Input from "../ui/input/input.svelte";
    import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import * as Tooltip from "$lib/components/ui/tooltip";
    import { Info } from "lucide-svelte";

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
            <p class="text-sm text-gray-300">Subscribe to our newsletter for updates and special offers!</p>
            <div class="mt-2 flex">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-grow bg-black bg-opacity-50 text-white placeholder-gray-400 backdrop-blur-md"
                />
                <Button class="ml-2 bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </div>
            <div class="mt-4 flex items-center space-x-2">
                <Switch/>
                <Label class="text-sm text-gray-300">Nerd mode</Label>
                <Tooltip.Root>
                    <Tooltip.Trigger>
                      <Info/>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="bottom">
                      <p class="text-sm text-black">We hide most details to keep the site clean for novice users. If you want to see more in-depth details, enable this. See you on the other side!</p>
                    </Tooltip.Content>
                  </Tooltip.Root>
            </div>

        </div>
    </div>
    <div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 PixelServers. All rights reserved. Crafted with ❤️ for Minecraft enthusiasts.</p>
    </div>
</footer>