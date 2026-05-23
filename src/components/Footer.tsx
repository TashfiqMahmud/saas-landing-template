import React from "react";
import { Cpu } from "lucide-react";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#030303] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Cpu className="w-5 h-5 text-purple-500" />
          <span>{SITE.name}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            Showcase
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>
        <p className="text-xs text-zinc-600 text-center md:text-right">
          © {SITE.year} {SITE.name}. Premium template — all rights reserved.
        </p>
      </div>
    </footer>
  );
}
