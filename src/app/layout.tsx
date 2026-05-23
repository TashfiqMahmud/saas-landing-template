import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Aether.AI — Premium Next.js SaaS Landing Template",
  description:
    "Dark-mode SaaS landing page template with Next.js, TypeScript, Tailwind CSS, and antigravity animations. Ready to rebrand and sell.",
  keywords: [
    "Next.js template",
    "SaaS landing page",
    "AI startup template",
    "Tailwind CSS",
    "dark mode",
  ],
  openGraph: {
    title: "Aether.AI — Premium SaaS Landing Template",
    description: "Ship a stunning AI SaaS landing page in hours. One-time license.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
