"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  const phone = "558881546106";
  const whatsappMessage = encodeURIComponent("Olá, Marcos! Vi seu portfólio e quero conversar sobre um projeto.");

  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-end lg:px-8 lg:py-28">
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">Desenvolvedor Fullstack</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.04] text-zinc-100 sm:text-5xl lg:text-6xl">
              Você não precisa de mais software. Precisa de um sistema feito pro seu negócio.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Trabalho do levantamento ao deploy, sozinho. Sem agência no meio e sem orçamento que cresce depois que você aprovou.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-white"
            >
              Falar sobre meu projeto
              <ArrowUpRight size={15} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              href="#projetos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              Ver casos reais
              <ArrowRight size={15} />
            </motion.a>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <motion.aside
            whileHover={{ y: -3 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Resultados entregues</p>
            <ul className="mt-4 space-y-4">
              <li className="border-b border-zinc-800 pb-4">
                <p className="font-display text-3xl font-semibold text-zinc-100">45%</p>
                <p className="mt-1 text-xs text-zinc-400">menos erros operacionais em produção</p>
              </li>
              <li className="border-b border-zinc-800 pb-4">
                <p className="font-display text-3xl font-semibold text-zinc-100">32%</p>
                <p className="mt-1 text-xs text-zinc-400">menos tempo médio de atendimento</p>
              </li>
              <li>
                <p className="font-display text-3xl font-semibold text-zinc-100">0</p>
                <p className="mt-1 text-xs text-zinc-400">sistemas entregues fora do prazo</p>
              </li>
            </ul>
          </motion.aside>
        </Reveal>
      </div>
    </section>
  );
}
