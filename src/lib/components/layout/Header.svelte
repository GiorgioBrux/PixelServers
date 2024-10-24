<script>
	import { menu } from "$lib/data/staticData.svelte";
	import { Menu } from "lucide-svelte";
	import { AvatarImage, AvatarFallback } from "../ui/avatar";
	import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenu } from "../ui/dropdown-menu";
	import Avatar from "../ui/avatar/avatar.svelte";
	import Button from "../ui/button/button.svelte";
    let { toggleMenu} = $props();

</script>
<header class="sticky top-0 z-50 bg-black bg-opacity-50 p-4 backdrop-blur-md">
    <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
            <h1 class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">PixelServers</h1>
        </div>
        <nav class="hidden space-x-6 md:flex">
            {#each menu as item}
                <a href={item.href} class="transition duration-300 hover:text-purple-300">{item.title}</a>
            {/each}
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
            <Button variant="ghost" size="icon" class="md:hidden" onclick={() => toggleMenu}>
                <Menu class="h-6 w-6" />
            </Button>
        </div>
    </div>
</header>