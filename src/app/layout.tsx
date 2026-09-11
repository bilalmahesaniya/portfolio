import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bilalmahesaniya.com"),
  title: "Bilal Mahesaniya — UI/UX & Graphic Designer Portfolio",
  description:
    "Portfolio of Bilal Mahesaniya — Junior UI/UX Designer & Graphic Designer with a Computer Engineering background. Certified by Xipra Tech. Explore 9 curated projects.",
  keywords: [
    "Bilal Mahesaniya",
    "UI/UX Designer",
    "Graphic Designer",
    "Figma",
    "Design Systems",
    "Xipra Tech",
    "Portfolio",
    "Frontend"
  ],
  authors: [{ name: "Bilal Mahesaniya" }],
  openGraph: {
    title: "Bilal Mahesaniya — UI/UX & Graphic Designer Portfolio",
    description: "Explore 9 curated UI/UX and Graphic Design projects, certifications, and technical design systems.",
    url: "https://bilalmahesaniya.com",
    siteName: "Bilal Mahesaniya Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary antialiased selection:bg-accent-primary selection:text-white min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
