export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Strawberries', href: '#products' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Farm to Table', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
];

export const STATS = [
  { value: '500+', label: 'Farms' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '24hr', label: 'Fresh Delivery' },
];

export const TRUST_ITEMS = [
  { icon: '🌿', text: 'Sustainably Grown' },
  { icon: '🍓', text: 'Handpicked Daily' },
  { icon: '🚚', text: 'Next-Day Delivery' },
  { icon: '❤️', text: 'No Pesticides' },
  { icon: '⭐', text: '4.9 / 5 Rating' },
];

export const ABOUT_TAGS = [
  { icon: '🌾', text: 'Family Owned' },
  { icon: '🐝', text: 'Bee Friendly' },
  { icon: '✅', text: 'Certified Organic' },
  { icon: '🌍', text: 'Earth Conscious' },
];

export const PRODUCTS = [
  {
    id: 1,
    image: '/closeup.png',
    badge: 'Best Seller',
    badgeColor: 'bg-green-primary',
    name: 'Premium Fresh Strawberries',
    desc: 'Hand-selected Grade A strawberries, vibrant red, perfectly ripe. Rich in flavour and aroma.',
    features: ['100% Natural & Fresh', 'Zero Preservatives', 'Harvested same day'],
    price: '₹120',
    unit: '500g',
    featured: false,
  },
  {
    id: 2,
    image: '/basket.png',
    badge: '🔥 Popular',
    badgeColor: 'bg-red-primary',
    name: 'Farm Basket — 1 kg',
    desc: 'Our classic farm basket — a generous 1kg of handpicked strawberries packed in a rustic wooden basket, perfect for gifting.',
    features: ['Gift-ready packaging', 'Mixed ripeness for sharing', 'Direct from farm'],
    price: '₹220',
    unit: '1 kg',
    featured: true,
  },
  {
    id: 3,
    image: '/splash.png',
    badge: 'Seasonal',
    badgeColor: 'bg-yellow-accent',
    name: 'Splash Season Box — 2 kg',
    desc: 'Our premium seasonal box for families and strawberry lovers. Fresh, washed, and sorted for your convenience.',
    features: ['Pre-washed & sorted', 'Family-size pack', 'Free cold delivery'],
    price: '₹400',
    unit: '2 kg',
    featured: false,
  },
];

export const BENEFITS = [
  { icon: '🛡️', title: 'Boosts Immunity', desc: 'Packed with Vitamin C — one cup gives you 150% of your daily requirement.' },
  { icon: '❤️', title: 'Heart Health', desc: 'Rich in antioxidants and polyphenols that protect cardiovascular health.' },
  { icon: '✨', title: 'Glowing Skin', desc: 'Ellagic acid and antioxidants fight wrinkles and promote radiant skin.' },
  { icon: '🔥', title: 'Low Calorie, High Fiber', desc: 'Only 33 calories per 100g — perfect for a healthy, guilt-free snack.' },
  { icon: '🧠', title: 'Brain Booster', desc: 'Flavonoids in strawberries are linked to improved memory and cognitive function.' },
  { icon: '🩸', title: 'Blood Sugar Friendly', desc: 'Low glycaemic index makes them safe even for diabetics in moderation.' },
];

export const PROCESS_STEPS = [
  { num: '01', icon: '🌱', title: 'Grown Naturally', desc: 'Our strawberries are nurtured in nutrient-rich, pesticide-free soil with natural irrigation methods.' },
  { num: '02', icon: '🍓', title: 'Handpicked at Peak', desc: 'Expert pickers select only perfectly ripe berries by hand — never machines — for maximum flavour.' },
  { num: '03', icon: '📦', title: 'Carefully Packed', desc: 'Each berry is gently sorted and packed in eco-friendly, ventilated packaging to preserve freshness.' },
  { num: '04', icon: '🚚', title: 'Delivered Fresh', desc: 'Cold-chain delivery ensures your berries arrive as fresh as the moment they were picked.' },
];

export const GALLERY_ITEMS = [
  { src: '/hero.png', alt: 'Fresh strawberries with water droplets', label: 'Farm Fresh', big: true },
  { src: '/farm.png', alt: 'Strawberry farm aerial view', label: 'Our Farm', big: false },
  { src: '/closeup.png', alt: 'Berry close up macro shot', label: 'Ripe & Ready', big: false },
  { src: '/basket.png', alt: 'Strawberries in wooden basket', label: 'Harvest Day', big: false },
  { src: '/splash.png', alt: 'Strawberries splashing into water', label: 'Pure Freshness', big: false },
  { src: '/lifestyle.png', alt: 'Enjoying fresh strawberries', label: 'Happy Customers', big: false },
];

export const TESTIMONIALS = [
  {
    id: 1, stars: 5, featured: false,
    quote: '"The freshest strawberries I\'ve ever tasted! They arrived perfectly ripe and so sweet. I\'m never buying from a supermarket again."',
    initials: 'PK', name: 'Priya K.', location: 'Chennai, Tamil Nadu',
  },
  {
    id: 2, stars: 5, featured: true,
    quote: '"Sweet, juicy, and delivered exactly on time. The packaging was beautiful too — I gifted a basket to my family and they loved it!"',
    initials: 'AR', name: 'Arjun R.', location: 'Bangalore, Karnataka',
  },
  {
    id: 3, stars: 5, featured: false,
    quote: '"Perfect quality and amazing flavour every single time. The Berry Patch is my go-to for fresh fruit. Highly recommend to everyone!"',
    initials: 'SM', name: 'Sneha M.', location: 'Coimbatore, Tamil Nadu',
  },
  {
    id: 4, stars: 5, featured: false,
    quote: '"I ordered the 2kg seasonal box for a party. Everyone asked where I got such beautiful strawberries! Will order again for sure."',
    initials: 'RV', name: 'Ravi V.', location: 'Hyderabad, Telangana',
  },
];
