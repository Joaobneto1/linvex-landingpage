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

# 2. Configurar variáveis de ambiente
# O arquivo .env já foi criado com as configurações necessárias
# Se precisar editar, veja as variáveis abaixo

# 3. Iniciar servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:8080
# A API estará disponível em http://localhost:8080/api/lead
```

**Nota**: O servidor de desenvolvimento agora processa as rotas da API automaticamente. Você também pode usar `npm run dev:vercel` se preferir usar o Vercel CLI.

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

### Para desenvolvimento local

Crie um arquivo `.env` na raiz do projeto:

```env
# Habilitar download do PDF da apresentação (true/false)
VITE_ENABLE_PDF_DOWNLOAD=true

# API key do Resend para envio de e-mails (OBRIGATÓRIO para funcionar)
# Obtenha em: https://resend.com/api-keys
RESEND_API_KEY=re_6WEoM8uW_ExoKjqHMM7zf5vwcqcF2sHsM

# E-mail de destino (opcional, padrão: limvextec@gmail.com)
LEAD_EMAIL=limvextec@gmail.com
```

**⚠️ IMPORTANTE**:
- Sem `RESEND_API_KEY` configurada, o formulário não enviará e-mails. Em desenvolvimento, o payload será logado no console do servidor, mas o email não será enviado.
- O servidor de desenvolvimento (`npm run dev`) agora processa as rotas da API automaticamente.
- Alternativamente, você pode usar `npm run dev:vercel` se preferir o Vercel CLI.

### Para produção (Vercel)

Configure as seguintes variáveis no painel da Vercel:

- `RESEND_API_KEY` - API key do Resend para envio de e-mails (obrigatório para produção)
- `LEAD_EMAIL` - E-mail de destino para receber os leads (padrão: `limvextec@gmail.com`)
- `RESEND_FROM_EMAIL` - E-mail remetente (padrão: `noreply@limvex.com`). **IMPORTANTE**: Use um e-mail do seu domínio verificado no Resend
- `VITE_ENABLE_PDF_DOWNLOAD` - Habilitar botão de download do PDF (padrão: `false`)
- `KV_REST_API_URL` - URL do Vercel KV para rate limiting (opcional, mas recomendado)
- `KV_REST_API_TOKEN` - Token do Vercel KV para rate limiting (opcional, mas recomendado)

### Configuração do Email Provider

O sistema utiliza **Resend** como provedor de e-mail. Para configurar:

1. Crie uma conta em [Resend](https://resend.com)
2. Obtenha sua API key
3. **Configure seu domínio no Resend** (obrigatório para produção):
   - Acesse [resend.com/domains](https://resend.com/domains)
   - Clique em "Add Domain"
   - Adicione seu domínio (ex: `limvex.com`)
   - Configure os registros DNS conforme instruções do Resend
   - Aguarde a verificação (pode levar alguns minutos)
4. Configure a variável `RESEND_API_KEY` na Vercel
5. Configure a variável `RESEND_FROM_EMAIL` na Vercel com um e-mail do seu domínio (ex: `noreply@limvex.com` ou `contato@limvex.com`)
6. O e-mail padrão de destino é `limvextec@gmail.com`, mas pode ser alterado via `LEAD_EMAIL`

**⚠️ IMPORTANTE**: Sem verificar um domínio no Resend, você só poderá enviar e-mails para o próprio endereço da sua conta. Para enviar para qualquer destinatário, é necessário verificar um domínio.

### Rate Limiting

O sistema de rate limiting de e-mails funciona com:
- **Vercel KV** (recomendado em produção) - se as variáveis `KV_REST_API_URL` e `KV_REST_API_TOKEN` estiverem configuradas.
- **Fallback local** - arquivo JSON em `/tmp` (funciona em desenvolvimento).

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
- Nome completo *
- E-mail *
- Telefone *
- Empresa (opcional)
- Mensagem *

### Estados do Formulário

1. **Loading**: Durante o envio, os campos são desabilitados e o botão mostra "Enviando..."
2. **Erro**: Exibe mensagem de erro clara, mantém os dados preenchidos para correção
3. **Sucesso**: Exibe estado de conclusão com:
   - Badge "Concluído" com ícone
   - Título: "Solicitação enviada com sucesso!"
   - Texto explicando próximos passos
   - Botão "Baixar apresentação" (se `VITE_ENABLE_PDF_DOWNLOAD=true`)
   - Botão "Enviar outra solicitação" (reseta o formulário)

### Download da Apresentação

Para habilitar o download do PDF:

1. Adicione o arquivo `apresentacao-limvex.pdf` na pasta `public/`
2. Configure `VITE_ENABLE_PDF_DOWNLOAD=true` no `.env` ou nas variáveis de ambiente
3. O botão aparecerá automaticamente no estado de sucesso
4. O arquivo será baixado com o nome: `Apresentacao-Limvex.pdf`

**Nota**: Se a flag estiver `false` ou ausente, o estado de sucesso ainda será exibido, mas sem o botão de download.

### Fluxo de Envio

Os dados são enviados para `/api/lead` que:
1. Valida os campos obrigatórios
2. Aplica validação anti-spam básica
3. Verifica rate limit
4. Envia e-mail via Resend para `limvextec@gmail.com`
5. Retorna sucesso/erro.

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

## 🧪 Como Testar Localmente

### Testar Envio de E-mail do Formulário

1. **Configurar variáveis de ambiente:**
   ```bash
   # Criar/editar arquivo .env na raiz do projeto
   echo "RESEND_API_KEY=re_6WEoM8uW_ExoKjqHMM7zf5vwcqcF2sHsM" > .env
   echo "LEAD_EMAIL=limvextec@gmail.com" >> .env
   ```

2. **Testar envio com sucesso:**
   ```bash
   # Reiniciar o servidor após configurar .env
   npm run dev

   # Preencha o formulário com dados válidos:
   # - Nome: Teste
   # - Email: teste@exemplo.com
   # - Telefone: (11) 99999-9999
   # - Mensagem: Teste de envio

   # Envie o formulário
   # Deve aparecer estado de sucesso com badge "Concluído"
   # Verifique o inbox de limvextec@gmail.com
   ```

3. **Testar erro (sem API key):**
   ```bash
   # Remover ou comentar RESEND_API_KEY do .env
   # Reiniciar servidor
   npm run dev

   # Tentar enviar formulário
   # Deve aparecer mensagem de erro clara no frontend
   # No console do servidor, deve aparecer log do payload (modo dev)
   ```

4. **Verificar logs do backend:**
   - Abra o console do terminal onde o servidor está rodando
   - Ao enviar o formulário, você verá logs como:
     ```
     [Lead API] LEAD RECEIVED: {...}
     [Lead API] RESEND_API_KEY: re_6WEoM8uW...
     [Lead API] EMAIL_TO: limvextec@gmail.com
     [Lead API] Tentando enviar email via Resend...
     [Lead API] EMAIL SENT SUCCESSFULLY
     [Lead API] Message ID: ...
     ```

5. **Diagnosticar problemas:**
   - Se aparecer erro "RESEND_API_KEY não configurada": verifique o `.env`
   - Se aparecer erro de API: verifique se a key está válida em https://resend.com
   - Se não chegar email: verifique spam e logs do servidor

3. **Testar feature flag do PDF:**
   ```bash
   # Com flag habilitada
   echo "VITE_ENABLE_PDF_DOWNLOAD=true" >> .env
   npm run dev
   # Envie o formulário com sucesso
   # Deve aparecer botão "Baixar apresentação"

   # Com flag desabilitada
   echo "VITE_ENABLE_PDF_DOWNLOAD=false" >> .env
   # Ou remova a linha do .env
   npm run dev
   # Envie o formulário com sucesso
   # NÃO deve aparecer botão de download
   ```

4. **Testar layout responsivo:**
   - Abra DevTools (F12)
   - Use o modo responsivo (Ctrl+Shift+M)
   - Teste breakpoints:
     - Mobile: 375px, 414px
     - Tablet: 768px, 1024px
     - Desktop: 1280px, 1920px
   - Verifique especialmente a seção "Por que escolher a LIMVEX?" (itens 01-06)
   - Cards devem ocupar 100% da largura no mobile, sem colunas estreitas

### Testar Scroll Reveal no Mobile

1. **No DevTools (emulação mobile):**
   ```bash
   npm run dev
   # Abra DevTools (F12)
   # Ative modo responsivo (Ctrl+Shift+M)
   # Selecione dispositivo mobile (ex: iPhone 12, Galaxy S20)
   # Role a página lentamente
   # Cada seção deve aparecer suavemente ao entrar na viewport
   ```

2. **No celular real:**
   - Acesse o site no seu celular (mesma rede ou via ngrok/tunnel)
   - Role a página
   - Verifique que:
     - ✅ Seções aparecem ao rolar (não ficam invisíveis)
     - ✅ Animações são suaves (se não tiver prefers-reduced-motion)
     - ✅ Nenhuma seção fica "travada" invisível
     - ✅ Funciona mesmo com conexão lenta

3. **Testar prefers-reduced-motion:**
   - No celular: Configurações > Acessibilidade > Reduzir movimento
   - Ative a opção
   - Recarregue a página
   - ✅ Conteúdo deve aparecer imediatamente (sem animação)
   - ✅ Nada deve ficar invisível

4. **Diagnosticar problemas:**
   - Se seções ficarem invisíveis: verifique console do navegador
   - Se animação não funcionar: verifique se IntersectionObserver é suportado
   - Fallback: se IntersectionObserver não existir, tudo aparece imediatamente

### Checklist de Validação

- [ ] Formulário envia com sucesso e mostra estado de conclusão
- [ ] Botão "Enviar outra solicitação" reseta o formulário corretamente
- [ ] Botão "Baixar apresentação" aparece apenas se flag estiver `true`
- [ ] Download do PDF funciona corretamente
- [ ] Seção de diferenciais (01-06) está responsiva no mobile
- [ ] Cards não ficam com colunas estreitas no mobile
- [ ] Texto não quebra letra-por-letra
- [ ] Layout funciona bem em todos os breakpoints

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe LIMVEX.

---

**LIMVEX** - Transformando tecnologia em crescimento real.
