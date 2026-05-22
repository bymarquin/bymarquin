"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    name: "bymarquin",
    problem: "Portfólio antigo não comunicava valor nem convertia visitantes em contato qualificado.",
    stack: ["Next.js", "React", "Tailwind CSS", "Express"],
  },
  {
    name: "qbombom",
    problem: "A operação de delivery e PDV tinha fluxo fragmentado, com risco alto de erro e retrabalho.",
    stack: ["Vue", "Express", "PostgreSQL", "Redis"],
  },
  {
    name: "sisae",
    problem: "A gestão escolar tinha rotinas administrativas dispersas e baixa visibilidade para tomada de decisão.",
    stack: ["Vue", "Express", "PostgreSQL", "Sequelize"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-zinc-100 sm:text-4xl">Projetos</h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
          Tecnologia que se pagou. Cada projeto aqui resolveu um problema real — e tem número pra provar.
        </p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ rotateX: 0.6, rotateY: -0.8, y: -3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 transition hover:border-zinc-600"
          >
            <div>
              <span className="text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-xl font-semibold text-zinc-100 sm:text-2xl">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.problem}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
