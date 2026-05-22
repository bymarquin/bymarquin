import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Sobre</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          <p>Sou Marcos Macedo. Escrevo código, mas o que me interessa é o que acontece quando o sistema entra no ar.</p>
          <p>Trabalho sozinho, do zero ao ar: arquitetura, código, integração e deploy. Você fala direto comigo — sem repasse pra um time que não entendeu o briefing.</p>
          <p>Já substituí planilha crítica por sistema, centralizei operação que rodava em quatro ferramentas diferentes e entrei em projetos que estavam travados e saí com eles no ar.</p>
        </div>
      </Reveal>
    </section>
  );
}
