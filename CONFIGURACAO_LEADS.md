# Configuração do Sistema de Leads

Este documento explica como configurar o sistema centralizado de leads que foi implementado no projeto.

## 📋 Visão Geral

Todos os formulários do projeto agora enviam dados para um único endpoint `/api/lead`, que:
- Valida os dados recebidos
- Envia notificações por e-mail via Resend
- Centraliza todos os leads em um único lugar

## 🔧 Configuração Necessária

### 1. Variáveis de Ambiente

Você precisa configurar as seguintes variáveis de ambiente na Vercel:

#### Na Vercel Dashboard:
1. Acesse seu projeto na Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione as seguintes variáveis:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
LEAD_NOTIFICATION_EMAIL=contato@seu-dominio.com
```

#### Para desenvolvimento local:
Crie um arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
LEAD_NOTIFICATION_EMAIL=contato@seu-dominio.com
```

### 2. Obter API Key do Resend

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta (plano gratuito disponível)
3. Vá em **API Keys** e crie uma nova chave
4. Copie a chave e adicione como `RESEND_API_KEY`

**Nota:** No plano gratuito do Resend, você pode enviar até 3.000 e-mails por mês.

### 3. Configurar E-mail de Notificação

Defina o e-mail que receberá as notificações de leads em `LEAD_NOTIFICATION_EMAIL`.

**Importante:**
- No início, o Resend permite enviar apenas para e-mails verificados
- Para enviar para qualquer e-mail, você precisará verificar um domínio no Resend
- Até verificar o domínio, use um e-mail que você possa verificar

## 📧 Formulários Integrados

Os seguintes formulários foram integrados com o endpoint `/api/lead`:

1. **Formulário de Candidatura de Startup** (`StartupApplicationForm`)
   - Origem: `startup`
   - Campos: dados dos fundadores, descrição da ideia, etc.

2. **Formulário de Contato - Produtos** (`Produtos.tsx`)
   - Origem: `produtos`
   - Campos: nome, email, empresa, telefone, cargo, mensagem, produto

3. **Formulário de Contato - Para Empresas** (`ParaEmpresas.tsx`)
   - Origem: `para-empresas`
   - Campos: nome, email, empresa, telefone, cargo, descrição da demanda

4. **Formulário de Contato - Solicitar Orçamento** (`Contato.tsx`)
   - Origem: `contato`
   - Campos: nome, email, empresa, telefone, mensagem

## 🚀 Deploy

Após configurar as variáveis de ambiente na Vercel:

1. Faça commit das alterações
2. Faça push para o repositório
3. A Vercel fará o deploy automaticamente
4. As serverless functions em `api/lead.ts` estarão disponíveis em `/api/lead`

## 🧪 Testando

### Rodando o ambiente de desenvolvimento com Serverless Functions

Para testar a API e o envio de e-mails em desenvolvimento local, você precisa usar o Vercel CLI, pois o `npm run dev` (Vite) não carrega as serverless functions.

#### Passos para testar API + e-mail em dev:

1. Instale o Vercel CLI globalmente (se ainda não tiver):
```bash
npm install -g vercel
```

2. Execute o ambiente de desenvolvimento:
```bash
npm run dev:vercel
```

Ou diretamente:
```bash
vercel dev
```

Isso vai iniciar:
- **Frontend + Backend** em `http://localhost:3000`
- **Endpoint ativo**: `http://localhost:3000/api/lead`
- **Formulários funcionando em dev**, enviando e-mails reais via Resend

⚠️ **Aviso importante:** Em dev, **não usar mais `localhost:8080`** para testar envios. Apenas `localhost:3000` quando rodando com `vercel dev`.

### Testando o endpoint /api/lead em ambiente local

1. **Rodar o ambiente:**
```bash
npm run dev:vercel
```

2. **Abrir no navegador:**
```
http://localhost:3000
```

3. **Testar formulários:**
   - **Produtos** → Clique em "Fale com um especialista"
   - **Para Empresas** → Preencha o formulário de contato
   - **Startup** → Preencha o formulário de candidatura
   - **Contato** → Preencha o formulário de solicitar orçamento

4. **Verificar no Gmail se o e-mail chegou:**
   - E-mail: `muriloalbuquerquemartins@gmail.com`

5. **Verificar logs no terminal onde o `vercel dev` está rodando:**
   - `LEAD RECEIVED`
   - `ATTEMPTING SEND EMAIL`
   - `EMAIL SENT SUCCESSFULLY`
   - ou `EMAIL SEND ERROR: ...`

### Teste direto do Resend (sem usar /api/lead)

Para testar apenas o envio de e-mail via Resend, sem passar pelo endpoint:

```bash
npm run email:test
```

Isso enviará um e-mail de teste diretamente para `muriloalbuquerquemartins@gmail.com` usando a API do Resend.

## 📝 Estrutura dos Dados

O endpoint espera um payload no formato:

```typescript
{
  nome: string;           // obrigatório
  email: string;          // obrigatório
  empresa?: string;
  telefone?: string;
  cargo?: string;
  mensagem?: string;
  descricao?: string;
  origem: 'startup' | 'produtos' | 'para-empresas' | 'contato';
  produto?: string;
  // Campos específicos do formulário de startup
  foundersNames?: string;
  contactEmails?: string;
  // ... outros campos
}
```

## 🔍 Logs e Debug

Os logs do endpoint estão disponíveis no dashboard da Vercel:
1. Acesse seu projeto na Vercel
2. Vá em **Functions** → **api/lead**
3. Veja os logs em tempo real

## ⚠️ Troubleshooting

### E-mail não está sendo enviado
- Verifique se `RESEND_API_KEY` está configurada corretamente
- Verifique se `LEAD_NOTIFICATION_EMAIL` está configurado
- Verifique os logs da Vercel para erros
- Certifique-se de que o e-mail de destino está verificado no Resend (se necessário)

### Erro 500 no endpoint
- Verifique os logs da Vercel
- Certifique-se de que todas as variáveis de ambiente estão configuradas
- Verifique se a API key do Resend é válida

### Erro 400 (Bad Request)
- Verifique se `nome` e `email` estão sendo enviados
- Verifique se `origem` é um dos valores válidos
- Verifique o formato do e-mail

## 📚 Recursos

- [Documentação do Resend](https://resend.com/docs)
- [Documentação de Serverless Functions da Vercel](https://vercel.com/docs/functions)
- [Tipos TypeScript do projeto](./src/types/lead.ts)

