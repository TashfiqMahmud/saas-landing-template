import React from "react";
import { Check } from "lucide-react";
import Faq from "./Faq";
import { SITE } from "../lib/site";

const licenses = [
  {
    id: "personal",
    badge: "PERSONAL",
    name: "Personal",
    price: 49,
    description: "One project for your own startup, portfolio, or side product.",
    features: [
      "Full source code download",
      "All sections & animations",
      "Lifetime updates (v1.x)",
      "Personal / non-commercial sites",
      "Documentation included",
    ],
    cta: "Get Personal",
    highlighted: false,
  },
  {
    id: "commercial",
    badge: "COMMERCIAL",
    name: "Commercial",
    price: 99,
    description: "Best for freelancers and agencies shipping client landing pages.",
    features: [
      "Everything in Personal",
      "Unlimited client projects",
      "White-label — no attribution",
      "Priority email support",
      "Figma-style customization guide",
    ],
    cta: "Get Commercial",
    highlighted: true,
  },
  {
    id: "agency",
    badge: "AGENCY",
    name: "Agency",
    price: 199,
    description: "For teams reselling the template or bundling it in productized services.",
    features: [
      "Everything in Commercial",
      "Resell as part of your offering",
      "Extended license documentation",
      "Early access to new sections",
      "Direct setup call (30 min)",
    ],
    cta: "Get Agency",
    highlighted: false,
  },
];

export default function PricingAndFAQ() {
  return (
    <section id="pricing" className="bg-[#030303] py-24 px-4 border-t border-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">
            License pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
            One-time purchase. Yours forever.
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto font-light">
            Set your own resale price on Gumroad, Lemon Squeezy, or your site — these are suggested tiers for your listing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {licenses.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between relative ${
                plan.highlighted
                  ? "border-2 border-purple-500/50 bg-zinc-950 shadow-2xl shadow-purple-500/10"
                  : "border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-colors"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-purple-600 text-[9px] uppercase tracking-wider font-bold rounded-full text-white">
                  Most popular
                </span>
              )}
              <div>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded ${
                    plan.highlighted
                      ? "bg-purple-500/10 text-purple-400"
                      : "bg-zinc-900 text-zinc-500"
                  }`}
                >
                  {plan.badge}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
                <p className="text-xs text-zinc-500 mb-6 font-light">{plan.description}</p>
                <div className="text-5xl font-bold mb-8">
                  ${plan.price}
                  <span className="text-sm font-light text-zinc-600"> once</span>
                </div>
                <ul className="space-y-4 text-xs text-zinc-400 border-t border-zinc-900/50 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 ${
                          plan.highlighted ? "text-purple-400" : "text-zinc-600"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={SITE.purchaseUrl}
                className={`w-full mt-8 py-3 rounded-xl text-xs font-medium transition-colors text-center block ${
                  plan.highlighted
                    ? "bg-purple-600 hover:bg-purple-500 text-white"
                    : plan.id === "agency"
                      ? "bg-zinc-100 text-black hover:bg-zinc-200"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <Faq />
      </div>
    </section>
  );
}
