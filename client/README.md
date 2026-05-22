# bymarquin

Portfolio de Marcos Macedo — desenvolvedor fullstack que constrói sistemas web do zero ao deploy, sozinho.

Sem agência no meio. Sem briefing repassado. Você fala direto com quem vai escrever o código.

## Projetos em destaque

### bymarquin
O próprio portfolio. O anterior não comunicava valor nem gerava contato qualificado — então foi refeito do zero com foco em conversão: copy orientado a resultado, layout sem ruído e interações que não atrapalham.

### qbombom
Sistema de delivery e PDV para operação com alto volume. O fluxo fragmentado gerava erro, retrabalho e perda de pedido. O sistema centralizou tudo em uma interface única, com sincronização em tempo real entre frente de caixa e cozinha.

### sisae
Plataforma de gestão escolar. Rotinas administrativas espalhadas em planilhas e papéis, sem visibilidade para decisão. O sisae centralizou matrículas, frequência e relatórios — dando à gestão controle real sobre a operação da escola.

## Stack

- **Next.js 16** com App Router e TypeScript
- **Tailwind CSS v4**
- **Framer Motion** — animações de entrada e interações hover
- **Lucide React** — ícones
- **Vue / Express / PostgreSQL / Redis** — projetos qbombom e sisae

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  layout.tsx          # Fontes, metadata e layout raiz
  page.tsx            # Composição das seções
  globals.css         # Scroll suave, variáveis globais

components/
  Navbar.tsx          # Sticky com active section e menu mobile animado
  Hero.tsx            # Headline, CTAs e card de método de trabalho
  Services.tsx        # Serviço com checklist de entrada em stagger
  Projects.tsx        # Cards com hover 3D e stack de tecnologias
  About.tsx           # Apresentação direta e diferenciais
  Contact.tsx         # WhatsApp destacado, e-mail com copy e Instagram
  Footer.tsx
  Reveal.tsx          # Animação de entrada reutilizável
  CursorSpotlight.tsx # Spotlight que segue o cursor em desktop
```

## Contato

**Marcos Macedo**
WhatsApp: [+55 88 8154 6106](https://wa.me/558881546106)
E-mail: marcosmacedo784@gmail.com
Instagram: [@m4rcos_macedo](https://instagram.com/m4rcos_macedo)
