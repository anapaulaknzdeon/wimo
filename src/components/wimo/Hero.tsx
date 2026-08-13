import { useEffect, useState } from "react";
import { motion } from "motion/react";
import wimoWave from "@/assets/wimo-wave.png";

const chips = [
  "Rotina organizada",
  "Emoções compreendidas",
  "Rede de apoio conectada",
  "Mais autonomia",
];

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="topo"
      className="relative overflow-hidden gradient-soft pt-32 pb-24 lg:min-h-screen lg:pt-40"
    >
      <div className="pointer-events-none absolute -top-48 -left-40 h-[32rem] w-[32rem] rounded-full bg-wimo-blue/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-wimo-purple/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-wimo-turquoise/15 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-2 shadow-soft backdrop-blur-md">
            <motion.span
              className="h-2 w-2 rounded-full bg-wimo-turquoise"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[11px] font-bold tracking-[0.18em] text-wimo-blue uppercase">
              Tecnologia para autonomia
            </span>
          </span>

          <h1 className="mt-7 font-display text-[2.8rem] leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
            Mais{" "}
            <span className="bg-gradient-to-r from-wimo-blue via-wimo-purple to-wimo-turquoise bg-clip-text text-transparent">
              autonomia
            </span>{" "}
            para viver cada dia.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-foreground/65 sm:text-lg">
            A WIMO conecta pessoas neurodivergentes, famílias, escolas e profissionais em uma
            plataforma inteligente para organizar rotinas, compreender emoções e fortalecer a
            independência no dia a dia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projeto"
              className="rounded-[2rem] gradient-brand px-9 py-4 font-display text-base font-bold text-white shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--wimo-blue)_60%,transparent)] transition-all duration-300 hover:-translate-y-1"
            >
              Conhecer a WIMO
            </a>
            <a
              href="#plataforma"
              className="rounded-[2rem] border-2 border-border bg-white px-9 py-4 font-display text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-wimo-blue"
            >
              Explorar a plataforma
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {chips.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-full px-4 py-2 text-xs font-semibold text-foreground/70"
              >
                {c}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-10 lg:py-0">
          {/* anéis decorativos */}
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-wimo-blue/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-wimo-purple/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          />

          {/* celular */}
          <motion.div
            className="relative z-10 translate-x-6 sm:translate-x-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ x: pointer.x * -16, y: pointer.y * -16 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <PhoneMock />
            </motion.div>

            {/* cards de vidro */}
            <motion.div
              className="absolute -top-6 -right-8 z-20 rounded-3xl border border-white bg-white/85 px-4 py-3 shadow-float backdrop-blur-xl sm:-right-14"
              animate={{ x: pointer.x * 30, y: [0, -10, 0] }}
              transition={{
                x: { type: "spring", stiffness: 50, damping: 20 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-wimo-turquoise/20 text-lg">
                  ✅
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-foreground/45 uppercase">
                    Rotina do dia
                  </p>
                  <p className="font-display text-sm font-bold text-foreground">
                    3 de 5 concluídas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 -right-6 z-20 rounded-3xl border border-white bg-white/85 px-4 py-3 shadow-float backdrop-blur-xl sm:-right-12"
              animate={{ x: pointer.x * 22, y: [0, -12, 0] }}
              transition={{
                x: { type: "spring", stiffness: 50, damping: 20 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-wimo-purple/20 text-lg">
                  ⭐
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-foreground/45 uppercase">
                    Conquista
                  </p>
                  <p className="font-display text-sm font-bold text-foreground">Nível 5</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* mascote — protagonista */}
          <motion.img
            src={wimoWave}
            alt="Mascote WIMO acenando"
            width={912}
            height={1104}
            className="absolute bottom-0 -left-2 z-30 w-[54%] max-w-[19rem] drop-shadow-[0_28px_45px_color-mix(in_oklab,var(--wimo-purple)_30%,transparent)] sm:-left-6"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: pointer.x * 26,
              y: [0, -14, 0],
              rotate: [0, 1.8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3 },
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="w-56 rounded-[2.6rem] border-4 border-border bg-foreground p-2.5 shadow-float sm:w-64">
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-3">
        <div className="absolute top-0 left-1/2 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-foreground" />
        <div className="mt-5 rounded-[1.4rem] bg-wimo-blue-bg p-3">
          <p className="font-display text-xs font-bold text-wimo-blue">Bom dia! 👋</p>
          <p className="mt-0.5 text-[10px] text-foreground/55">Como você está hoje?</p>
          <div className="mt-2 flex justify-between text-sm">
            {["😊", "🙂", "😐", "😔", "😣"].map((e) => (
              <span key={e} className="grid h-6 w-6 place-items-center rounded-full bg-white">
                {e}
              </span>
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            {["Tomar café", "Aula de arte", "Diário do dia"].map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-xl bg-white px-2 py-1.5 text-[10px] font-semibold text-foreground/70"
              >
                <span
                  className={`h-3 w-3 rounded-md ${i === 0 ? "bg-wimo-turquoise" : "bg-wimo-lilac"}`}
                />
                {t}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-end gap-1 rounded-xl bg-white p-2">
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <span
                key={i}
                className="w-full rounded-t-md gradient-fresh"
                style={{ height: `${h * 0.28}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
