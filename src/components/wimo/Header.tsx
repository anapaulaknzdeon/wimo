import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Projeto", href: "#projeto" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Impacto", href: "#impacto" },
];

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
      className={`fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-18px_rgba(80,60,160,0.55)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#topo" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-fresh text-sm font-black text-white">
            W
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-wimo-blue">WIMO</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
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

        <div className="flex items-center gap-2">
          <a
            href="#plataforma"
            className="hidden rounded-full gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-transform duration-300 hover:scale-105 sm:inline-block"
          >
            Conheça a WIMO
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-wimo-lilac/60 lg:hidden"
          >
            <span className="space-y-1">
              <span className="block h-0.5 w-5 rounded-full bg-wimo-purple" />
              <span className="block h-0.5 w-5 rounded-full bg-wimo-blue" />
              <span className="block h-0.5 w-5 rounded-full bg-wimo-turquoise" />
            </span>
          </button>
        </div>
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
                className="mt-1 block rounded-full gradient-brand px-5 py-2.5 text-center text-sm font-bold text-white"
              >
                Conheça a WIMO
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
