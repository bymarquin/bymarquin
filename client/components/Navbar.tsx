"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [active, setActive] = useState("servicos");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-display text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
            Marcos Macedo
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <ul className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    className={`relative transition hover:text-zinc-100 ${active === link.id ? "text-zinc-100" : ""}`}
                    href={`#${link.id}`}
                  >
                    {link.label}
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 h-px w-full bg-zinc-200"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 px-4 text-xs font-semibold text-zinc-900 transition hover:bg-white"
            >
              Falar comigo
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100 sm:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-zinc-800 bg-zinc-950/98 px-4 py-4 sm:hidden"
          >
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                      active === link.id
                        ? "bg-zinc-800 text-zinc-100"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
