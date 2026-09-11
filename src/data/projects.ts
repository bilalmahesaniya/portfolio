export type ProjectCategory = 'ui-ux' | 'graphic-design';

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
  category: ProjectCategory;   // 'ui-ux' or 'graphic-design'
  featured: boolean;           // Display in hero featured slot
  sortOrder: number;           // 1 to 9
  timeline: string;            // e.g. '4 Weeks, 2024'
  role: string;                // e.g. 'Lead UI/UX Designer & Prototyper'
  client: string;              // e.g. 'Fintech Concept'
  tools: string[];             // e.g. ['Figma', 'Design System', 'Prototyping']
  thumbnailUrl: string;        // Cover image for project grid
  heroImageUrl: string;        // Full-width banner in case study
  figmaPrototypeUrl?: string;  // Embeddable Figma prototype link
  liveDemoUrl?: string;        // Optional live web link
  metrics?: ProjectMetric[];   // Key outcomes or achievements
  overview: string;            // High-level summary
  sections: CaseStudySection[];// Detailed process blocks
  engineeringNotes?: string;   // How Bilal's computer engineering mindset helped build it
}

export const SEED_PROJECTS: Project[] = [
  // 7 UI/UX Projects
  {
    id: 'p-01',
    slug: 'cinewave-movie-recommendation-app',
    title: 'CineWave — Movie Recommendation & Streaming UI',
    subtitle: 'Personalized movie discovery, curated watchlists, and immersive trailer previews',
    category: 'ui-ux',
    featured: true,
    sortOrder: 1,
    timeline: '4 Weeks, 2024',
    role: 'Lead UI/UX Designer',
    client: 'Entertainment & Streaming Concept',
    tools: ['Figma', 'Mobile UI', 'Prototyping', 'User Research'],
    thumbnailUrl: '/projects/p-01/cover.png',
    heroImageUrl: '/projects/p-01/cover.png',
    metrics: [
      { label: 'Watchlist Additions', value: '+42%', description: 'Streamlined discovery flow' },
      { label: 'Navigation Speed', value: '< 2 Taps', description: 'Instant trailer and synopsis preview' },
      { label: 'Visual Hierarchy', value: 'Dark UI', description: 'Cinematic high-contrast layout' }
    ],
    overview: 'CineWave is a modern streaming and movie recommendation mobile interface showcasing blockbuster releases (Disney The Lion King, John Wick 4). Designed with bold typography, high-impact hero banners, and a frictionless "Watch for Free" CTA that maximizes viewing conversion.',
    sections: [
      {
        id: 'problem',
        title: '01. The Problem',
        subtitle: 'Overwhelming content libraries create viewer decision paralysis',
        content: 'Modern movie streaming interfaces often clutter the viewport with dozens of competing posters without clear editorial curation, resulting in prolonged search times and viewer drop-off.',
        callout: {
          type: 'insight',
          text: 'Users make watch decisions in under 7 seconds when presented with rich hero previews and single-tap synopsis overlays.'
        }
      },
      {
        id: 'solution',
        title: '02. Design Solution & Experience',
        subtitle: 'Full-bleed cinematic visuals with tactile card trays',
        content: 'Constructed an immersive visual layout that puts movie artwork front and center, backed by fluid horizontal carousels, genre tags, and high-contrast call-to-action buttons.',
        callout: {
          type: 'engineering',
          text: 'Maintained strict dark-mode color tokens to eliminate backlight glare and highlight vibrant artwork palettes.'
        }
      }
    ],
    engineeringNotes: 'Structured reusable card components in Figma with auto-layout and variant properties, preparing seamless handoff for React Native or Flutter mobile developers.'
  },
  {
    id: 'p-02',
    slug: 'foodgo-burger-delivery-mobile-app',
    title: 'Foodgo — Quick Food Ordering & Delivery App',
    subtitle: 'Seamless burger customization, real-time tracking, and one-tap checkout flow',
    category: 'ui-ux',
    featured: true,
    sortOrder: 2,
    timeline: '3 Weeks, 2024',
    role: 'Mobile UI/UX Designer',
    client: 'Food & Quick-Service Concept',
    tools: ['Figma', 'iOS Design System', 'Component Tokens', 'Prototyping'],
    thumbnailUrl: '/projects/p-02/cover.png',
    heroImageUrl: '/projects/p-02/cover.png',
    metrics: [
      { label: 'Checkout Funnel', value: '3 Steps', description: 'Reduced steps from selection to payment' },
      { label: 'Menu Scan Time', value: '-30%', description: 'Quick-filter pills for Combos & Sliders' },
      { label: 'Target Platform', value: 'iOS 17', description: 'Optimized for modern mobile viewports' }
    ],
    overview: 'Engineered an appetizing, thumb-friendly iOS food ordering application for Foodgo. Features categorized filter chips (All, Combos, Sliders), clean item cards with rating badges and wishlist hearts, and an accessible bottom navigation bar with a vibrant quick-add button.',
    sections: [
      {
        id: 'overview',
        title: '01. Frictionless Ordering Journey',
        subtitle: 'Ordering lunch in under 60 seconds',
        content: 'Analyzed food delivery drop-off points and eliminated nested configuration menus. Users select their favorite cheeseburger or combo, view transparent pricing, and tap the floating plus button to add directly to order.'
      }
    ],
    engineeringNotes: 'Adheres to 8pt spatial rhythm and iOS Human Interface touch target minimums (48x48px) for effortless single-hand use on iPhone devices.'
  },
  {
    id: 'p-03',
    slug: 'himalayas-portraitstory-travel-editorial',
    title: 'PortraitStory — Himalayas Cultural Travel & Stories',
    subtitle: 'Immersive editorial web experience exploring mountain heritage and visual narratives',
    category: 'ui-ux',
    featured: false,
    sortOrder: 3,
    timeline: '3 Weeks, 2024',
    role: 'Web UI/UX Designer',
    client: 'Cultural & Travel Editorial',
    tools: ['Figma', 'Editorial Typography', 'Web UI Design', 'Visual Storytelling'],
    thumbnailUrl: '/projects/p-03/cover.png',
    heroImageUrl: '/projects/p-03/cover.png',
    metrics: [
      { label: 'Read-Through Rate', value: '78%', description: 'High reader engagement on longform essays' },
      { label: 'Visual Depth', value: 'Full Bleed', description: 'Layered photography with mountain atmosphere' }
    ],
    overview: 'A cultural editorial web platform showcasing breathtaking Himalayan expeditions and sacred portraiture. Integrates high-contrast typography, video teaser overlays, and smooth category tabs (PortraitStory, Menu, For you, Inspiration) with deep red accent CTA buttons.',
    sections: [
      {
        id: 'storytelling',
        title: '01. Visual Storytelling at Scale',
        subtitle: 'Preserving human stories within vast natural landscapes',
        content: 'Crafted an atmospheric dark-mode reading experience that pairs wide-angle mountain vistas with intimate portraits of local inhabitants, allowing imagery and typography to breathe naturally.'
      }
    ]
  },
  {
    id: 'p-04',
    slug: 'sweet-glaze-donuts-ecommerce-store',
    title: 'Sweet Glaze Donuts — Bakery E-Commerce Web Store',
    subtitle: 'Vibrant online donut shop with interactive flavor customizer and sweet aesthetics',
    category: 'ui-ux',
    featured: false,
    sortOrder: 4,
    timeline: '2 Weeks, 2024',
    role: 'UI Designer & Prototyper',
    client: 'Bakery & Confectionery Concept',
    tools: ['Figma', 'E-Commerce UX', 'Color Theory', 'Micro-Interactions'],
    thumbnailUrl: '/projects/p-04/cover.png',
    heroImageUrl: '/projects/p-04/cover.png',
    overview: 'Designed an appetizing dessert e-commerce web platform featuring interactive donut flavor switchers (Blueberry Glaze, Matcha Green, Pink Strawberry, Golden Sprinkle), dynamic cart indicators, and playful typography tailored for confectionery lovers.',
    sections: []
  },
  {
    id: 'p-05',
    slug: 'lord-of-drinks-3d-rotating-can',
    title: 'Lord of Drinks — 3D Rotating Can Experience',
    subtitle: 'Interactive product landing page showcasing 3D rotating watermelon soda cans',
    category: 'ui-ux',
    featured: true,
    sortOrder: 5,
    timeline: '3 Weeks, 2024',
    role: 'Product & Interaction Designer',
    client: 'Beverage Brand Concept',
    tools: ['Figma', '3D Product Design', 'Interaction Design', 'Web UI'],
    thumbnailUrl: '/projects/p-05/cover.png',
    heroImageUrl: '/projects/p-05/cover.png',
    metrics: [
      { label: 'Interaction Rate', value: '88%', description: 'Visitor engagement with 3D product preview' },
      { label: 'Brand Aesthetics', value: 'Fresh', description: 'Harmonized watermelon green and coral red' }
    ],
    overview: 'Engineered an eye-catching interactive beverage landing page with a 3D rotating can centerpiece, fresh watermelon slice accents, "Spin me up" CTA, and smooth horizontal flavor navigation (Fruit Squash, Smoothies, Drinks Menu).',
    sections: []
  },
  {
    id: 'p-06',
    slug: 'pizzahut-digital-order-experience',
    title: 'Pizza Hut — Digital Ordering Flow & Deals Redesign',
    subtitle: 'Modernized mobile ordering experience with deal combos and visual menu builder',
    category: 'ui-ux',
    featured: false,
    sortOrder: 6,
    timeline: '2 Weeks, 2024',
    role: 'UI/UX Designer',
    client: 'Quick Service Restaurant Concept',
    tools: ['Figma', 'Mobile UI', 'Information Architecture', 'Order Funnel'],
    thumbnailUrl: '/projects/p-06/cover.png',
    heroImageUrl: '/projects/p-06/cover.png',
    overview: 'Redesigned the digital pizza ordering interface with high-contrast imagery, visual crust & topping customizers, and prominent deal banners that drive higher cart order values and faster completion.',
    sections: []
  },
  {
    id: 'p-07',
    slug: 'marvel-universe-character-explorer',
    title: 'Marvel Universe — Thor & Spider-Man Character Explorer',
    subtitle: 'High-impact dark-themed character portal with comic lore and dynamic hero profiles',
    category: 'ui-ux',
    featured: true,
    sortOrder: 7,
    timeline: '3 Weeks, 2024',
    role: 'UI/UX Designer & Prototyper',
    client: 'Entertainment Study',
    tools: ['Figma', 'Dark UI Design', 'Entertainment Portal', 'Interactive Prototype'],
    thumbnailUrl: '/projects/p-07/cover.png',
    heroImageUrl: '/projects/p-07/cover.png',
    metrics: [
      { label: 'Character Switching', value: 'Instant', description: 'Fluid split-screen hero transition' },
      { label: 'Atmosphere Score', value: 'Cinematic', description: 'Lightning and web slinger aesthetics' }
    ],
    overview: 'Created an interactive superhero encyclopedia showcasing Thor and Spider-Man. Features angular split-screen layout, social media hubs, lore accordions, and character carousel navigation.',
    sections: []
  },

  // 5 Graphic Design & Branding Projects
  {
    id: 'p-08',
    slug: 'artisanal-ice-cream-brand-identity',
    title: 'Artisanal Ice Cream — Brand Identity & Packaging',
    subtitle: 'Handcrafted pastel brand identity, mascot illustration, and tub packaging design',
    category: 'graphic-design',
    featured: true,
    sortOrder: 8,
    timeline: '2 Weeks, 2024',
    role: 'Brand & Visual Designer',
    client: 'Dessert Brand Concept',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Identity', 'Packaging'],
    thumbnailUrl: '/projects/p-08/cover.png',
    heroImageUrl: '/projects/p-08/cover.png',
    metrics: [
      { label: 'Palette Range', value: '5 Flavors', description: 'Cohesive pastel color system' },
      { label: 'Print Compliance', value: 'CMYK Ready', description: 'Vector packaging die-lines' }
    ],
    overview: 'Developed the complete visual identity for an artisan ice cream brand, featuring joyful custom typography, hand-illustrated flavor scoops, packaging layouts, and social media branding templates.',
    sections: []
  },
  {
    id: 'p-09',
    slug: 'organic-blueberry-beverage-packaging',
    title: 'Blueberry Pure Organic — Beverage Packaging & Label',
    subtitle: 'Botanical fruit splash graphics, nutritional label hierarchy, and retail mockup',
    category: 'graphic-design',
    featured: false,
    sortOrder: 9,
    timeline: '2 Weeks, 2024',
    role: 'Packaging & Graphic Designer',
    client: 'Organic Food & Beverage',
    tools: ['Adobe Illustrator', 'Photoshop 3D Mockup', 'Label Design', 'Print Production'],
    thumbnailUrl: '/projects/p-09/cover.png',
    heroImageUrl: '/projects/p-09/cover.png',
    overview: 'Crafted a refreshing commercial bottle label and marketing collateral for organic blueberry juice, emphasizing natural ingredients through botanical illustrations, water droplet textures, and vibrant splash photography.',
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
