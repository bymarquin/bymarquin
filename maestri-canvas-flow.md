# Fluxo Maestri (OpenCode + Claude Code)

## Ordem recomendada
1. Nó 1 (OpenCode): usar `prompt-opencode.md`
2. Nó 2 (Claude Code): usar `prompt-claude-review.md`
3. Nó 3 (OpenCode): corrigir somente bloqueios do Nó 2
4. Nó 4 (Claude Code): revisão final

## Regra de parada
- Se Nó 4 retornar `OK`, encerrar.
- Se retornar `BLOQUEIOS`, voltar ao Nó 3 com patch mínimo.

## Mensagem para Nó 3 (correção)
"Corrija somente os bloqueios listados, com mudanças mínimas e sem alterar comportamento fora do escopo. Retorne diff resumido e checklist de validação."

## Checklist humano final
- Hero comunica valor em 5 segundos
- Projetos mostram problema + impacto mensurável
- CTA WhatsApp visível acima da dobra no mobile
- Página fluida (sem animação excessiva)
- Build e deploy Vercel sem erro
