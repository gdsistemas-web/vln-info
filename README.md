# VLN INFO

Site institucional em Next.js para a VLN INFO, com home inspirada na referencia visual fornecida, paginas internas, servicos dinamicos, formulario validado e SEO tecnico.

## Tecnologias

- Next.js App Router
- React e TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- React Hook Form
- Zod
- Next/Image e Next/Font
- ESLint e Prettier

## Requisitos

- Node.js LTS
- npm

## Instalar e executar

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Variaveis de ambiente

Copie `.env.example` para `.env.local` quando integrar envio real de e-mail.

- `CONTACT_EMAIL_TO`: destinatario das mensagens.
- `CONTACT_EMAIL_PROVIDER`: provedor futuro.
- `CONTACT_EMAIL_API_KEY`: chave futura, sem versionar credenciais reais.

## Estrutura

- `src/app`: rotas, layout, SEO, API e paginas.
- `src/components`: layout, home, cards, formulario e UI.
- `src/data`: conteudo editavel da empresa, servicos, clientes, segmentos e parceiros.
- `src/lib`: SEO, validacoes e utilitarios.
- `public/images`: placeholders locais organizados.

## Alterar conteudos

Edite `src/data/company.ts` para telefones, WhatsApp, e-mail, slogan e redes sociais.
Edite `src/data/services.ts` para titulos, descricoes, slugs, beneficios, FAQ e SEO dos servicos.
Edite `src/data/clients.ts`, `src/data/partners.ts` e `src/data/segments.ts` para paginas institucionais.

## Trocar imagens

Os arquivos em `public/images` sao placeholders locais em SVG. Substitua por imagens finais otimizadas em WebP ou AVIF mantendo proporcao e caminhos atualizados nos dados:

- `hero-cancelas.webp`
- `hero-catracas.webp`
- `hero-cftv.webp`
- `hero-ti.webp`
- `servico-infraestrutura.webp`
- `servico-redes.webp`
- `servico-helpdesk.webp`
- `servico-backup.webp`
- `servico-cloud.webp`
- `servico-seguranca.webp`
- `empresa-sede.webp`
- `banner-versiculo.webp`

## Formulario e e-mail

O formulario usa React Hook Form e Zod no cliente, e a rota `POST /api/contato` valida novamente no servidor, aplica honeypot, rejeita campos inesperados, sanitiza textos e limita tentativas por IP em memoria. A entrega por e-mail esta preparada para integracao futura por variaveis de ambiente.

## Deploy na Vercel

1. Configure as variaveis em Project Settings.
2. Rode `npm run build` localmente.
3. Publique o repositorio conectado na Vercel.
4. Ajuste dominio e canonical em `src/lib/seo.ts` se necessario.

## Checklist antes da publicacao

- Substituir placeholders por imagens finais licenciadas.
- Conferir telefones, WhatsApp e redes sociais reais.
- Integrar provedor de e-mail na API.
- Revisar textos juridicos com responsavel legal.
- Executar `npm run lint`, `npm run typecheck` e `npm run build`.
