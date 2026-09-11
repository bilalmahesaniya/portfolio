import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0B0D12",
        "bg-surface": "#14161D",
        "bg-surface-alt": "#1B1E27",
        "text-primary": "#E7E9EE",
        "text-secondary": "#8B92A3",
        "accent-primary": "#4F7CFF",
        "accent-secondary": "#14F1B2",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        success: "#3DDC84",
        error: "#FF5C6C",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        "glow-accent": "0 0 24px -4px rgba(79, 124, 255, 0.25)",
        "glow-subtle": "0 0 16px -2px rgba(20, 241, 178, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
