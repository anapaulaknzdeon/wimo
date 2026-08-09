import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import wimoThink from "@/assets/wimo-think.png";

const scattered = [
  { icon: "⏰", label: "Relógio", x: "6%", y: "8%", r: -12 },
  { icon: "📅", label: "Calendário", x: "58%", y: "0%", r: 10 },
  { icon: "💬", label: "Mensagens", x: "0%", y: "48%", r: 8 },
  { icon: "📝", label: "Tarefas", x: "62%", y: "42%", r: -8 },
  { icon: "😔", label: "Emoções", x: "18%", y: "76%", r: 14 },
  { icon: "🔔", label: "Lembretes", x: "66%", y: "80%", r: -6 },
];

export function WhyWimo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const order = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const dash = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="projeto" className="relative overflow-hidden bg-wimo-lilac-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Por que a WIMO existe?</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold sm:text-5xl">
            Quando tudo fica espalhado, a rotina pode se tornar difícil.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">
            Organizar tarefas, compreender emoções, lembrar compromissos e comunicar necessidades
            pode ser um grande desafio para pessoas neurodivergentes.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="relative h-[22rem] sm:h-[26rem]">
            {scattered.map((o, i) => (
              <motion.div
                key={o.label}
                className="absolute flex items-center gap-2 rounded-3xl bg-white px-4 py-3 shadow-soft"
                style={{ left: o.x, top: o.y }}
                initial={{ rotate: o.r, opacity: 0, scale: 0.85 }}
                whileInView={{ rotate: o.r, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <span className="text-xl">{o.icon}</span>
                <span className="text-xs font-bold text-foreground/70">{o.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <svg width="120" height="220" viewBox="0 0 120 220" className="hidden lg:block">
              <motion.path
                d="M10 200 C 70 170, 20 120, 80 90 C 120 68, 50 40, 100 12"
                fill="none"
                stroke="var(--wimo-purple)"
                strokeWidth="3"
                strokeDasharray="8 10"
                strokeLinecap="round"
                style={{ pathLength: useTransform(dash, (v) => 1 - v) }}
                opacity={0.5}
              />
            </svg>
          </div>

          <div className="relative flex flex-col items-center">
            <motion.div className="relative" style={{ scale: useTransform(order, [1, 0], [0.9, 1]) }}>
              <div className="absolute inset-x-6 bottom-4 h-40 rounded-[3rem] bg-white/70 blur-xl" />
              <img
                src={wimoThink}
                alt="Mascote WIMO pensando"
                loading="lazy"
                width={912}
                height={1104}
                className="relative w-56 animate-breathe drop-shadow-[0_20px_30px_rgba(90,70,160,0.2)] sm:w-64"
              />
            </motion.div>

            <div className="mt-6 grid w-full max-w-xs gap-2">
              {["Rotina do dia", "Check-in emocional", "Rede de apoio"].map((t, i) => (
                <motion.div
                  key={t}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                >
                  <span className="h-8 w-1.5 rounded-full gradient-fresh" />
                  <span className="text-sm font-bold text-foreground/75">{t}</span>
                  <span className="ml-auto text-wimo-turquoise">✓</span>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-center font-display text-lg font-bold text-wimo-purple">
              A WIMO transforma confusão em clareza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
