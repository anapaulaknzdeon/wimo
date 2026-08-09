import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import wimoPoint from "@/assets/wimo-point.png";

const nodes = [
  {
    label: "Família",
    icon: "🏠",
    desc: "Acompanha a rotina e apoia sem invadir o espaço.",
    pos: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    label: "Escola",
    icon: "🎒",
    desc: "Compreende necessidades e ajusta o cotidiano escolar.",
    pos: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    label: "Terapeutas",
    icon: "🧩",
    desc: "Recebe registros reais entre uma sessão e outra.",
    pos: "left-1/2 bottom-0 -translate-x-1/2",
  },
  {
    label: "Profissionais",
    icon: "🤝",
    desc: "Colabora com estratégias que já funcionam.",
    pos: "left-0 top-1/2 -translate-y-1/2",
  },
];

export function Solution() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-5xl">
            Uma plataforma. Uma rede.{" "}
            <span className="text-gradient-brand">Mais autonomia.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">
            A WIMO reúne organização, acompanhamento emocional, comunicação e desenvolvimento da
            autonomia em um único ambiente.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-20 aspect-square w-full max-w-2xl">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              {[
                { d: "M200 60 C 240 110, 240 150, 200 175", c: "var(--wimo-blue)", k: "Família" },
                {
                  d: "M340 200 C 290 230, 250 215, 225 200",
                  c: "var(--wimo-turquoise)",
                  k: "Escola",
                },
                {
                  d: "M200 340 C 160 290, 160 250, 200 225",
                  c: "var(--wimo-purple)",
                  k: "Terapeutas",
                },
                {
                  d: "M60 200 C 110 170, 150 185, 175 200",
                  c: "var(--wimo-blue-soft)",
                  k: "Profissionais",
                },
              ].map((p) => (
                <motion.path
                  key={p.k}
                  d={p.d}
                  fill="none"
                  stroke={p.c}
                  strokeWidth={active === p.k ? 6 : 3}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: active && active !== p.k ? 0.25 : 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              ))}
            </svg>

            <div className="absolute top-1/2 left-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-float sm:h-48 sm:w-48">
              <div className="absolute inset-0 rounded-full gradient-fresh opacity-15" />
              <img
                src={wimoPoint}
                alt="Mascote WIMO apontando para a plataforma"
                loading="lazy"
                width={912}
                height={1104}
                className="relative w-28 animate-breathe sm:w-32"
              />
            </div>

            {nodes.map((n) => (
              <motion.button
                key={n.label}
                onMouseEnter={() => setActive(n.label)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(n.label)}
                onBlur={() => setActive(null)}
                className={`absolute ${n.pos} w-36 rounded-3xl bg-white px-4 py-3 text-left shadow-soft transition-all duration-300 sm:w-44`}
                animate={{
                  scale: active === n.label ? 1.08 : 1,
                  opacity: active && active !== n.label ? 0.55 : 1,
                }}
              >
                <span className="text-xl">{n.icon}</span>
                <p className="mt-1 font-display text-sm font-bold text-foreground">{n.label}</p>
                <motion.p
                  className="overflow-hidden text-[11px] leading-snug text-foreground/60"
                  animate={{ height: active === n.label ? "auto" : 0, opacity: active === n.label ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {n.desc}
                </motion.p>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
