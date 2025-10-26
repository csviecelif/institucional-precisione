# Fase 1 – Auditoria e Baseline

## 1.1 Análise Atual

- Auditado com `lighthouse` (CLI v13.0.1) em `http://127.0.0.1:3000/` após build de produção.
- Relatórios gerados: `performance/lighthouse-baseline.report.html` e `performance/lighthouse-baseline.report.json`.

| Métrica | Valor | Observações |
| --- | --- | --- |
| LCP | 5.37 s | Conteúdo hero ainda pesado; maior imagem carregada do plano de fundo. |
| FCP | 1.41 s | Conteúdo inicial renderizado rapidamente apesar do plano de fundo. |
| CLS | 0.00037 | Estabilidade visual excelente. |
| TTI | 5.37 s | Coincide com o LCP por causa do bloqueio principal (TBT elevado). |
| TBT | 0.78 s | Impacto direto no TTI; oportunidade de otimizar scripts. |
| FID (proxy) | 0.70 s | Max Potential FID do Lighthouse; acompanhar INP em coletas reais. |
| Pontuação Performance | 59 | Modo mobile padrão do Lighthouse. |

Notas:
- O Lighthouse emitiu aviso de permissão (limpeza de cache) ao encerrar, mas os relatórios foram gerados com sucesso.
- Recomenda-se complementar com medições de campo (Chrome UX Report ou RUM) para métricas de interação.

## Componentes que carregam imagens

- `components/Hero.tsx`: duas chamadas a `next/image` com `fill` para os planos de fundo (`/bkg-preci-mobile.svg` e `/bkg-preci.svg`) priorizando carregamento (`priority`).
- Nenhum outro componente utiliza `next/image` ou `<img>` no código atual.
- `app/layout.tsx` referencia `/og-image.jpg` para Open Graph/Twitter.

## 1.2 Inventário de assets (`/public`)

| Arquivo | Formato | Tamanho | Dimensão original | Uso / contexto | Observações |
| --- | --- | --- | --- | --- | --- |
| `public/bkg-preci-mobile.svg` | SVG | 0.8 KB | 1080 × 1920 | Plano de fundo mobile (`Hero.tsx`) | Renderizado como `object-cover` cobrindo ~100% viewport (min 80vh). |
| `public/bkg-preci.svg` | SVG | 688.6 KB | 1366 × 768 | Plano de fundo desktop (`Hero.tsx`) | Arquivo grande para SVG (0.69 MB); avaliar otimização/compressão. |
| `public/hero-bg.png` | PNG | 516.1 KB | 1360 × 768 | Não referenciado | Possível legado; confirmar necessidade antes de remover. |
| `public/hero.png` | PNG | 175.4 KB | 1351 × 733 | Não referenciado | Antigo hero estático; hoje não utilizado. |
| `public/homepage2-hero.png` | PNG | 23.78 MB | 3840 × 2160 | Não referenciado | Arquivo muito pesado; remover ou substituir por versão otimizada se necessário. |
| `public/homepage2-hero.webp` | WEBP | 1.51 MB | 3840 × 2160 | Não referenciado | Alternativa otimizada do item acima; ainda não usada. |
| `public/images/investigation-hero.jpg` | JPG | 0 KB | — | Não referenciado | Arquivo vazio; limpar ou substituir pelo asset correto. |
| `public/logo.png` | PNG | 312.6 KB | 539 × 425 | Não referenciado | Considerar conversão para SVG ou uso efetivo. |
| `public/next.svg` | SVG | 1.3 KB | 394 × 80 | Não referenciado | Asset padrão do Next.js. |
| `public/og-image.jpg` | JPG | 30.2 KB | 1344 × 768 | Open Graph/Twitter (`layout.tsx`) | Metadata aponta 1200 × 630; ajustar ou exportar nova imagem 1.91:1. |
| `public/og-image.png` | PNG | 744.0 KB | 1344 × 768 | Não referenciado | Duplicata mais pesada do OG image. |
| `public/precisione_inpaint.png` | PNG | 744.0 KB | 1344 × 768 | Não referenciado | Duplicata do item acima. |
| `public/vercel.svg` | SVG | 0.6 KB | 283 × 64 | Não referenciado | Asset padrão do Next.js. |

### Anotações gerais

- Apenas três arquivos são usados diretamente: `bkg-preci-mobile.svg`, `bkg-preci.svg` e `og-image.jpg`.
- Há grande volume de arquivos legados/inativos; recomenda-se limpeza na fase de otimização.
- Verificar se algum fluxo (ex.: CMS futuro) dependerá dos assets hoje não utilizados antes de removê-los.
