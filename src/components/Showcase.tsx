import React from "react";
import { Box, FileCode, Palette, Rocket } from "lucide-react";

const items = [
  {
    icon: FileCode,
    title: "Clean source code",
    description:
      "Modular React components, typed with TypeScript, and organized for fast rebranding.",
  },
  {
    icon: Palette,
    title: "Dark premium UI",
    description:
      "Purple–cyan gradient system, glass cards, and antigravity motion effects out of the box.",
  },
  {
    icon: Box,
    title: "Ready to ship",
    description:
      "Hero, features, pricing, FAQ, and footer — everything a SaaS landing needs on day one.",
  },
  {
    icon: Rocket,
    title: "One-click deploy",
    description:
      "Optimized for Vercel. Run npm run build and publish your demo or client site in minutes.",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-[#030303] py-24 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">
            What you get
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-4">
            Everything buyers expect
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto font-light">
            A complete landing page template — not a mock SaaS backend. Rebrand, set your price, and sell or deploy for clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6 hover:border-zinc-700 transition-colors"
            >
              <Icon className="w-7 h-7 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
