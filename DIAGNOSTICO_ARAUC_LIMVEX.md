# 🔍 DIAGNÓSTICO COMPLETO: Transformação Limvex → Arauc

**Data:** 2025-01-27
**Branch:** `feature/limvex-redesign-v2`
**Status:** ⏳ Aguardando Aprovação

---

## 📋 SUMÁRIO EXECUTIVO

Este documento mapeia todas as diferenças entre o site atual da Limvex e o design da Arauc, identificando componentes, estilos, layouts e interações que precisam ser replicados visualmente.

**Objetivo:** Transformar o site Limvex em uma réplica visual e estrutural da Arauc, mantendo apenas cores e textos próprios da Limvex.

---

## 🎨 1. ANÁLISE VISUAL DA ARAUC (Baseado nas Imagens)

### 1.1 Página Inicial (`/`)

**Estrutura Observada:**

- **Hero Minimalista:** Fundo claro com gradientes suaves (azul/roxo)
- **Logo Central:** Logo "arauc" com ícone de árvore estilizado
- **Tagline:** "Excelência em Desenvolvimento de Software Sob Medida"
- **Dois Cards Principais:**
  - **Card Azul (Esquerda):** "Para Empresas" - "Eficiência, controle e segurança"
  - **Card Gradiente Roxo/Rosa (Direita):** "Para Novos Negócios" - "Do zero ao MVP com velocidade"
- **Botão Inferior:** "Produtos" com ícone de caixa
- **Design:** Minimalista, espaçado, premium

**Componentes Necessários:**

- `HeroMinimal` - Hero com fundo claro e gradientes
- `PlanCard` - Card com gradiente e ícone
- `Badge` - Badge superior com tags

### 1.2 Página `/para-novos-negocios`

**Estrutura Observada:**

- **Header:** Logo + botão "← Voltar" + navegação + "Se inscrever"
- **Badge Superior:** "Desenvolvimento • Novos Negócios • Educação"
- **Hero com Gradiente:** Fundo azul-roxo com gradiente
- **Título Grande:** "Transforme sua ideia em uma Startup de sucesso"
  - Palavras destacadas com gradientes (rosa-roxo, azul-roxo)
- **Subtítulo:** Descrição do modelo
- **CTA Principal:** Botão gradiente roxo-rosa "Se inscreva! →"
- **3 Cards de Informação:**
  - "INVESTIMENTO INICIAL: R$ 3.000 + 10x R$ 500"
  - "PRAZO ESTIMADO: 4 ~ 8 semanas"
  - "ENTREGAMOS: MVP + sociedade"
- **Video Player:** Lado direito (não replicar conteúdo, apenas estrutura)
- **Design:** Premium, com gradientes vibrantes

**Componentes Necessários:**

- `HeroGradient` - Hero com gradiente azul-roxo
- `InfoCard` - Cards compactos com métricas
- `VideoSection` - Seção para vídeo (opcional)

### 1.3 Página `/para-empresas`

**Estrutura Observada:**

- **Header Escuro:** Logo + navegação + "Agendar reunião"
- **Background:** Imagem escura (cidade vista de cima à noite)
- **Badge:** "Corporate Grade • Segurança • Transparência"
- **Hero Escuro Premium:**
  - Título grande branco: "Criamos softwares totalmente sob medida, para resolver o seu problema"
  - Destaque em azul claro: "o seu problema"
  - Subtítulo descritivo
  - CTA azul claro: "Fale com Nossos Especialistas"
- **4 Blocos de KPIs Horizontais:**
  - "Tempo de resposta: < 24h"
  - "Demo de progresso: Semanal"
  - "Segurança: Best Practices"
  - "Entrega: Sprints ágeis"
- **Seção "Como Trabalhamos":**
  - Título grande branco
  - Subtítulo descritivo
  - 4 Steps numerados com ícones (parcialmente visível)
- **Design:** Escuro, premium, corporativo

**Componentes Necessários:**

- `HeroDark` - Hero com fundo escuro e imagem
- `KPIBlock` - Blocos horizontais de KPIs
- `ProcessSteps` - Steps numerados com ícones

### 1.4 Página `/produtos`

**Estrutura Observada:**

- **Header:** Logo + navegação
- **Hero Claro:** Fundo com gradientes suaves
- **Título:** "Plan" (com superscript 'n')
- **Grid de Produtos:** Cards com ícones, títulos e descrições
- **Design:** Limpo, organizado, sem categorias

**Componentes Necessários:**

- `ProductGrid` - Grid de produtos unificado
- `ProductCard` - Card de produto (já existe, precisa ajustar)

---

## 🔄 2. MAPEAMENTO LIMVEX ATUAL vs ARAUC

### 2.1 Páginas Existentes

| Página Limvex          | Equivalente Arauc      | Status     | Ações Necessárias                                         |
| ---------------------- | ---------------------- | ---------- | --------------------------------------------------------- |
| `/`                    | `/`                    | ⚠️ Parcial | Refatorar completamente para hero minimalista com 2 cards |
| `/home-full`           | `/` (versão completa)  | ⚠️ Parcial | Replicar estrutura Arauc completa                         |
| `/para-empresas`       | `/para-empresas`       | ⚠️ Parcial | Ajustar hero escuro, KPIs horizontais, steps              |
| `/para-novos-negocios` | `/para-novos-negocios` | ⚠️ Parcial | Hero gradiente, cards de info, layout                     |
| `/produtos`            | `/produtos`            | ⚠️ Parcial | Simplificar, remover categorias                           |

### 2.2 Componentes Existentes vs Necessários

#### ✅ Componentes que JÁ EXISTEM (precisam ajustes):

- `Section` - OK, manter
- `SectionBlue` - OK, manter
- `DarkSection` - OK, manter
- `FeatureCard` - OK, ajustar estilos
- `StepCard` - OK, ajustar layout
- `KPI` - OK, mas precisa versão compacta horizontal
- `KPICompact` - OK, ajustar para horizontal
- `ProductCard` - OK, simplificar
- `EntryCard` - OK, ajustar para estilo PlanCard

#### ❌ Componentes que PRECISAM SER CRIADOS:

- `HeroMinimal` - Hero minimalista com fundo claro
- `HeroGradient` - Hero com gradiente azul-roxo
- `HeroDark` - Hero escuro com background image
- `PlanCard` - Card estilo Arauc (azul/gradiente)
- `InfoCard` - Card compacto com métrica (R$ 3.000, 4-8 semanas, etc)
- `KPIBlock` - Bloco horizontal de KPI (4 em linha)
- `ProcessSteps` - Steps numerados estilo Arauc
- `Badge` - Badge superior com tags (já existe, ajustar)

---

## 🎨 3. DESIGN SYSTEM - TOKENS NECESSÁRIOS

### 3.1 Cores Arauc (para referência visual)

**Observado nas imagens:**

- **Azul Claro:** `#60A5FA` / `#3B82F6` (similar ao primary Limvex)
- **Roxo/Rosa:** `#A78BFA` / `#EC4899` (gradientes)
- **Escuro:** `#0D1117` / `#0A0E14` (já existe no Limvex)
- **Branco:** `#FFFFFF`
- **Cinza Claro:** `#F5F7FA` / `#F9FAFB`

**Ação:** Manter cores Limvex, mas ajustar gradientes e opacidades para replicar sensação visual.

### 3.2 Tipografia Arauc

**Observado:**

- **H1:** Muito grande, bold/black, line-height apertado
- **H2:** Grande, bold
- **P:** Médio, line-height relaxado
- **Micro-textos:** Pequenos, uppercase em alguns casos
- **Fonte:** Sans-serif moderna (Inter/Inter Tight já usado)

**Ação:** Ajustar tamanhos e pesos para replicar hierarquia visual.

### 3.3 Espaçamentos Arauc

**Observado:**

- **Seções:** Muito espaçadas (py-32, py-40)
- **Cards:** Padding generoso (p-8, p-10)
- **Gaps:** Espaçamento entre elementos (gap-6, gap-8)
- **Margins:** Margens grandes entre seções

**Ação:** Aumentar espaçamentos para replicar sensação premium.

### 3.4 Bordas e Sombras Arauc

**Observado:**

- **Bordas:** Arredondadas (rounded-2xl, rounded-3xl)
- **Sombras:** Suaves, com blur
- **Backdrop:** Backdrop blur em alguns elementos
- **Borders:** Bordas sutis (border-white/10)

**Ação:** Ajustar para replicar sensação premium.

### 3.5 Animações Arauc

**Observado:**

- **Hover:** Transições suaves em cards
- **Scroll:** Animações de entrada (fade, slide)
- **Gradientes:** Gradientes animados em alguns elementos

**Ação:** Adicionar animações de entrada e hover states.

---

## 📐 4. ESTRUTURA DE LAYOUT POR PÁGINA

### 4.1 `/` (Página Inicial)

**Estrutura Atual Limvex:**

```
- Background com gradientes
- Logo central
- Título + subtítulo
- Texto rotativo de serviços
- 3 EntryCards (Para Empresas, Novos Negócios, Produtos)
- Link "Entrar no site completo"
```

**Estrutura Alvo Arauc:**

```
- HeroMinimal (fundo claro com gradientes suaves)
  - Logo central (maior)
  - Tagline
  - 2 PlanCards lado a lado:
    - Card Azul: "Para Empresas"
    - Card Gradiente: "Para Novos Negócios"
  - Botão "Produtos" abaixo
```

**Mudanças Necessárias:**

- ✅ Remover texto rotativo
- ✅ Reduzir para 2 cards principais
- ✅ Adicionar botão "Produtos" separado
- ✅ Ajustar espaçamentos
- ✅ Aplicar estilo PlanCard

### 4.2 `/home-full` (Página Institucional)

**Estrutura Atual Limvex:**

```
- Header
- Hero "Quem é a Limvex"
- 3 BusinessModelCards
- Cases preview
- "Por que escolher a Limvex" (4 FeatureCards)
- CTA Final
- Footer
```

**Estrutura Alvo Arauc:**

```
- Header (ajustar navegação)
- Hero premium com logo e tagline
- Seção "Como trabalhamos" (3 cards)
- Cases (ajustar layout)
- Features/Benefícios (ajustar layout)
- CTA Final (ajustar estilo)
- Footer (ajustar)
```

**Mudanças Necessárias:**

- ✅ Ajustar hero para estilo premium
- ✅ Replicar layout de cards
- ✅ Ajustar espaçamentos
- ✅ Aplicar gradientes e sombras

### 4.3 `/para-empresas`

**Estrutura Atual Limvex:**

```
- Header
- HeroDark com badge e título
- 4 KPICompact horizontais
- "O que fazemos" (4 ServiceCards)
- "Modelos de Contratação" (3 ModelCards)
- CTA Final
- Footer
```

**Estrutura Alvo Arauc:**

```
- Header escuro
- HeroDark com background image
  - Badge superior
  - Título grande com destaque
  - Subtítulo
  - CTA azul claro
- 4 KPIBlocks horizontais (ajustar layout)
- "O que fazemos" (ajustar cards)
- "Como Trabalhamos" (4 ProcessSteps)
- CTA Final escuro
- Footer escuro
```

**Mudanças Necessárias:**

- ✅ Adicionar background image no hero
- ✅ Ajustar KPIs para layout horizontal compacto
- ✅ Adicionar seção "Como Trabalhamos" com steps
- ✅ Ajustar espaçamentos e cores

### 4.4 `/para-novos-negocios`

**Estrutura Atual Limvex:**

```
- Header
- Hero (SectionBlue)
- EquityHighlight (gráficos)
- ProcessSteps (4 steps)
- "Para quem é" (3 FeatureCards)
- CTA Final
- Footer
```

**Estrutura Alvo Arauc:**

```
- Header
- HeroGradient (azul-roxo)
  - Badge superior
  - Título grande com gradientes nas palavras
  - Subtítulo
  - CTA gradiente roxo-rosa
  - 3 InfoCards (Investimento, Prazo, Entrega)
  - Video player (opcional, lado direito)
- EquityHighlight (ajustar layout)
- ProcessSteps (ajustar estilo)
- "Para quem é" (ajustar cards)
- CTA Final
- Footer
```

**Mudanças Necessárias:**

- ✅ Criar HeroGradient
- ✅ Adicionar InfoCards no hero
- ✅ Ajustar título com gradientes nas palavras
- ✅ Ajustar EquityHighlight
- ✅ Ajustar ProcessSteps

### 4.5 `/produtos`

**Estrutura Atual Limvex:**

```
- Header
- Hero (SectionBlue)
- Grid de produtos (3 colunas)
- "Como funciona white-label" (4 FeatureCards)
- CTA Final
- Footer
```

**Estrutura Alvo Arauc:**

```
- Header
- Hero minimalista
- Grid de produtos unificado (sem categorias)
- Seção de features (ajustar)
- CTA Final
- Footer
```

**Mudanças Necessárias:**

- ✅ Simplificar hero
- ✅ Remover categorias
- ✅ Ajustar grid de produtos
- ✅ Ajustar espaçamentos

---

## 🧩 5. COMPONENTES A CRIAR/REFATORAR

### 5.1 Componentes Novos

#### `HeroMinimal`

```typescript
- Fundo claro com gradientes suaves
- Logo central grande
- Tagline
- Espaçamento generoso
```

#### `HeroGradient`

```typescript
- Fundo com gradiente azul-roxo
- Badge superior
- Título com gradientes nas palavras
- Subtítulo
- CTA gradiente
- InfoCards inline (opcional)
```

#### `HeroDark`

```typescript
- Background image (cidade à noite)
- Overlay escuro
- Badge superior
- Título grande branco com destaque
- Subtítulo
- CTA azul claro
```

#### `PlanCard`

```typescript
- Card com gradiente (azul ou roxo-rosa)
- Ícone no topo
- Título
- Subtítulo
- Hover state
```

#### `InfoCard`

```typescript
- Card compacto
- Valor grande (R$ 3.000, 4-8 semanas)
- Label pequeno
- Background branco/claro
```

#### `KPIBlock`

```typescript
- Layout horizontal (4 em linha)
- Ícone pequeno
- Valor grande
- Label pequeno
- Background escuro com borda
```

#### `ProcessSteps`

```typescript
- 4 steps numerados
- Ícone em cada step
- Título e subtítulo
- Layout horizontal ou grid
```

### 5.2 Componentes a Refatorar

#### `EntryCard` → `PlanCard`

- Ajustar para gradiente
- Ajustar tamanhos
- Ajustar espaçamentos

#### `KPICompact`

- Ajustar para layout horizontal
- Ajustar cores para escuro
- Ajustar espaçamentos

#### `FeatureCard`

- Ajustar bordas e sombras
- Ajustar hover states
- Ajustar espaçamentos

#### `StepCard`

- Ajustar layout para estilo Arauc
- Ajustar numeração
- Ajustar ícones

#### `ProductCard`

- Simplificar
- Remover categorias
- Ajustar layout

---

## 🎯 6. CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: Design System

- [ ] Adicionar tokens de gradientes Arauc (mantendo cores Limvex)
- [ ] Ajustar espaçamentos (aumentar)
- [ ] Ajustar tipografia (tamanhos e pesos)
- [ ] Adicionar animações (fade-in, slide-up)
- [ ] Ajustar sombras e bordas

### Fase 2: Componentes Base

- [ ] Criar `HeroMinimal`
- [ ] Criar `HeroGradient`
- [ ] Criar `HeroDark`
- [ ] Criar `PlanCard`
- [ ] Criar `InfoCard`
- [ ] Criar `KPIBlock`
- [ ] Criar `ProcessSteps`
- [ ] Refatorar `EntryCard` → `PlanCard`
- [ ] Refatorar `KPICompact`
- [ ] Refatorar `FeatureCard`
- [ ] Refatorar `StepCard`
- [ ] Refatorar `ProductCard`

### Fase 3: Páginas

- [ ] Refatorar `/` (página inicial)
- [ ] Refatorar `/home-full`
- [ ] Refatorar `/para-empresas`
- [ ] Refatorar `/para-novos-negocios`
- [ ] Refatorar `/produtos`

### Fase 4: Header e Footer

- [ ] Ajustar Header (navegação, estilos)
- [ ] Ajustar Footer (layout, estilos)

### Fase 5: Testes e Ajustes

- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Testar animações
- [ ] Ajustar espaçamentos
- [ ] Corrigir lint/TS
- [ ] Build final

---

## ⚠️ 7. PONTOS DE ATENÇÃO

1. **Cores:** Manter paleta Limvex, apenas ajustar gradientes e opacidades
2. **Textos:** NÃO copiar textos da Arauc, manter textos Limvex
3. **Imagens:** NÃO copiar imagens da Arauc, usar imagens Limvex ou placeholders
4. **Funcionalidades:** NÃO remover funcionalidades existentes
5. **Rotas:** NÃO criar novas rotas sem aprovação
6. **Branch:** Trabalhar SOMENTE em `feature/limvex-redesign-v2`

---

## 📊 8. MÉTRICAS DE SUCESSO

O site Limvex será considerado uma réplica visual bem-sucedida da Arauc quando:

- ✅ Layouts idênticos (seções, espaçamentos, proporções)
- ✅ Estilos visuais idênticos (cores, gradientes, sombras, bordas)
- ✅ Tipografia idêntica (tamanhos, pesos, line-heights)
- ✅ Componentes idênticos (cards, hero, KPIs, steps)
- ✅ Animações idênticas (hover, scroll, transições)
- ✅ Responsividade idêntica (mobile, tablet, desktop)
- ✅ Sensação premium idêntica

**Porém mantendo:**

- ✅ Cores Limvex (azul primary)
- ✅ Textos Limvex
- ✅ Branding Limvex
- ✅ Funcionalidades Limvex

---

## 🚀 PRÓXIMOS PASSOS

1. **Aguardar aprovação deste diagnóstico**
2. **Criar plano de refatoração detalhado** (após aprovação)
3. **Implementar em blocos** (com validação entre etapas)
4. **Testes finais** (lint, build, responsividade)
5. **Relatório final** (mudanças, arquivos, componentes)

---

**Status:** ⏳ Aguardando Aprovação do Diagnóstico
