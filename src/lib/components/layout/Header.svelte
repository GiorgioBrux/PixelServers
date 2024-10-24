<script lang="ts">
    import { menu } from '$lib/data/staticData.svelte';
    import { Menu } from 'lucide-svelte';
    import { AvatarImage, AvatarFallback } from '../ui/avatar';
    import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenu } from '../ui/dropdown-menu';
    import Avatar from '../ui/avatar/avatar.svelte';
    import Button from '../ui/button/button.svelte';
    import { page } from '$app/stores';

    let { toggleMenu } = $props();

    // Function to check if menu item is active
    const isActive = (href: string) => {
        const currentPath = $page.url.pathname;
        if (href === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(href);
    };
</script>

<header class="sticky top-0 z-50 w-full border-b border-purple-300/10 bg-black/75 backdrop-blur-lg">
    <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
            <div class="flex items-center space-x-4">
                <a href="/" class="flex items-center space-x-2">
                    <h1 class="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 hover:from-purple-500 hover:via-pink-600 hover:to-purple-700">
                        PixelServers
                    </h1>
                </a>
            </div>

            <nav class="hidden md:flex md:space-x-2">
                {#each menu as item}
                    <a 
                        href={item.href} 
                        class="inline-flex items-center justify-center rounded-md px-4 py-1.5 text-m font-medium 
                        {isActive(item.href) ? 
                            'bg-purple-400/10 text-purple-100' : 
                            'text-purple-200/70 hover:bg-purple-400/10 hover:text-purple-100'} 
                        transition-all focus:outline-none relative"
                    >
                        {item.title}
                    </a>
                {/each}
            </nav>

            <!-- Rest of the header remains the same -->
            <div class="flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            variant="ghost" 
                            class="relative h-9 w-9 rounded-full border border-purple-300/10 bg-purple-900/10 p-0 hover:bg-purple-900/20"
                        >
                            <Avatar class="h-8 w-8">
                                <AvatarImage alt="User" />
                                <AvatarFallback class="bg-purple-950 text-purple-200">U</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" class="w-56">
                        <DropdownMenuItem class="flex cursor-pointer items-center space-x-2 hover:bg-purple-900/20">
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem class="flex cursor-pointer items-center space-x-2 hover:bg-purple-900/20">
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem class="flex cursor-pointer items-center space-x-2 text-red-400 hover:bg-red-950/20">
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button 
                    variant="ghost" 
                    size="icon" 
                    class="hover:bg-purple-900/20 md:hidden" 
                    onclick={() => toggleMenu}
                >
                    <Menu class="h-5 w-5" />
                </Button>
            </div>
        </div>
    </div>
</header>

<style>
    h1 {
        background-size: 200% auto;
    }
    h1:hover {
        background-position: right center;
    }
</style>
