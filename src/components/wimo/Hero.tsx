import { useEffect, useState } from "react";
import { motion } from "motion/react";
import wimoWave from "@/assets/wimo-wave.png";

const chips = [
  "Rotina organizada",
  "Emoções compreendidas",
  "Rede de apoio conectada",
  "Mais autonomia",
];

const floaties = [
  { emoji: "📅", top: "4%", left: "2%", depth: 26, delay: 0 },
  { emoji: "✅", top: "22%", left: "78%", depth: 34, delay: 0.4 },
  { emoji: "📊", top: "60%", left: "0%", depth: 22, delay: 0.8 },
  { emoji: "💜", top: "76%", left: "70%", depth: 30, delay: 1.2 },
  { emoji: "💬", top: "44%", left: "86%", depth: 18, delay: 0.6 },
  { emoji: "⭐", top: "10%", left: "58%", depth: 40, delay: 1.5 },
  { emoji: "☁️", top: "84%", left: "18%", depth: 16, delay: 0.2 },
  { emoji: "🔔", top: "34%", left: "-4%", depth: 36, delay: 1 },
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
      className="relative overflow-hidden gradient-soft pt-32 pb-20 lg:min-h-screen lg:pt-36"
    >
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-wimo-turquoise/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[26rem] w-[26rem] rounded-full bg-wimo-lilac/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-wimo-sky/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-wimo-turquoise/40 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-wimo-blue uppercase">
            <span className="h-2 w-2 rounded-full bg-wimo-turquoise" />
            Tecnologia para autonomia
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-bold text-foreground sm:text-6xl">
            Mais <span className="text-wimo-turquoise">autonomia</span> para viver cada dia.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            A WIMO conecta pessoas neurodivergentes, famílias, escolas e profissionais em uma
            plataforma inteligente para organizar rotinas, compreender emoções e fortalecer a
            independência no dia a dia.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projeto"
              className="rounded-full gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-float transition-transform duration-300 hover:scale-105"
            >
              Conhecer a WIMO
            </a>
            <a
              href="#plataforma"
              className="rounded-full border border-wimo-blue/25 bg-white px-7 py-3.5 text-sm font-bold text-wimo-blue shadow-soft transition-transform duration-300 hover:scale-105"
            >
              Explorar a plataforma
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2.5">
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

        <div className="relative mx-auto aspect-square w-full max-w-xl">
          {floaties.map((f) => (
            <motion.div
              key={f.emoji}
              className="absolute grid h-14 w-14 place-items-center rounded-3xl bg-white/85 text-2xl shadow-soft backdrop-blur-md sm:h-16 sm:w-16"
              style={{ top: f.top, left: f.left }}
              animate={{
                x: pointer.x * f.depth,
                y: pointer.y * f.depth,
              }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
            >
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + f.depth / 20, repeat: Infinity, delay: f.delay }}
              >
                {f.emoji}
              </motion.span>
            </motion.div>
          ))}

          <motion.div
            className="absolute inset-8 rounded-[3rem] bg-white/60 backdrop-blur-xl shadow-float"
            animate={{ x: pointer.x * -14, y: pointer.y * -14 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-[46%] -translate-x-[92%] -translate-y-1/2"
            animate={{ x: pointer.x * 18, y: pointer.y * 18 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <PhoneMock />
          </motion.div>

          <motion.img
            src={wimoWave}
            alt="Mascote WIMO acenando"
            width={912}
            height={1104}
            className="absolute bottom-2 left-1/2 w-[52%] -translate-x-[2%] drop-shadow-[0_24px_35px_rgba(90,70,160,0.25)]"
            animate={{
              x: pointer.x * 26,
              y: [0, -12, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
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
    <div className="rounded-[2rem] border-4 border-white bg-white p-3 shadow-float">
      <div className="rounded-[1.4rem] bg-wimo-blue-bg p-3">
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
  );
}
