//Data Leyout
export { menu, legal, features, popularMods, popularModpacks};
export type {Plans}

import { Shield, Cpu, Zap, Map, Users, Clock, Lock, Database, Cloud, Globe, Bot, Download, Gauge, Gift, Heart, Server, Settings, Star, Terminal, Wifi, Gamepad, Blocks, Bookmark, Boxes, Coins, Command, FileJson, HardDrive, Laptop, LayoutGrid, MessageSquare, MonitorPlay, Puzzle, Rocket, ScrollText, Share2, ShieldCheck, Siren, Sparkles, Workflow } from 'lucide-svelte';


let menu = [
{
    href:"/",
    title:"Home"
},
{
    href:"/plans",
    title:"Plans"
},
{
    href:"#",
    title:"Features"
},
{
    href:"#",
    title:"Support"
},
{
    href:"/panel",
    title:"Panel"
},
];

let legal = [
{
    href:"#",
    title:"Terms of Service"
},
{
    href:"#",
    title:"Privacy Policy"
},
{
    href:"#",
    title:"Refund Policy"
},
]

// Data Plans
export { getPlans };


interface Plans {
    ram: string;
    price: number;
    bestFor?: string;
    players: string;
    ssd: string;
    mostPopular?: boolean;
    backups?: {
        frequency: string;
        slots: number;
    };
    techSpecs?: {
        cpuSpeed: string;
        cpuCores: string;
        iops: string;
    };
}


function getPlans(vanillaPlans: Plans, modpackPlans: Plans, communitiesPlans: Plans){
    return [
        {
            title: 'Best for vanilla',
            description: 'Plans optimized for vanilla Minecraft servers. Perfect for small to medium groups, or light modding.',
            plans: vanillaPlans,
            overlayFrom: 'from-blue-600',
            overlayTo: 'to-blue-800',
            backgroundImage: '/images/vanilla-bg.png'
        },
        {
            title: 'Best for modpacks and communities',
            description: 'Plans optimized for heavier modpacks and larger communities. Perfect for larger groups, or heavy modding.',
            plans: modpackPlans,
            overlayFrom: 'from-orange-600',
            overlayTo: 'to-orange-800',
            backgroundImage: '/images/modded-bg.jpg',
            classNames: 'mt-12'
        },
        {
            title: 'Best for large communities',
            description: 'Plans designed to sustain high player counts and very large communities.',
            plans: communitiesPlans,
            overlayFrom: 'from-red-600',
            overlayTo: 'to-red-800',
            backgroundImage: '/images/community-bg.jpg',
            classNames: 'mt-12'
        }
    ];
}


const features = [
    // Security & Protection
    { title: 'DDoS Protection', icon: Shield },
    { title: 'SSL Security', icon: Lock },
    { title: 'Firewall', icon: ShieldCheck },
    { title: 'Anti-Cheat', icon: Siren },
  
    // Performance & Infrastructure
    { title: 'Instant Setup', icon: Zap },
    { title: 'Auto-Scaling', icon: Gauge },
    { title: 'Low Latency', icon: Wifi },
    { title: 'SSD Storage', icon: HardDrive },
    { title: 'NVMe Storage', icon: Rocket },
    { title: 'CPU Priority', icon: Cpu },
  
    // Backup & Management
    { title: 'Auto Backups', icon: Database },
    { title: 'Daily Snapshots', icon: Clock },
    { title: 'Version Control', icon: Workflow },
    { title: 'File Manager', icon: Boxes },
  
    // Domain & Network
    { title: 'Custom Domain', icon: Globe },
    { title: 'Free Subdomain', icon: Cloud },
    { title: 'Port Forwarding', icon: Share2 },
  
    // Administration
    { title: 'Resource Panel', icon: Cpu },
    { title: 'Multi-Admin', icon: Users },
    { title: 'Console Access', icon: Terminal },
    { title: 'Task Scheduler', icon: Clock },
  
    // Gaming Features
    { title: 'One-Click Mods', icon: Download },
    { title: 'Plugin API', icon: Puzzle },
    { title: 'Custom Maps', icon: Map },
    { title: 'Game Modes', icon: Gamepad },
    { title: 'World Editor', icon: Blocks },
  
    // Support & Services
    { title: '24/7 Support', icon: Heart },
    { title: 'Discord Bot', icon: Bot },
    { title: 'Live Chat', icon: MessageSquare },
    { title: 'Knowledge Base', icon: ScrollText },
  
    // Advanced Features
    { title: 'Auto-Updates', icon: Settings },
    { title: 'Config Editor', icon: FileJson },
    { title: 'Command Scheduler', icon: Command },
    { title: 'Server Monitor', icon: MonitorPlay },
    { title: 'Resource Manager', icon: LayoutGrid },
  
    // Premium Features
    { title: 'Premium Support', icon: Star },
    { title: 'Priority CPU', icon: Sparkles },
    { title: 'Dedicated IP', icon: Laptop },
    { title: 'Save States', icon: Bookmark },
    { title: 'Economy System', icon: Coins }
  ];



  export interface Mod {
    name: string;
    description: string;
    imgType: 'png' | 'gif';
    type: 'mod';
  }

export interface Modpack {
        name: string;
        description: string;
        imgType: 'png' | 'gif';
        type: 'modpack';
    }

  const popularMods: Mod[] = [
    {
      name: "Create",
      description: "A highly polished and innovative tech mod focused on realistic machinery, automation, and aesthetically pleasing contraptions.",
      imgType: "png",
      type: "mod"
    },
    {
      name: "Applied Energistics 2",
      description: "Advanced storage system mod that lets you store items digitally and automate crafting through advanced networks.",
      imgType: "gif",
      type: "mod"
    },
    {
      name: "Botania",
      description: "Magic tech mod themed around natural magic and beautiful flowers, offering unique automation and tools.",
      imgType: "png",
      type: "mod"
    },
    {
      name: "JEI (Just Enough Items)",
      description: "Essential mod that shows all items and their recipes, making crafting and mod exploration much easier.",
      imgType: "png",
      type: "mod"
    },
    {
      name: "Tinkers' Construct",
      description: "Comprehensive tool crafting mod allowing custom tool creation with various materials and modifications.",
      imgType: "png",
      type: "mod"
    },
    {
      name: "Mekanism",
      description: "Advanced tech mod adding complex machines, tools, and a comprehensive power generation system.",
      imgType: "png",
      type: "mod"
    },
    {
      name: "Sophisticated Backpacks",
      description: "Advanced storage solution adding customizable backpacks with auto-sorting, crafting, and filtering capabilities.",
      imgType: "png",
      type: "mod"
    },
    {
      name: "Farmer's Delight",
      description: "Cooking and farming expansion adding new crops, foods, and cooking mechanics for a more immersive experience.",
      imgType: "png",
      type: "mod"
    }
  ];
  
  const popularModpacks: Modpack[] = [
    {
      name: "Better MC (BMC4)",
      description: "A carefully curated collection of mods focusing on enhancement and expansion of vanilla gameplay with new content.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "RLCraft",
      description: "Challenging modpack that transforms Minecraft into a difficult realistic fantasy RPG experience.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "Vault Hunters",
      description: "RPG-styled modpack featuring unique vault running mechanics, skill systems, and extensive progression.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "Create: Above and Beyond",
      description: "Tech-focused modpack centered around Create mod with complex automation challenges and progression.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "All the Mods 10",
      description: "Massive kitchen sink modpack containing most popular mods with careful balance and integration.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "FTB Academy",
      description: "Perfect for newcomers, teaching mod mechanics through quests and guided progression.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "Enigmatica 10",
      description: "Well-balanced expert modpack with quest-based progression and extensive mod integration.",
      imgType: "png",
      type: "modpack"
    },
    {
      name: "SkyFactory 4",
      description: "Popular skyblock modpack with unique resource generation and automation challenges.",
      imgType: "png",
      type: "modpack"
    }
  ];
  