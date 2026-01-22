# LIMVEX Landing Page

Landing page institucional da LIMVEX focada em conversão e captação de leads qualificados.

## 🚀 Stack Tecnológica

- **Vite** - Build tool e dev server
- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **React Router** - Roteamento
- **React Hook Form + Zod** - Formulários e validação
- **Resend** - Envio de e-mails
- **Vercel** - Deploy e hosting

## 📋 Pré-requisitos

- Node.js 18+ e npm
- Conta Vercel (para deploy)

## 🛠️ Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:8080
```

## 🏗️ Build para produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 📦 Scripts disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run dev:vercel` - Inicia servidor com Vercel CLI
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🌐 Variáveis de Ambiente

### Para produção (Vercel)

Configure as seguintes variáveis no painel da Vercel:

- `RESEND_API_KEY` - API key do Resend para envio de e-mails (opcional, tem fallback)
- `LEAD_EMAIL` - E-mail de destino para receber os leads (opcional, tem fallback)
- `KV_REST_API_URL` - URL do Vercel KV para rate limiting (opcional)
- `KV_REST_API_TOKEN` - Token do Vercel KV para rate limiting (opcional)

### Rate Limiting

O sistema de rate limiting de e-mails funciona com:
- **Vercel KV** (recomendado em produção) - se as variáveis `KV_REST_API_URL` e `KV_REST_API_TOKEN` estiverem configuradas
- **Fallback local** - arquivo JSON em `/tmp` (funciona em desenvolvimento)

Limite: 3.000 e-mails por mês

## 📁 Estrutura do Projeto

```
├── api/                    # API routes (Vercel serverless)
│   ├── lead.ts            # Endpoint para receber leads
│   └── utils/
│       └── emailRateLimit.ts
├── src/
│   ├── components/
│   │   ├── home/          # Componentes da home
│   │   └── ui/            # Componentes shadcn/ui
│   ├── pages/
│   │   ├── Home.tsx       # Página principal
│   │   ├── Obrigado.tsx   # Página de confirmação
│   │   └── NotFound.tsx   # Página 404
│   ├── types/             # Tipos TypeScript
│   └── App.tsx            # Rotas e configuração principal
└── public/                # Assets estáticos
```

## 🎨 Design System

### Paleta de Cores

- **Background principal**: `#000920` (azul escuro)
- **Texto principal**: `#FFFFFF` (branco)
- **Texto secundário**: Cinzas claros (`white/70`, `white/80`)
- **Destaque/Azul**: `#0076CE` (azul estilo Dell/WordPress)
- **Hover**: `#0099FF` (azul mais claro)

### Tipografia

- **Fonte**: Satoshi (via Fontshare)
- **Estilo**: Moderno, forte, direto

## 📄 Páginas

- `/` - Home (landing page completa)
- `/obrigado` - Confirmação após envio do formulário
- `/404` - Página não encontrada

## 📝 Formulário de Lead

O formulário na home coleta:
- Nome completo
- WhatsApp
- E-mail
- Empresa
- Cargo
- Tipo de projeto
- Objetivo do projeto
- Faturamento

Os dados são enviados para `/api/lead` que:
1. Valida os campos
2. Verifica rate limit
3. Envia e-mail via Resend
4. Retorna sucesso/erro

## 🚀 Deploy

O projeto está configurado para deploy na Vercel:

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente
3. O deploy é automático a cada push

### Comandos de deploy manual

```bash
# Com Vercel CLI instalado
vercel
```

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe LIMVEX.

---

**LIMVEX** - Transformando tecnologia em crescimento real
