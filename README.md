<p>
<picture>
  <source media="(max-width: 600px)" srcset="assets/profile-mobile.svg" />
  <img src="assets/profile.svg" width="100%" alt="Marcos Macedo, desenvolvedor Full Stack. Demonstração animada de qrSvg, da minha biblioteca pix-brcode. O QR Code abre o projeto." />
</picture>
</p>

Desenvolvo aplicações web, APIs e automações com **Node.js, Vue e TypeScript**. Estudo Análise e Desenvolvimento de Sistemas e sou de Araripe, no Ceará.

[LinkedIn](https://www.linkedin.com/in/antonio-marcos-9305bb2b4/) · [Pacotes no npm](https://www.npmjs.com/~m4rquin) · [Repositórios](https://github.com/marcedoafk?tab=repositories)

## pix-brcode

Biblioteca TypeScript para **gerar, ler e validar Pix copia-e-cola**, com geração de QR Code em SVG. Funciona em Node.js e no navegador, sem dependências.

```sh
npm install @m4rquin/pix-brcode
```

<details>
<summary>Explore a API</summary>

```ts
import { qrSvg } from '@m4rquin/pix-brcode';

const url = 'https://github.com/marcedoafk/pix-brcode';
const svg = qrSvg(url);
```

O QR Code da abertura foi gerado com essa função e aponta para o repositório.

| Função | O que faz |
| :--- | :--- |
| `generate` | Cria o Pix copia-e-cola. |
| `parse` | Lê os campos do código. |
| `validate` | Verifica o CRC. |
| `qrSvg` | Gera um QR Code em SVG. |

</details>

[Abrir o código](https://github.com/marcedoafk/pix-brcode) · [Ver o pacote no npm](https://www.npmjs.com/package/@m4rquin/pix-brcode)

## Tecnologias

- **Aplicações web** — Vue, JavaScript e TypeScript.
- **APIs e integrações** — Node.js, Fastify e Express.
- **Infraestrutura** — Docker, Linux e Nginx.
