# Prompt OpenCode (Implementação)

Você é o agente de implementação principal.

Objetivo: construir portfólio de alta conversão com base no arquivo `portfolio-prompt.md`.

## Regras rígidas
- Stack obrigatória: Next.js 14+ (App Router), Tailwind CSS, Framer Motion.
- Tema dark por padrão.
- Evitar Inter, Roboto, Arial.
- Sem formulário complexo em contato.
- Seção `Projetos` é prioridade máxima (qualidade visual e clareza de impacto).
- Não usar lorem ipsum no resultado final.
- Código pronto para deploy na Vercel.

## Escopo de entrega
Implementar/ajustar estes arquivos:
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/About.tsx`
- `components/Services.tsx`
- `components/Projects.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

Se `components/` não existir, criar.

## Conteúdo obrigatório por seção
1. Hero:
- Nome em destaque
- Tagline: "Crio sistemas, automatizo processos e entrego soluções que geram resultado."
- CTA primário WhatsApp
- CTA secundário scroll para projetos

2. Sobre:
- Máx 4 linhas
- Foco em fullstack, sistemas, SaaS, automações, experiência

3. Serviços:
- 3 cards: Sistemas Web, SaaS, Automações
- Ícone + título + descrição curta

4. Projetos (3 a 5):
- Nome
- Problema resolvido
- Stack em badges
- Resultado/impacto mensurável
- Link demo/código opcional

5. Contato:
- Título: "Tem um projeto? Vamos conversar."
- WhatsApp com mensagem pré-preenchida
- E-mail
- LinkedIn

## Qualidade de UI
- Navbar sticky com âncoras
- Scroll suave
- Mobile-first responsivo
- Animações leves (fade + slide no scroll, hover discreto em cards)
- Visual forte, sem layout genérico

## SEO
Configurar:
- Meta title: "[Nome] — Desenvolvedor Fullstack | Sistemas, SaaS e Automações"
- Meta description: "Desenvolvimento de sistemas de alta performance, SaaS e automações. Soluções sob medida para o seu negócio."
- Open Graph básico

## Processo
1. Ler estrutura atual.
2. Implementar seções/componentes.
3. Garantir build sem erro.
4. Entregar diff + checklist final:
- [ ] Todos requisitos funcionais
- [ ] Responsivo desktop/mobile
- [ ] Sem conteúdo placeholder fraco
- [ ] Pronto para Vercel
