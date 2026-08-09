import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/wimo/Header";
import { Hero } from "@/components/wimo/Hero";
import { WhyWimo } from "@/components/wimo/WhyWimo";
import { Solution } from "@/components/wimo/Solution";
import { Platform } from "@/components/wimo/Platform";
import { Features } from "@/components/wimo/Features";
import { HowItWorks } from "@/components/wimo/HowItWorks";
import { Impact } from "@/components/wimo/Impact";
import { FinalCTA, Footer } from "@/components/wimo/FinalCTA";

const title = "WIMO — Autonomia e rotina para pessoas neurodivergentes";
const description =
  "A WIMO é a plataforma inteligente que organiza rotinas, acompanha emoções e conecta famílias, escolas e profissionais para ampliar a autonomia de pessoas autistas e com TDAH.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <WhyWimo />
        <Solution />
        <Platform />
        <Features />
        <HowItWorks />
        <Impact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
