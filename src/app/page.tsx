import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import PricingAndFAQ from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <PricingAndFAQ />
      <Footer />
    </main>
  );
}
