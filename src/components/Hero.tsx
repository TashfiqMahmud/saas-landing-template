import React from "react";
import { ArrowUpRight, Bot, Sparkles, Cpu } from "lucide-react";
import { SITE } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden px-4 pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[480px] h-[280px] md:h-[480px] pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-cyan-500/30 blur-3xl animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-16 rounded-full border border-cyan-500/15 animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400 opacity-80 shadow-[0_0_80px_rgba(124,42,237,0.5)] animate-[bounce_8s_ease-in-out_infinite]" />
        </div>
      </div>

      <div className="absolute top-32 left-10 md:left-32 animate-[bounce_5s_infinite] bg-gradient-to-br from-purple-500/10 to-transparent p-3 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
        <Bot className="w-6 h-6 text-purple-400" />
      </div>
      <div className="absolute bottom-32 left-16 md:left-40 animate-[bounce_6s_infinite] bg-gradient-to-br from-cyan-500/10 to-transparent p-3 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
        <Cpu className="w-6 h-6 text-cyan-400" />
      </div>

      <div className="relative z-10 max-w-4xl text-center mx-auto mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Premium template · Ship in hours, not weeks</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Launch your AI SaaS <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            with a premium landing page.
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {SITE.tagline}. Next.js, Tailwind, and antigravity animations — ready to rebrand, deploy, or resell to your clients.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.purchaseUrl}
            className="group relative px-6 py-3 rounded-xl bg-white text-black font-medium text-sm flex items-center gap-2 transition-all hover:bg-zinc-200 active:scale-95 shadow-lg shadow-white/5"
          >
            View licenses
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#showcase"
            className="px-6 py-3 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 text-sm font-medium transition-all hover:bg-zinc-800 hover:text-white active:scale-95"
          >
            See what&apos;s included
          </a>
        </div>
      </div>
    </section>
  );
}
