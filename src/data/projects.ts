export type ProjectCategory = 'mobile-ui' | 'web-platform' | 'interactive-ui';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  images?: {
    url: string;
    caption: string;
    alt: string;
    aspectRatio?: '16:9' | '4:3' | '1:1';
  }[];
  callout?: {
    type: 'insight' | 'engineering' | 'result';
    text: string;
  };
}

export interface Project {
  id: string;                  // Unique identifier (e.g. 'p-01')
  slug: string;                // URL slug
  title: string;               // Display title
  subtitle: string;            // One-line teaser
  category: ProjectCategory;   // 'mobile-ui' | 'web-platform' | 'interactive-ui'
  categoryLabel: string;       // Display badge label
  featured: boolean;           // Display in hero featured slot
  sortOrder: number;           // 1 to 15
  timeline: string;            // e.g. '4 Weeks, 2024'
  role: string;                // e.g. 'Lead UI/UX Designer'
  client: string;              // e.g. 'Entertainment & Streaming Concept'
  tools: string[];             // e.g. ['Figma', 'Auto Layout', 'Prototyping']
  thumbnailUrl: string;        // Cover image / fallback
  heroImageUrl: string;        // Full-width banner in case study
  figmaPrototypeUrl: string;   // Embeddable Figma prototype link
  figmaDirectUrl: string;      // Direct Figma prototype link
  liveDemoUrl?: string;        // Optional live web link
  metrics?: ProjectMetric[];   // Key outcomes or achievements
  overview: string;            // High-level summary
  sections: CaseStudySection[];// Detailed process blocks
  engineeringNotes?: string;   // How Bilal's computer science mindset helped build it
}

export const SEED_PROJECTS: Project[] = [
  {
    id: 'p-01',
    slug: 'cinewave-ott-streaming-platform',
    title: 'CineWave — OTT Streaming & Content Discovery Platform',
    subtitle: 'Personalized movie recommendations, curated watchlists, and cinematic dark-mode UI',
    category: 'web-platform',
    categoryLabel: 'WEB & OTT PLATFORM',
    featured: true,
    sortOrder: 1,
    timeline: '4 Weeks, 2024',
    role: 'Lead UI/UX Designer',
    client: 'Entertainment & OTT Concept',
    tools: ['Figma', 'Auto Layout', 'Interactive Components', 'Streaming UX', 'Design Tokens'],
    thumbnailUrl: '/projects/p-01/cover.png',
    heroImageUrl: '/projects/p-01/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=26-375&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=26-375',
    metrics: [
      { label: 'Content Discovery', value: '+42%', description: 'Faster access to top trending releases' },
      { label: 'Design Tokens', value: '64+', description: 'Strict component and color variables' },
      { label: 'Contrast Ratio', value: '4.5:1', description: 'WCAG 2.1 AA accessible on OLED darks' }
    ],
    overview: 'A premium entertainment streaming interface engineered for high-engagement movie browsing. Features immersive billboard hero banners, trailer preview modals, dynamic cast carousels, and an accessible high-contrast color palette.',
    sections: []
  },
  {
    id: 'p-02',
    slug: 'foodgo-mobile-food-ordering-app',
    title: 'Foodgo — Quick Food Ordering & Delivery Mobile App',
    subtitle: 'Thumb-friendly iOS delivery application with custom burger builder & one-tap reorder',
    category: 'mobile-ui',
    categoryLabel: 'MOBILE UI/UX',
    featured: true,
    sortOrder: 2,
    timeline: '3 Weeks, 2024',
    role: 'Mobile UI/UX Designer',
    client: 'Quick-Service Dining & Delivery Concept',
    tools: ['Figma', 'iOS Human Interface', 'Micro-Interactions', 'Component Variants', 'Smart Animate'],
    thumbnailUrl: '/projects/p-02/cover.png',
    heroImageUrl: '/projects/p-02/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/KZtockRrliivxTltabKFhk/Untitled?node-id=140-6&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=90%3A4&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/KZtockRrliivxTltabKFhk/Untitled?node-id=140-6&starting-point-node-id=90%3A4',
    metrics: [
      { label: 'Checkout Clicks', value: '3 Taps', description: 'Reduced friction from selection to order' },
      { label: 'Touch Targets', value: '48px+', description: 'Optimized for one-handed thumb navigation' }
    ],
    overview: 'A frictionless food delivery mobile app crafted for high-speed ordering. Features categorized food pills, interactive ingredient customizers (cheese, patties, veggies), real-time cart recalculation, and status tracking.',
    sections: []
  },
  {
    id: 'p-03',
    slug: 'metaplanet-spatial-web-experience',
    title: 'MetaPlanet — Spatial Web & Cosmic Experience UI',
    subtitle: 'Immersive dark-mode spatial exploration with celestial telemetry & interactive planet lore',
    category: 'web-platform',
    categoryLabel: '3D & SPATIAL WEB',
    featured: true,
    sortOrder: 3,
    timeline: '3 Weeks, 2024',
    role: 'UI/UX & Concept Designer',
    client: 'Futuristic Web & Spatial Concept',
    tools: ['Figma', 'Spatial UI', 'Dark Aesthetics', 'Glassmorphism', 'Interactive Prototyping'],
    thumbnailUrl: '/projects/p-03/cover.png',
    heroImageUrl: '/projects/p-03/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/N9KOnrrosaQngZ35xTywxJ/Untitled?node-id=5-3&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/N9KOnrrosaQngZ35xTywxJ/Untitled?node-id=5-3',
    metrics: [
      { label: 'Visual Depth', value: 'Z-Space', description: 'Layered parallax card hierarchy' },
      { label: 'Theme', value: 'OLED Black', description: 'Deep space palette with neon cyan accents' }
    ],
    overview: 'A speculative spatial interface presenting astronomical exploration. Centers orbital parameters, planet classification cards, coordinate telemetry, and futuristic HUD typography in an interactive prototype.',
    sections: []
  },
  {
    id: 'p-04',
    slug: 'nike-air-impact-footwear-showcase',
    title: 'Nike Air Impact — E-Commerce Footwear Showcase',
    subtitle: 'High-energy footwear launch interface with dramatic angle viewports & instant sizing flow',
    category: 'web-platform',
    categoryLabel: 'E-COMMERCE UI',
    featured: false,
    sortOrder: 4,
    timeline: '2 Weeks, 2024',
    role: 'UI/UX Designer',
    client: 'Athletic Brand Concept',
    tools: ['Figma', 'E-Commerce UX', 'Editorial Typography', 'Grid Systems', 'Responsive Breakpoints'],
    thumbnailUrl: '/projects/p-04/cover.png',
    heroImageUrl: '/projects/p-04/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/N9KOnrrosaQngZ35xTywxJ/Untitled?node-id=3-3&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/N9KOnrrosaQngZ35xTywxJ/Untitled?node-id=3-3',
    metrics: [
      { label: 'Cart Conversion', value: '+28%', description: 'Streamlined size selector & sticky CTA' },
      { label: 'Typography', value: 'Bold Condensed', description: 'Athletic editorial style hierarchy' }
    ],
    overview: 'An e-commerce product launch layout engineered for maximum emotional resonance and conversion. Features oversized hero typography, multi-angle footwear photography, colorway chips, and instant checkout drawer interaction.',
    sections: []
  },
  {
    id: 'p-05',
    slug: 'homeease-on-demand-services-app',
    title: 'HomeEase — On-Demand Home Allied Services App',
    subtitle: 'Multi-service booking mobile app with technician scheduling & upfront transparent pricing',
    category: 'mobile-ui',
    categoryLabel: 'MOBILE UI/UX',
    featured: false,
    sortOrder: 5,
    timeline: '3 Weeks, 2024',
    role: 'Mobile UI/UX Designer',
    client: 'Home Services Marketplace Concept',
    tools: ['Figma', 'Design System', 'User Journey Mapping', 'Auto Layout', 'Figma Variants'],
    thumbnailUrl: '/projects/p-05/cover.png',
    heroImageUrl: '/projects/p-05/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/h4KAgwXcQYCF6LaVHbWTHY/Untitled?node-id=43-91&starting-point-node-id=43%3A90&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/h4KAgwXcQYCF6LaVHbWTHY/Untitled?node-id=43-91&starting-point-node-id=43%3A90',
    metrics: [
      { label: 'Booking Speed', value: '4 Steps', description: 'Streamlined technician matching flow' },
      { label: 'Service Catalog', value: '8 Categories', description: 'Plumbing, electrical, cleaning & repairs' }
    ],
    overview: 'An on-demand mobile utility app connecting homeowners with vetted professionals. Features intuitive calendar pickers, upfront pricing calculators, technician credential cards, and real-time status updates.',
    sections: []
  },
  {
    id: 'p-06',
    slug: 'spincraft-interactive-3d-beverage-landing',
    title: 'SpinCraft — Interactive 3D Beverage Landing Page',
    subtitle: 'High-impact beverage showcase with interactive 3D can rotation & flavor cues',
    category: 'web-platform',
    categoryLabel: 'INTERACTIVE WEB UI',
    featured: false,
    sortOrder: 6,
    timeline: '3 Weeks, 2024',
    role: 'Interactive UI Designer',
    client: 'Beverage & Product Brand Concept',
    tools: ['Figma', 'Smart Animate', 'Interactive Prototyping', '3D UI Mockups', 'Web UI'],
    thumbnailUrl: '/projects/p-05/cover.png',
    heroImageUrl: '/projects/p-05/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=77-168&p=f&scaling=min-zoom&content-scaling=fixed&page-id=77%3A122&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=77-168',
    metrics: [
      { label: 'User Engagement', value: '360° Spin', description: 'Direct user drag-to-rotate interaction' },
      { label: 'Flavor Transitions', value: 'Instant', description: 'Coordinated background palette shifts' }
    ],
    overview: 'An interactive digital experience designed to introduce a modern craft beverage line. Incorporates user-controlled 3D can rotation, flavor ingredient popovers, vibrant chromatic palettes, and fluid menu navigation.',
    sections: []
  },
  {
    id: 'p-07',
    slug: 'aurapay-glassmorphism-neobanking-card',
    title: 'AuraPay — Glassmorphism Neobanking Card UI',
    subtitle: 'Futuristic frosted glass Visa card dynamics with real-time balance telemetry & security freeze',
    category: 'interactive-ui',
    categoryLabel: 'FINTECH COMPONENT',
    featured: false,
    sortOrder: 7,
    timeline: '2 Weeks, 2024',
    role: 'Fintech UI Designer',
    client: 'Neobanking & Fintech Concept',
    tools: ['Figma', 'Glassmorphism', 'Component States', 'Micro-Interactions', 'Dark Mode UI'],
    thumbnailUrl: '/projects/p-02/cover.png',
    heroImageUrl: '/projects/p-02/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=77-1193&p=f&scaling=min-zoom&content-scaling=fixed&page-id=77%3A1191&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=77-1193',
    metrics: [
      { label: 'Security UX', value: '1 Tap Freeze', description: 'Instant card locking micro-state' },
      { label: 'Visual Style', value: 'Glass Specular', description: 'Multi-layer blur and reflective gradients' }
    ],
    overview: 'A digital payment card component crafted for modern neobanks. Features dynamic holographic reflection on drag, virtual CVV reveal interaction, real-time balance visualization, and multi-currency switching.',
    sections: []
  },
  {
    id: 'p-08',
    slug: 'marvel-legends-superhero-character-hub',
    title: 'Marvel Legends — Interactive Superhero Character Hub',
    subtitle: 'Split-screen entertainment portal with dynamic hero profiles, power stats & comic lore',
    category: 'interactive-ui',
    categoryLabel: 'INTERACTIVE CARD',
    featured: false,
    sortOrder: 8,
    timeline: '2 Weeks, 2024',
    role: 'UI/UX & Interaction Designer',
    client: 'Entertainment & Gaming Portal Concept',
    tools: ['Figma', 'Interactive Cards', 'Character Systems', 'Dark UI', 'Micro-Interactions'],
    thumbnailUrl: '/projects/p-07/cover.png',
    heroImageUrl: '/projects/p-07/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/42sFmKgeX9ulkdTL1ZOHWa/Untitled?node-id=9-27&starting-point-node-id=9%3A27&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/42sFmKgeX9ulkdTL1ZOHWa/Untitled?node-id=9-27&starting-point-node-id=9%3A27',
    metrics: [
      { label: 'Character Roster', value: 'Dual Focus', description: 'Thor and Spider-Man split-view transitions' },
      { label: 'Attribute Radar', value: 'Dynamic', description: 'Power, speed, combat stats visualization' }
    ],
    overview: 'An interactive superhero encyclopedia featuring Thor and Spider-Man with split-screen hero transitions, animated hover effects, comic origin accordions, and character selector navigation.',
    sections: []
  },
  {
    id: 'p-09',
    slug: 'sweetglaze-bakery-product-customizer',
    title: 'SweetGlaze — Interactive Bakery Product Customizer',
    subtitle: 'Artisanal donut product card with interactive flavor & glaze switchers',
    category: 'interactive-ui',
    categoryLabel: 'E-COMMERCE CARD',
    featured: false,
    sortOrder: 9,
    timeline: '2 Weeks, 2024',
    role: 'UI Designer & Prototyper',
    client: 'Artisan Bakery Concept',
    tools: ['Figma', 'Micro-Interactions', 'E-Commerce Cards', 'Auto Layout', 'Smart Animate'],
    thumbnailUrl: '/projects/p-04/cover.png',
    heroImageUrl: '/projects/p-04/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=18-14&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=18-14',
    metrics: [
      { label: 'Flavor Options', value: '4 Glazes', description: 'Blueberry, Matcha, Strawberry & Lemon' },
      { label: 'Nutritional Info', value: 'Card Flip', description: 'Instant dietary breakdown on tap' }
    ],
    overview: 'An appetizing e-commerce card featuring real-time flavor palette shifts, pastry customization pills, dietary badges, and animated favorite button micro-interactions.',
    sections: []
  },
  {
    id: 'p-10',
    slug: 'glazeflow-mobile-donut-swipe-up',
    title: 'GlazeFlow — Mobile Donut Shop Swipe-Up Experience',
    subtitle: 'Gesture-driven vertical swipe order funnel with dynamic pastry box builder',
    category: 'mobile-ui',
    categoryLabel: 'MOBILE UI/UX',
    featured: false,
    sortOrder: 10,
    timeline: '2 Weeks, 2024',
    role: 'Mobile UX Designer',
    client: 'Mobile Quick-Order Concept',
    tools: ['Figma', 'Gesture UX', 'Mobile Prototyping', 'Smart Animate', 'Component Tokens'],
    thumbnailUrl: '/projects/p-04/cover.png',
    heroImageUrl: '/projects/p-04/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/P8dMKGa23EaHbtupYTVT4S/Untitled?node-id=1-2&starting-point-node-id=1%3A2&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/P8dMKGa23EaHbtupYTVT4S/Untitled?node-id=1-2&starting-point-node-id=1%3A2',
    metrics: [
      { label: 'Gesture Type', value: 'Swipe Up', description: 'Fluid vertical transition to detail sheet' },
      { label: 'Build Time', value: '15 Secs', description: 'Rapid pastry bundle customizer' }
    ],
    overview: 'A vertical gesture-based mobile ordering interaction where users drag up on flavor cards to reveal glaze variants, allergen disclosures, and add directly to their party box.',
    sections: []
  },
  {
    id: 'p-11',
    slug: 'pizzacrust-interactive-pizza-customizer',
    title: 'PizzaCrust — Interactive Pizza Customizer Card',
    subtitle: 'Interactive pizza configurator with crust selector, topping modifiers & real-time pricing',
    category: 'interactive-ui',
    categoryLabel: 'INTERACTIVE CARD',
    featured: false,
    sortOrder: 11,
    timeline: '2 Weeks, 2024',
    role: 'UI/UX Designer',
    client: 'Quick-Service Dining Concept',
    tools: ['Figma', 'Component Variants', 'E-Commerce Cards', 'Prototyping', 'Auto Layout'],
    thumbnailUrl: '/projects/p-06/cover.png',
    heroImageUrl: '/projects/p-06/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/QN0ZX4aMHYUvghGBK0yTcM/Untitled?node-id=1019-5&starting-point-node-id=1019%3A5&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/QN0ZX4aMHYUvghGBK0yTcM/Untitled?node-id=1019-5&starting-point-node-id=1019%3A5',
    metrics: [
      { label: 'Crust Toggle', value: '3 Types', description: 'Thin crust, hand-tossed, and stuffed crust' },
      { label: 'Price Calculation', value: 'Real-Time', description: 'Instant dynamic price response' }
    ],
    overview: 'An interactive pizza configuration card that empowers users to toggle crust types, modify toppings, calculate prices dynamically, and claim combo deals with one click.',
    sections: []
  },
  {
    id: 'p-12',
    slug: 'frostipops-artisanal-gelato-showcase',
    title: 'FrostiPops — Artisanal Gelato & Popsicle Showcase',
    subtitle: 'Vibrant gelato flavor selector with pastel themes, dietary chips & bundle customizer',
    category: 'interactive-ui',
    categoryLabel: 'INTERACTIVE CARD',
    featured: false,
    sortOrder: 12,
    timeline: '2 Weeks, 2024',
    role: 'UI Designer & Prototyper',
    client: 'Dessert & Confectionery Concept',
    tools: ['Figma', 'Color Systems', 'Responsive Cards', 'Micro-Interactions', 'Component States'],
    thumbnailUrl: '/projects/p-08/cover.png',
    heroImageUrl: '/projects/p-08/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/QN0ZX4aMHYUvghGBK0yTcM/Untitled?node-id=1001-2&starting-point-node-id=1001%3A2&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/QN0ZX4aMHYUvghGBK0yTcM/Untitled?node-id=1001-2&starting-point-node-id=1001%3A2',
    metrics: [
      { label: 'Dietary Filters', value: '4 Tags', description: 'Vegan, Gluten-Free, Organic, Dairy-Free' },
      { label: 'Visual Style', value: 'Pastel Glow', description: 'Soft drop shadows with appetizing color' }
    ],
    overview: 'A playful dessert card component featuring pastel color grading, organic ingredient callouts, scoop bundle selectors, and animated add-to-cart confirmation checkmarks.',
    sections: []
  },
  {
    id: 'p-13',
    slug: 'fizzcraft-3d-can-rotation-showcase',
    title: 'FizzCraft — 3D Can Rotation Product Showcase',
    subtitle: '360-degree interactive can rotation with ingredient callouts & nutritional breakdown',
    category: 'interactive-ui',
    categoryLabel: '3D MICRO-INTERACTION',
    featured: false,
    sortOrder: 13,
    timeline: '2 Weeks, 2024',
    role: 'Interaction Designer',
    client: 'Beverage & FMCG Brand Concept',
    tools: ['Figma', '3D Mockup Prototyping', 'Smart Animate', 'Interaction Design', 'Micro-Interactions'],
    thumbnailUrl: '/projects/p-05/cover.png',
    heroImageUrl: '/projects/p-05/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=18-145&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=18-145',
    metrics: [
      { label: 'Rotation States', value: 'Smooth', description: 'Figma smart-animated angle keyframes' },
      { label: 'Callout Pins', value: 'Interactive', description: 'Click pins to reveal natural fruit facts' }
    ],
    overview: 'A tactile product showcase card that enables consumers to inspect an aluminum can mockup from multiple angles, triggering nutritional badges and ingredient facts.',
    sections: []
  },
  {
    id: 'p-14',
    slug: 'visionslider-adaptive-editorial-carousel',
    title: 'VisionSlider — Adaptive Editorial Carousel UI',
    subtitle: 'Smooth responsive carousel component with progressive slide indicators & depth transitions',
    category: 'interactive-ui',
    categoryLabel: 'UI COMPONENT',
    featured: false,
    sortOrder: 14,
    timeline: '2 Weeks, 2024',
    role: 'UI Component Designer',
    client: 'Editorial & Design System Concept',
    tools: ['Figma', 'Component Sets', 'State Machines', 'Animation Curves', 'Design Tokens'],
    thumbnailUrl: '/projects/p-03/cover.png',
    heroImageUrl: '/projects/p-03/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=24-4&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/rcEjFrXzYGmPaoO0TJkXo2/Untitled?node-id=24-4',
    metrics: [
      { label: 'Transition Curve', value: 'Easing Cubic', description: 'Natural deceleration on drag release' },
      { label: 'Responsiveness', value: 'Auto-Fit', description: 'Adapts smoothly across desktop & mobile' }
    ],
    overview: 'A reusable UI slider component built with strict auto layout rules. Features thumbnail track previewing, keyboard navigation cues, and smooth cross-fade animation choreography.',
    sections: []
  },
  {
    id: 'p-15',
    slug: 'connectplus-lead-conversion-page',
    title: 'ConnectPlus — Modern Lead & Contact Experience',
    subtitle: 'High-conversion inquiry layout with interactive form validation states & scheduling',
    category: 'web-platform',
    categoryLabel: 'WEB UI & UX',
    featured: false,
    sortOrder: 15,
    timeline: '2 Weeks, 2024',
    role: 'UI/UX Designer',
    client: 'Agency & SaaS Contact Concept',
    tools: ['Figma', 'Form UX', 'Accessibility', 'Responsive Web Design', 'Input States'],
    thumbnailUrl: '/projects/p-01/cover.png',
    heroImageUrl: '/projects/p-01/cover.png',
    figmaPrototypeUrl: 'https://embed.figma.com/proto/7zeLrt09oHfr1lqi9f1Qop/Untitled?node-id=3-3&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3&embed-host=share',
    figmaDirectUrl: 'https://www.figma.com/proto/7zeLrt09oHfr1lqi9f1Qop/Untitled?node-id=3-3',
    metrics: [
      { label: 'Form Completion', value: '+35%', description: 'Contextual field errors & clear input affordances' },
      { label: 'Accessibility', value: 'WCAG AA', description: 'High contrast active states and focus rings' }
    ],
    overview: 'A high-converting contact and inquiry interface. Features instant field validation cues, interactive project type selectors, appointment booking chips, and clear value propositions.',
    sections: []
  }
];

export function getAllProjects(): Project[] {
  return [...SEED_PROJECTS].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return SEED_PROJECTS.filter((project) => project.category === category).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return SEED_PROJECTS.find((project) => project.slug === slug);
}
