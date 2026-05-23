"use client";

import React, { useState } from "react";
import { ArrowUpRight, Cpu, Menu, X } from "lucide-react";
import { SITE } from "../lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-white tracking-tight">
          <Cpu className="w-5 h-5 text-purple-500" />
          <span>{SITE.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE.purchaseUrl}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-medium text-white transition-all active:scale-95"
          >
            Buy template
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-900 mt-4 pt-4 pb-2 flex flex-col gap-3 text-sm text-zinc-400">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.purchaseUrl}
            className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-purple-600 text-white font-medium"
            onClick={() => setOpen(false)}
          >
            Buy template
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
}
