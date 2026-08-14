import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Projeto", href: "#projeto" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Impacto", href: "#impacto" },
];

function Logo() {
  return (
    <a href="#topo" className="flex items-center font-display text-2xl font-bold tracking-tight">
      <span className="text-wimo-blue">W</span>
      <span className="text-wimo-purple">I</span>
      <span className="text-wimo-blue">M</span>
      <span className="text-wimo-purple">O</span>
    </a>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-18px_rgba(80,60,160,0.55)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center px-5 md:px-8">
        <Logo />

        <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-foreground/70 transition-colors hover:text-wimo-purple"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
          <a
            href="#plataforma"
            className="group inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-2.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
          >
            Conheça a WIMO
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-2xl border border-wimo-lilac/60 lg:hidden"
        >
          <span className="space-y-1">
            <span className="block h-0.5 w-5 rounded-full bg-wimo-purple" />
            <span className="block h-0.5 w-5 rounded-full bg-wimo-blue" />
            <span className="block h-0.5 w-5 rounded-full bg-wimo-turquoise" />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-wimo-lilac/40 bg-white px-5 py-4 lg:hidden">
          <ul className="grid gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-foreground/75"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#plataforma"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-center text-sm font-bold text-white"
              >
                Conheça a WIMO
                <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
