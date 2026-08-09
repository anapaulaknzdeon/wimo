import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import wimoPhone from "@/assets/wimo-phone.png";

const sidebar = ["Início", "Diário", "Agenda", "Emoções", "Rede de Apoio", "Relatórios"];
const moods = [
  { e: "😊", l: "Feliz" },
  { e: "🙂", l: "Bem" },
  { e: "😐", l: "Neutro" },
  { e: "😔", l: "Cansado" },
  { e: "😣", l: "Sobrecarregado" },
];

export function Platform() {
  return (
    <section id="plataforma" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-96 max-w-4xl rounded-full bg-wimo-sky/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Conheça a plataforma</SectionLabel>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold sm:text-5xl">
            Feita para o seu dia, <span className="text-wimo-turquoise">no seu ritmo.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16" style={{ perspective: "1600px" }}>
          <motion.div
            initial={{ opacity: 0, rotateX: 18, y: 60 }}
            whileInView={{ opacity: 1, rotateX: 6, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-wimo-lilac/40 bg-white shadow-float"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr]">
              <aside className="hidden flex-col gap-1 border-r border-wimo-lilac/30 bg-wimo-lilac-bg p-5 sm:flex">
                <span className="mb-4 font-display text-lg font-bold text-wimo-blue">WIMO</span>
                {sidebar.map((s, i) => (
                  <span
                    key={s}
                    className={`rounded-2xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                      i === 0
                        ? "bg-white text-wimo-purple shadow-soft"
                        : "text-foreground/60 hover:bg-white/70"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </aside>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">Bom dia! 👋</h3>
                    <p className="text-sm text-foreground/60">Como você está hoje?</p>
                  </div>
                  <img
                    src={wimoPhone}
                    alt="Mascote WIMO com o celular"
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="w-20 animate-breathe"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {moods.map((m, i) => (
                    <motion.button
                      key={m.l}
                      whileHover={{ scale: 1.06, y: -3 }}
                      className={`flex items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-bold ${
                        i === 1
                          ? "border-wimo-turquoise/60 bg-wimo-turquoise/15 text-foreground"
                          : "border-wimo-lilac/40 bg-white text-foreground/65"
                      }`}
                    >
                      <span className="text-base">{m.e}</span>
                      {m.l}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Panel title="Tarefas de hoje">
                    <ul className="space-y-2">
                      {[
                        ["Café da manhã", true],
                        ["Aula de arte", true],
                        ["Terapia às 16h", false],
                        ["Diário do dia", false],
                      ].map(([t, done]) => (
                        <li
                          key={t as string}
                          className="flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-foreground/70"
                        >
                          <span
                            className={`grid h-4 w-4 place-items-center rounded-md text-[9px] text-white ${
                              done ? "bg-wimo-turquoise" : "bg-wimo-lilac"
                            }`}
                          >
                            {done ? "✓" : ""}
                          </span>
                          {t as string}
                        </li>
                      ))}
                    </ul>
                  </Panel>

                  <Panel title="Gráfico de humor">
                    <div className="flex h-28 items-end gap-2">
                      {[45, 70, 55, 85, 60, 92, 78].map((h, i) => (
                        <motion.span
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07, duration: 0.6 }}
                          className="w-full rounded-t-xl gradient-fresh"
                        />
                      ))}
                    </div>
                  </Panel>

                  <Panel title="Progresso semanal">
                    <div className="space-y-3">
                      {[
                        ["Rotina", 82],
                        ["Emoções", 64],
                        ["Autonomia", 71],
                      ].map(([l, v]) => (
                        <div key={l as string}>
                          <div className="flex justify-between text-[11px] font-bold text-foreground/60">
                            <span>{l as string}</span>
                            <span>{v as number}%</span>
                          </div>
                          <div className="mt-1 h-2.5 rounded-full bg-white">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${v as number}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9 }}
                              className="h-full rounded-full gradient-brand"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>

                  <Panel title="Conquistas">
                    <div className="flex flex-wrap gap-2">
                      {["🌟 7 dias de diário", "🏅 Rotina cumprida", "💬 Pedi ajuda"].map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-white px-3 py-2 text-[11px] font-bold text-foreground/70 shadow-soft"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </Panel>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-wimo-blue-bg p-4">
      <p className="mb-3 font-display text-sm font-bold text-foreground/80">{title}</p>
      {children}
    </div>
  );
}
