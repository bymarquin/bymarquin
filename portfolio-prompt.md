# Portfólio — Especificação para Desenvolvimento

## Contexto
Você está desenvolvendo um portfólio profissional para um desenvolvedor fullstack especializado em sistemas de alta performance, SaaS e automações. O objetivo principal é **converter visitantes em clientes freelance**.

---

## Stack obrigatória
- **Framework**: Next.js 14+ (App Router)
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Hospedagem**: Vercel (configurar para deploy fácil)
- **Fontes**: Google Fonts (evite Inter, Roboto, Arial — escolha algo com personalidade)

---

## Estrutura de páginas

### 1. Hero Section
- Nome do dev em destaque
- Tagline curta: `"Crio sistemas, automatizo processos e entrego soluções que geram resultado."`
- Dois CTAs:
  - Primário: "Vamos conversar" → link para WhatsApp
  - Secundário: "Ver projetos" → scroll suave para a seção de projetos
- Sem parágrafos longos. Deve carregar com impacto visual imediato.

### 2. Sobre
- Máximo 4 linhas
- Conteúdo: quem é, especialidade (fullstack, sistemas, SaaS, automações), anos de experiência
- Tom direto, sem história de vida
- Opcional: foto profissional (com fallback para avatar/ícone)

### 3. Serviços
- Cards para cada serviço:
  - **Sistemas Web** — Desenvolvimento de sistemas robustos e escaláveis
  - **SaaS** — Construção de produtos SaaS do zero ao deploy
  - **Automações** — Automação de processos e integrações entre plataformas
- Cada card: ícone + título + descrição curta (2 linhas)

### 4. Projetos ← seção mais importante
- Exibir entre 3 e 5 projetos
- Layout: grid com cards ou fullwidth alternado
- Para cada projeto incluir:
  - Screenshot ou mockup (placeholder aceitável inicialmente)
  - Nome do projeto
  - Problema que resolveu (1-2 frases)
  - Stack utilizada (badges simples)
  - Resultado ou impacto (ex: "Reduziu 80% do tempo de processo manual")
  - Links opcionais: "Ver demo" / "Ver código"

### 5. Contato
- Título direto: "Tem um projeto? Vamos conversar."
- Links visíveis (não escondidos em form):
  - WhatsApp (link direto com mensagem pré-preenchida)
  - E-mail
  - LinkedIn
- Sem formulário complexo

---

## Design

### Diretrizes gerais
- Tema: **dark mode** como padrão (transmite seriedade técnica)
- Paleta: fundo escuro + cor de destaque única e forte (ex: verde elétrico, azul cobalto, ou laranja)
- Tipografia: fonte display marcante para títulos + fonte legível para corpo
- Evitar: gradientes roxos genéricos, layouts simétricos óbvios, excesso de ícones coloridos

### Princípios de UX
- Nada de splash screen ou loading inicial
- Navegação fixa no topo (sticky navbar) com links âncora
- Scroll suave entre seções
- Mobile-first e 100% responsivo
- Tempo de carregamento abaixo de 2s (otimizar imagens com next/image)

### Animações
- Entrada suave das seções ao fazer scroll (fade + slide)
- Hover nos cards de projeto com leve elevação
- Nada de animações excessivas que distraiam do conteúdo

---

## SEO básico
- Meta title: `"[Nome] — Desenvolvedor Fullstack | Sistemas, SaaS e Automações"`
- Meta description: `"Desenvolvimento de sistemas de alta performance, SaaS e automações. Soluções sob medida para o seu negócio."`
- Open Graph configurado para compartilhamento em redes sociais

---

## Estrutura de arquivos esperada

```
/app
  layout.tsx
  page.tsx
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
/public
  /images (screenshots dos projetos)
/styles
  globals.css
```

---

## O que NÃO fazer
- Não listar 30 tecnologias em ícones sem contexto
- Não colocar projetos sem descrição do problema resolvido
- Não usar animações em todo elemento da página
- Não criar formulário de contato complexo
- Não usar lorem ipsum no resultado final

---

## Entrega esperada
Código funcional, organizado e pronto para deploy na Vercel. Componentes separados por responsabilidade. Tailwind sem CSS customizado desnecessário. Comentários apenas onde a lógica não for óbvia.
