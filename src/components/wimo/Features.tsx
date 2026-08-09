import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import wimoCelebrate from "@/assets/wimo-celebrate.png";

const features = [
  {
    title: "Diário inteligente",
    desc: "Registre emoções, conquistas, dificuldades e momentos importantes.",
    icon: "📔",
    accent: "bg-wimo-pink",
  },
  {
    title: "Organização",
    desc: "Agendas, tarefas, cronogramas visuais e lembretes para o dia a dia.",
    icon: "📅",
    accent: "bg-wimo-sky",
  },
  {
    title: "Regulação emocional",
    desc: "Check-ins emocionais, monitoramento de humor e acompanhamento de sobrecarga.",
    icon: "💗",
    accent: "bg-wimo-lilac",
  },
  {
    title: "Comunicação",
    desc: "Conecte-se com família, escola e profissionais em um ambiente seguro.",
    icon: "💬",
    accent: "bg-wimo-turquoise/40",
  },
  {
    title: "Plano de crise",
    desc: "Registre gatilhos, intensidade e estratégias que realmente funcionam.",
    icon: "🛡️",
    accent: "bg-wimo-purple/25",
  },
  {
    title: "Desenvolvimento da autonomia",
    desc: "Metas, habilidades e pequenas conquistas para construir independência.",
    icon: "",
    accent: "bg-wimo-yellow/60",
    mascot: true,
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="relative bg-wimo-lilac-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-5xl">
            Tudo o que você precisa, <span className="text-wimo-purple">em um só lugar.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group h-full rounded-[2rem] bg-white p-7 shadow-soft"
              >
                <div
                  className={`grid h-16 w-16 place-items-center rounded-3xl ${f.accent} text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {f.mascot ? (
                    <img
                      src={wimoCelebrate}
                      alt="Mascote WIMO comemorando"
                      loading="lazy"
                      width={912}
                      height={1104}
                      className="w-12"
                    />
                  ) : (
                    f.icon
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{f.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
