import React from "react";
import { Code2, Layers, Smartphone, Zap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Next.js 15 App Router", value: "TypeScript" },
  { icon: Zap, label: "CSS animations", value: "60 FPS" },
  { icon: Smartphone, label: "Breakpoints", value: "Fully responsive" },
  { icon: Layers, label: "Sections included", value: "6+" },
];

export default function Stats() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950/40 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="text-center md:text-left">
            <Icon className="w-5 h-5 text-purple-400 mx-auto md:mx-0 mb-3" />
            <p className="text-lg font-semibold text-white">{value}</p>
            <p className="text-xs text-zinc-500 mt-1 font-light">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
