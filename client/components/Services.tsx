"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const includes = [
  "Frontend e interface do usuário",
  "Backend e lógica de negócio",
  "Banco de dados e modelagem",
  "APIs e integrações com terceiros",
  "Deploy e infraestrutura",
  "Manutenção pós-entrega",
];

export default function Services() {
  return (
    <section id="servicos" className="border-y border-zinc-800 bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-zinc-100 sm:text-4xl">Serviço</h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-semibold text-zinc-100">Sistemas Web</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                Quando planilha já travou uma vez e você não quer arriscar de novo. Sistemas feitos pra sua operação — que crescem com ela e não caem na hora que mais importa.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Trabalho do zero ao ar, sozinho. Você não fala com vendedor nem com gerente de projeto — fala comigo, que vou escrever o código e entregar o sistema.
              </p>
            </div>

            <div className="my-8 border-t border-zinc-800 lg:my-0 lg:border-l" />

            <div className="lg:pl-8">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">O que está incluído</p>
              <ul className="mt-4 space-y-2">
                {includes.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.08 + index * 0.06 }}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                      <Check size={11} strokeWidth={2.5} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
