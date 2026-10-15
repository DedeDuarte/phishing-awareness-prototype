# Instruções para agentes de código

Este repositório é um **protótipo acadêmico de média fidelidade** de um site institucional para conscientização contra phishing.

- **Leia `SPEC.md` antes de implementar ou modificar funcionalidades.** Em caso de conflito, priorize a especificação; explique qualquer incompatibilidade técnica.
- Stack planejada: React, TypeScript, Vite, Tailwind, React Router, Lucide, Recharts. Não adicionar backend sem pedido explícito.
- **Marca deve ser configurável exclusivamente em `src/config/brand.ts`**. O logo não deve conter o nome escrito em imagem/SVG estático.
- Integrantes são mantidos em `src/data/team.ts`; fotos locais em `public/team/`; a página acadêmica pode ser desativada pela configuração. Nunca invente nomes, RAs ou fotos reais.
- Não implementar phishing real, envio de mensagens, captura de credenciais, analytics invasivo, armazenamento de dados pessoais ou APIs externas. Os dados são demonstrativos, identificados como fictícios.
- As oito rotas e seus fluxos estão definidos no `SPEC.md`. Preferir componentes reutilizáveis, código legível, sem abstrações desnecessárias.
- Manter português brasileiro nos textos visíveis, contraste acessível, design responsivo e navegação por teclado.
- Após alterações significativas, executar build e corrigir erros. Relatar testes realizados, não presumidos.
- Privacidade: RA e foto são dados pessoais; em publicação comercial, excluir esses dados do build e não apenas ocultar a rota da equipe.
