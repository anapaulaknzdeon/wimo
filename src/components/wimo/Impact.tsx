import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 1, suffix: " em 36", label: "crianças são autistas, segundo o CDC" },
  { value: 6, suffix: " milhões", label: "de pessoas com TDAH no Brasil" },
  { value: 70, suffix: "%", label: "relatam dificuldade em manter rotinas" },
  { value: 100, suffix: "%", label: "das famílias merecem apoio de verdade" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      setN(Math.round(to * Math.min(1, frame / total)));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient-brand sm:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section id="impacto" className="relative overflow-hidden bg-wimo-lilac-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-5xl">
            Impacto que vai além da tela
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">
            A WIMO nasce para reduzir barreiras invisíveis e ampliar a independência de quem pensa
            diferente.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-[2rem] bg-white p-7 text-center shadow-soft"
              >
                <Counter to={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Para a pessoa neurodivergente",
              d: "Clareza, previsibilidade e conquistas visíveis todos os dias.",
              i: "🌟",
            },
            {
              t: "Para as famílias",
              d: "Apoio informado, menos conflitos e mais tranquilidade em casa.",
              i: "🏡",
            },
            {
              t: "Para escolas e profissionais",
              d: "Dados reais do cotidiano para intervenções mais humanas.",
              i: "🎓",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="h-full rounded-[2rem] bg-white/70 p-7 backdrop-blur-md">
                <span className="text-2xl">{c.i}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
