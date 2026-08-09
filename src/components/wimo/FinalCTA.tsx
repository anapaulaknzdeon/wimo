import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import wimoCelebrate from "@/assets/wimo-celebrate.png";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative overflow-hidden gradient-soft py-24 md:py-32">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-wimo-turquoise/25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <img
            src={wimoCelebrate}
            alt="Mascote WIMO comemorando"
            loading="lazy"
            width={912}
            height={1104}
            className="mx-auto w-40 animate-float sm:w-48"
          />
          <h2 className="mt-6 font-display text-3xl leading-tight font-bold sm:text-5xl">
            A WIMO está chegando para transformar rotinas em{" "}
            <span className="text-gradient-brand">autonomia</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            Cadastre-se para receber novidades, participar dos testes e ajudar a construir uma
            plataforma feita com e para pessoas neurodivergentes.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mx-auto mt-9 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Seu e-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full rounded-full border border-wimo-lilac/60 bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft outline-none transition-shadow focus:ring-4 focus:ring-wimo-turquoise/30"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full gradient-brand px-8 py-3.5 text-sm font-bold whitespace-nowrap text-white shadow-float"
            >
              {sent ? "Recebido! 💜" : "Quero participar"}
            </motion.button>
          </form>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm font-semibold text-wimo-purple"
            >
              Obrigado! Em breve entraremos em contato.
            </motion.p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-fresh text-sm font-black text-white">
              W
            </span>
            <span className="font-display text-2xl font-bold text-wimo-blue">WIMO</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/55">
            Tecnologia com propósito para pessoas neurodivergentes, famílias, escolas e
            profissionais.
          </p>
        </div>

        <nav className="grid gap-2 text-sm font-semibold text-foreground/60">
          <span className="font-display text-sm font-bold text-foreground">Navegação</span>
          <a href="#projeto" className="transition-colors hover:text-wimo-purple">
            O projeto
          </a>
          <a href="#plataforma" className="transition-colors hover:text-wimo-purple">
            Plataforma
          </a>
          <a href="#funcionalidades" className="transition-colors hover:text-wimo-purple">
            Funcionalidades
          </a>
          <a href="#impacto" className="transition-colors hover:text-wimo-purple">
            Impacto
          </a>
        </nav>

        <div className="text-sm text-foreground/60">
          <span className="font-display text-sm font-bold text-foreground">Contato</span>
          <p className="mt-2">contato@wimo.app</p>
          <p className="mt-4 text-xs text-foreground/45">
            © {new Date().getFullYear()} WIMO. Feito com 💜 para quem pensa diferente.
          </p>
        </div>
      </div>
    </footer>
  );
}
