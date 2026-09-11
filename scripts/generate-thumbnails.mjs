import fs from 'fs';
import path from 'path';

const projects = [
  { id: 'p-01', title: 'Nova Pay', category: 'UI/UX Design', subtitle: 'Neobank Mobile App', color: '#4F7CFF', icon: 'wallet' },
  { id: 'p-02', title: 'PulseOps', category: 'UI/UX Design', subtitle: 'DevOps Cloud Dashboard', color: '#14F1B2', icon: 'server' },
  { id: 'p-03', title: 'CuraHealth', category: 'UI/UX Design', subtitle: 'Telehealth Portal', color: '#3DDC84', icon: 'heart' },
  { id: 'p-04', title: 'Aura Collective', category: 'UI/UX Design', subtitle: 'Minimal Luxury E-Com', color: '#E7E9EE', icon: 'shopping-bag' },
  { id: 'p-05', title: 'PromptFlow', category: 'UI/UX Design', subtitle: 'AI Prompt Canvas', color: '#4F7CFF', icon: 'cpu' },
  { id: 'p-06', title: 'Kinetix', category: 'UI/UX Design', subtitle: 'Habit & Workout Tracker', color: '#FFBD2E', icon: 'activity' },
  { id: 'p-07', title: 'WanderPath', category: 'UI/UX Design', subtitle: 'Smart Travel Planner', color: '#14F1B2', icon: 'map' },
  { id: 'p-08', title: 'Solis Roasters', category: 'Graphic Design', subtitle: 'Artisanal Coffee Identity', color: '#D97706', icon: 'coffee' },
  { id: 'p-09', title: 'Apex Tech Summit', category: 'Graphic Design', subtitle: 'Event Identity 2025', color: '#4F7CFF', icon: 'calendar' },
  { id: 'p-10', title: 'Lumina Skincare', category: 'Graphic Design', subtitle: 'Luxury Botanical Packaging', color: '#14F1B2', icon: 'feather' },
  { id: 'p-11', title: 'VeloCity Mobility', category: 'Graphic Design', subtitle: 'Micro-Mobility Identity', color: '#3DDC84', icon: 'navigation' },
  { id: 'p-12', title: 'Form & Function', category: 'Graphic Design', subtitle: 'Editorial Design Quarterly', color: '#E7E9EE', icon: 'book-open' }
];

function generateSvg(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="grad-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14161D" />
      <stop offset="50%" stop-color="#1B1E27" />
      <stop offset="100%" stop-color="#0B0D12" />
    </linearGradient>
    <linearGradient id="accent-${p.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.color}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="${p.color}" stop-opacity="0.3" />
    </linearGradient>
    <pattern id="grid-${p.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" fill="url(#grad-${p.id})" />
  <rect width="800" height="500" fill="url(#grid-${p.id})" />

  <!-- Ambient glow orb -->
  <circle cx="400" cy="250" r="180" fill="${p.color}" opacity="0.08" filter="blur(40px)" />

  <!-- Wireframe Mockup Container -->
  <rect x="120" y="80" width="560" height="340" rx="16" fill="#14161D" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  
  <!-- Mockup Window Bar -->
  <rect x="120" y="80" width="560" height="40" rx="16" fill="#1B1E27" />
  <circle cx="148" cy="100" r="5" fill="#FF5F56" opacity="0.8" />
  <circle cx="164" cy="100" r="5" fill="#FFBD2E" opacity="0.8" />
  <circle cx="180" cy="100" r="5" fill="#27C93F" opacity="0.8" />
  
  <!-- Title & Category in header -->
  <text x="660" y="104" text-anchor="end" fill="#8B92A3" font-family="monospace" font-size="11" font-weight="bold">${p.category.toUpperCase()}</text>

  <!-- Inside UI Card Wireframe Elements -->
  <rect x="150" y="145" width="240" height="24" rx="6" fill="url(#accent-${p.id})" />
  <rect x="150" y="182" width="160" height="12" rx="3" fill="rgba(255,255,255,0.2)" />
  <rect x="150" y="202" width="210" height="12" rx="3" fill="rgba(255,255,255,0.1)" />

  <!-- UI Data Cards -->
  <rect x="150" y="240" width="150" height="85" rx="10" fill="#1B1E27" stroke="rgba(255,255,255,0.05)" />
  <rect x="165" y="255" width="60" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
  <text x="165" y="295" fill="${p.color}" font-family="sans-serif" font-size="22" font-weight="bold">${p.id.toUpperCase()}</text>
  <rect x="165" y="305" width="110" height="6" rx="2" fill="rgba(255,255,255,0.15)" />

  <rect x="320" y="240" width="150" height="85" rx="10" fill="#1B1E27" stroke="rgba(255,255,255,0.05)" />
  <rect x="335" y="255" width="70" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
  <rect x="335" y="280" width="100" height="12" rx="3" fill="url(#accent-${p.id})" />
  <rect x="335" y="305" width="80" height="6" rx="2" fill="rgba(255,255,255,0.15)" />

  <!-- Right Visual Element / Geometric Art -->
  <g transform="translate(500, 160)">
    <rect width="150" height="165" rx="12" fill="#1B1E27" stroke="${p.color}" stroke-opacity="0.3" stroke-width="1.5" />
    <circle cx="75" cy="65" r="36" fill="url(#accent-${p.id})" opacity="0.3" stroke="${p.color}" stroke-width="1" />
    <path d="M 50 115 Q 75 80 100 115" stroke="${p.color}" stroke-width="2" fill="none" />
    <text x="75" y="142" text-anchor="middle" fill="#E7E9EE" font-family="sans-serif" font-size="12" font-weight="600">${p.title}</text>
  </g>

  <!-- Watermark / Footer of card -->
  <text x="400" y="390" text-anchor="middle" fill="#8B92A3" font-family="monospace" font-size="12">${p.subtitle} • Bilal Mahesaniya</text>
</svg>`;
}

const baseDir = path.resolve('public/projects');

for (const p of projects) {
  const projDir = path.join(baseDir, p.id);
  fs.mkdirSync(projDir, { recursive: true });
  
  const svgContent = generateSvg(p);
  fs.writeFileSync(path.join(projDir, 'thumbnail.svg'), svgContent);
  fs.writeFileSync(path.join(projDir, 'hero.svg'), svgContent);
}

console.log('Generated 12 project SVG thumbnails successfully!');
