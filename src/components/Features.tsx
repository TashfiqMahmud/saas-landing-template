import React from 'react';
import { Shield, Zap, Terminal, Layers } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="relative bg-[#030303] py-24 px-4 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Engineered for High Performance
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto font-light">
                        Built for template buyers and agencies — modular sections, premium dark UI, and copy you can rebrand in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900 p-8 transition-all hover:border-purple-500/30">
                        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
                        <Terminal className="w-8 h-8 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Production-Ready Next.js Build</h3>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-md">
                            Zero configuration required. Native App Router optimization, strict TypeScript types, and seamless environment setups ready to deploy to Vercel in one click.
                        </p>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900 p-8 transition-all hover:border-cyan-500/30">
                        <Zap className="w-8 h-8 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">60 FPS Animations</h3>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed">
                            Hardware-accelerated CSS keyframes that keep browser rendering lightning fast without lag.
                        </p>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900 p-8 transition-all hover:border-emerald-500/30">
                        <Shield className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Clean Architecture</h3>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed">
                            Highly scalable file structures ensuring your clients can easily customize sections within seconds.
                        </p>
                    </div>

                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900 p-8 transition-all hover:border-pink-500/30">
                        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all" />
                        <Layers className="w-8 h-8 text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Tailwind CSS & Lucide Icons</h3>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-md">
                            Fully responsive layouts utilizing semantic utility classes. Clean typography hierarchies matched perfectly with dynamic SVG iconography.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}