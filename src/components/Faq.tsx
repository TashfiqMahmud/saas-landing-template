"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "What tech stack is included?",
    a: "Next.js (App Router), React, TypeScript, Tailwind CSS v4, and Lucide icons. No backend or database — it's a front-end landing template.",
  },
  {
    q: "Can I use this for client projects?",
    a: "Yes, with the Commercial or Agency license. The Personal license is for a single end product you own (your own startup or portfolio).",
  },
  {
    q: "Do I need to credit the original author?",
    a: "No attribution required on any license tier. You may rebrand the template entirely as your own product.",
  },
  {
    q: "How do I customize colors and copy?",
    a: "Edit the components in src/components and global styles in src/app/globals.css. Tailwind utility classes make theme tweaks straightforward.",
  },
  {
    q: "Is support included?",
    a: "You receive lifetime updates for the version you purchased. Email support is included with Commercial and Agency licenses for setup questions.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="max-w-3xl mx-auto border-t border-zinc-900 pt-20">
      <div className="mb-12">
        <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">FAQ</span>
        <h3 className="text-3xl md:text-4xl font-bold mt-2 text-white">Questions from buyers</h3>
        <p className="text-zinc-500 text-sm mt-1 font-light">
          Straight answers about licensing, stack, and customization.
        </p>
      </div>
      <div className="space-y-2">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full text-left border-b border-zinc-900 py-5 flex items-start justify-between gap-4 group"
            >
              <div className="flex-1">
                <h4 className="font-medium text-zinc-200 text-sm group-hover:text-white transition-colors">
                  {item.q}
                </h4>
                {open && (
                  <p className="text-zinc-500 text-xs mt-3 font-light leading-relaxed">{item.a}</p>
                )}
              </div>
              {open ? (
                <Minus className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              ) : (
                <Plus className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
