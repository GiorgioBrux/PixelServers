//Data Leyout
export { menu, legal };
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
export { plans, features };

let vanillaPlans = [
    { ram: '1GB', price: 5, bestFor: 'Small groups' },
    { ram: '2GB', price: 10, bestFor: 'Medium groups' },
    { ram: '4GB', price: 20, bestFor: 'Large groups' }
];
let modPackPlans = [
    { ram: '6GB', price: 30 },
    { ram: '8GB', price: 40 },
    { ram: '10GB', price: 50 },
    { ram: '12GB', price: 60 },
    { ram: '16GB', price: 80 },
    { ram: '24GB', price: 100 }
];
let communitiesPlans = [
    { ram: '32GB', price: 120 },
    { ram: '48GB', price: 150 },
    { ram: '64GB', price: 200 }
];

let features = ['24/7 Support', 'DDoS Protection', 'Automated Backups', 'Custom Control Panel', 'One-Click Modpack Installer'];

let plans = [
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
        plans: modPackPlans,
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
