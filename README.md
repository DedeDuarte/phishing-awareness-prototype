# Protótipo de conscientização contra phishing

Frontend acadêmico de média fidelidade para Projetos Empreendedores. Empresa e serviço fictícios: não envia mensagens, executa campanhas, coleta credenciais ou armazena dados pessoais. Relatórios, cursos e cenários são demonstrativos.

## Executar

Use Node.js 22.12+ (ou LTS compatível com Vite 8) e npm.

```sh
npm install
npm run dev
```

Acesse o endereço local indicado pelo Vite.

```sh
npm run build   # TypeScript e build em dist/
npm run lint    # ESLint
npm run preview # Conferir o build localmente
```

React 19, TypeScript, Vite 8, Tailwind CSS 4 com `@tailwindcss/vite`, React Router 7, Lucide e Recharts 3. Inter e Manrope incluídas no build por Fontsource, sem dependência de CDN em execução. O lockfile registra as versões instaladas.

## Rotas

| Rota             | Página                                |
| ---------------- | ------------------------------------- |
| `/`              | Início                                |
| `/solucao`       | Nossa solução                         |
| `/simulacoes`    | Abas de e-mail, SMS e WhatsApp        |
| `/como-funciona` | Seletor de quatro etapas              |
| `/resultados`    | Relatório com filtros de departamento |
| `/treinamentos`  | Cursos e detalhes contextuais         |
| `/contato`       | Validação e sucesso simulado          |
| `/equipe`        | Equipe acadêmica opcional             |

Endereços desconhecidos mostram uma página 404 com retorno à Home. Nas abas, use Tab, setas esquerda/direita e Home/End. Links e botões aceitam teclado.

## Personalizar

- **Marca:** `src/config/brand.ts` centraliza nome, slogan, descrição, categoria e `showTeamPage`. Alterar `name` atualiza logo, textos e título do documento. Símbolo do logo independente do nome. `contactEmail` é apenas placeholder, não apresentado como contato real.
- **Estilos:** `src/styles/globals.css` contém tokens aprovados, fontes e breakpoints.
- **Temas:** o botão de sol/lua no cabeçalho alterna entre claro (padrão) e escuro, inclusive no mobile. Os tokens semânticos ficam em `:root` e `:root[data-theme="dark"]`; os gráficos usam as mesmas variáveis. `src/hooks/useTheme.ts` compartilha o estado e salva apenas a preferência `theme` no `localStorage`, com sincronização entre abas. O script inicial em `index.html` aplica a preferência antes da renderização para evitar flashes. Se o armazenamento estiver indisponível, a alternância continua funcionando durante a navegação.
- **Integrantes e RAs:** editar os seis objetos em `src/data/team.ts`. Nenhum dado pessoal real é incluído por padrão.
- **Fotos:** colocar arquivos locais em `public/team/`. Exemplo: `/team/integrante-01.webp`. Fotos ausentes ou com erro têm avatar genérico.
- **Dados fictícios:** `src/data/mockData.ts` contém cenários, cursos e métricas tipadas com IDs estáveis. Totais e taxas gerais são derivados dos departamentos; evolução geral ponderada pelo número de participantes. Risco ilustrativo: até 10% de cliques, baixo; acima de 10% até 20%, moderado; acima de 20%, elevado.
- **Páginas:** arquivos separados em `src/pages/`; componentes compartilhados em `src/components/`.

Exemplo para a equipe preencher somente com autorização da pessoa:

```ts
{
  id: 'integrante-1',
  name: 'Nome do integrante',
  ra: 'RA autorizado',
  photo: '/team/integrante-01.webp',
  role: 'Função no projeto', // opcional
}
```

Rota `/equipe` e link no rodapé dependem de `showTeamPage: true`. **Desativar a flag não exclui os dados do bundle. Antes de uma publicação comercial, remover importação/arquivo da equipe, dados e fotos do build e verificar os artefatos de `dist/`.** Solicitar consentimento para publicar RAs e fotos; preferir repositório privado para a versão acadêmica.

## Demonstrar

1. Apresente Home e Solução.
2. Alterne abas em Simulações e etapas de Como Funciona.
3. Em Resultados, filtre Financeiro e consulte os números fictícios.
4. Clique em “Ver treinamento recomendado”: `/treinamentos?curso=boletos` seleciona cobranças falsas. Outros IDs: `engenharia-social`, `links-suspeitos`, `protecao-dados`. ID inválido exibe aviso e o primeiro curso.
5. No Contato, teste erros e preencha valores fictícios para mostrar o sucesso. Nada é enviado ou persistido; campos são limpos ao concluir.
6. Apresente os seis placeholders em Equipe.

## Deploy estático

Execute `npm run build` e publique **somente `dist/`** em hospedagem estática com fallback de SPA. Rotas sem arquivo correspondente precisam servir `/index.html` com status 200 para permitir acesso direto a `/resultados`, por exemplo.

Em Netlify ou Cloudflare Pages: build `npm run build`, saída `dist` e regra em `public/_redirects`, copiada pelo Vite. Em Nginx: `try_files $uri $uri/ /index.html;`. Em Vercel: configure rewrite para `/index.html` preservando assets existentes. GitHub Pages não oferece fallback SPA automaticamente. Para subdiretório, ajuste `base` no Vite e `basename` no BrowserRouter em conjunto.

Sem backend, segredos, integrações ou serviços a provisionar. Este repositório não publica automaticamente o protótipo.

## Verificações realizadas nesta implementação

- `npm run build`, `npm run lint` e `git diff --check`: concluídos sem erros.
- Chrome headless com Playwright: oito rotas e 404 em 1440, 768, 375 e 360 px, sem overflow horizontal ou erros JavaScript.
- Inspeção visual das capturas de Home, Resultados e Equipe em desktop e mobile.
- Abas por clique e teclado, quatro etapas, quatro filtros e seus links de treinamento, query inválida, validação e sucesso do formulário, limpeza dos campos, menu móvel e seis avatares de fallback.
- Troca temporária de marca/slogan, desativação da equipe e edição de nome/RA/foto, incluindo imagem com erro; configurações originais restauradas após os testes.
- 18 análises automáticas com axe-core (WCAG 2 A/AA e 2.1 AA), em desktop e mobile: nenhuma violação detectada. Isso não substitui uma avaliação completa com tecnologias assistivas.
- Durante os fluxos testados: nenhuma requisição a serviço externo ou envio de formulário. Apenas a preferência de tema é salva em `localStorage`; os dados do formulário não são persistidos.

Playwright e axe-core foram usados por ferramentas temporárias de QA, sem adicioná-los às dependências do aplicativo.

### Validação dos temas

- Chrome headless via DevTools: oito rotas nos dois temas, em 1440, 768, 375 e 360 px (64 combinações), sem overflow horizontal ou exceções JavaScript.
- Alternância por Enter e Espaço, navegação SPA, recarga, reabertura em outra aba e sincronização entre abas. Tema salvo aplicado no primeiro frame; preferência inválida usa claro. Armazenamento bloqueado não impede a alternância.
- Simulações, quatro etapas, seleção de cursos, aviso de curso inválido, filtros do relatório, tooltips, erros e sucesso do formulário, e menu móvel exercitados nos dois temas em desktop e mobile.
- Inspeção de capturas de Home, Resultados, Contato e Equipe. Verificação de contraste dos textos por cores computadas nas oito páginas em ambos os temas, sem ocorrências abaixo dos limites AA nessa verificação; não substitui uma auditoria completa de acessibilidade.
- Ferramentas temporárias de QA, sem novas dependências no projeto.
