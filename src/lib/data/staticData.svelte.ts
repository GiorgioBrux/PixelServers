//Data Leyout
export { menu, legal };
export type {Plans}
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
export { getPlans, features };


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

let features = ['24/7 Support', 'DDoS Protection', 'Automated Backups', 'Custom Control Panel', 'One-Click Modpack Installer'];


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
