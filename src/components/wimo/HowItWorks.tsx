import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import wimoWalk from "@/assets/wimo-walk.png";

const steps = [
  {
    time: "07:30",
    title: "Bom dia com clareza",
    desc: "A rotina do dia aparece em blocos visuais, sem excesso de informação.",
    icon: "🌅",
  },
  {
    time: "10:00",
    title: "Check-in emocional",
    desc: "Um toque para registrar como você está. Sem julgamento, sem pressa.",
    icon: "💗",
  },
  {
    time: "14:00",
    title: "Lembretes gentis",
    desc: "Avisos suaves ajudam a manter o foco e reduzir a sobrecarga.",
    icon: "🔔",
  },
  {
    time: "18:00",
    title: "Rede de apoio conectada",
    desc: "Família, escola e profissionais acompanham o que importa.",
    icon: "🤝",
  },
  {
    time: "21:00",
    title: "Diário e conquistas",
    desc: "O dia termina com registros e pequenas vitórias reconhecidas.",
    icon: "🌙",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold sm:text-5xl">
            Um dia com a WIMO
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-1 rounded-full bg-wimo-lilac/50 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute top-0 bottom-0 left-6 w-1 rounded-full gradient-brand md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-8">
            {steps.map((s, i) => (
              <li key={s.time} className="relative pl-16 md:pl-0">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
                  className="absolute top-4 left-2 grid h-9 w-9 place-items-center rounded-full bg-white text-base shadow-soft md:left-1/2 md:-translate-x-1/2"
                >
                  {s.icon}
                </motion.span>

                <Reveal
                  delay={i * 0.05}
                  className={`md:w-[calc(50%-2.5rem)] ${i % 2 ? "md:ml-auto" : ""}`}
                >
                  <div className="rounded-3xl bg-wimo-blue-bg p-6 shadow-soft">
                    <span className="text-xs font-black tracking-widest text-wimo-purple">
                      {s.time}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">{s.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-3">
          <img
            src={wimoWalk}
            alt="Mascote WIMO caminhando"
            loading="lazy"
            width={912}
            height={1104}
            className="w-40 animate-float"
          />
          <p className="font-display text-lg font-bold text-wimo-blue">
            Um passo de cada vez, todos os dias.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
