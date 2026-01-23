# LIMVEX Landing Page Design System

## Name
limvex-landingpage-design

## Description
Design system e padrões visuais para a landing page da LIMVEX. Inclui guias de cores, gradientes, componentes, animações e boas práticas para manter consistência visual tecnológica e moderna.

## Design Philosophy

A landing page da LIMVEX deve transmitir **tecnologia, inovação e profissionalismo** através de:
- Cores vibrantes com gradientes (não neutras)
- Elementos visuais tecnológicos (grids, glows, partículas)
- Visual moderno e impactante
- Coerência entre imagens e textos

## Paleta de Cores

### Cores Principais
- **Azul Primário**: `#0076CE` (Primary brand color)
- **Ciano**: `#06B6D4` (Accent tech color)
- **Roxo**: `#8B5CF6` (Secondary accent)
- **Background Principal**: `#030014` (Dark tech background)

### Gradientes Tecnológicos
```css
/* Gradiente principal (azul → ciano → roxo) */
from-[#0076CE] via-[#06B6D4] to-[#8B5CF6]

/* Gradiente azul simples */
from-[#0076CE] to-[#0099FF]

/* Gradiente ciano */
from-[#06B6D4] to-[#0EA5E9]

/* Gradiente roxo */
from-[#8B5CF6] to-[#A855F7]
```

### Uso de Cores
- **Textos principais**: Branco (`text-white`)
- **Textos secundários**: Branco com opacidade (`text-white/70`, `text-white/60`)
- **Destaques**: Gradientes nos títulos principais
- **Backgrounds**: `bg-[#030014]` ou gradientes sutis

## Componentes e Padrões

### Hero Section
- Background com grid pattern tecnológico
- Orbs de gradiente animados (blur effects)
- Ícones tech flutuantes animados
- Badge com pulse animation
- Título com gradient text
- CTAs com gradientes e glow effects

### Cards e Seções
- Background: `bg-gradient-to-br from-white/[0.06] to-white/[0.02]`
- Border: `border border-white/[0.08]`
- Hover: `hover:border-[#0076CE]/30` ou cor específica da seção
- Transições: `transition-all duration-300` ou `duration-500`

### Badges
- Background: `bg-[#0076CE]/10` ou gradiente similar
- Border: `border border-[#0076CE]/20`
- Texto: Cor correspondente ao tema

### Botões CTA
- Primary: `bg-gradient-to-r from-[#0076CE] to-[#0099FF]`
- Hover: `hover:from-[#0099FF] hover:to-[#06B6D4]`
- Shadow: `shadow-[0_0_30px_rgba(0,118,206,0.4)]`
- Hover shadow: `hover:shadow-[0_0_50px_rgba(0,118,206,0.6)]`

## Elementos Visuais Tecnológicos

### Grid Patterns
```css
backgroundImage: `
  linear-gradient(rgba(0, 118, 206, 0.3) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 118, 206, 0.3) 1px, transparent 1px)
`
backgroundSize: '60px 60px'
opacity: 0.02 a 0.20 (dependendo do contexto)
```

### Gradient Orbs (Blur Effects)
- Posicionamento absoluto
- Tamanho: `w-96 h-96` ou similar
- Blur: `blur-[150px]` ou `blur-[200px]`
- Opacidade: `opacity-10` a `opacity-30`
- Animações: `animate-pulse` com delays

### Glow Effects
- Box shadows com cores vibrantes
- Exemplo: `shadow-[0_0_30px_rgba(0,118,206,0.4)]`
- Hover: aumentar opacidade e tamanho

## Animações

### Fade In
```css
animate-fade-in
/* Com delays escalonados: 0.05s, 0.15s, 0.25s, 0.35s */
```

### Float Animation
```css
animate-float
/* Para ícones flutuantes com delays diferentes */
```

### Hover Effects
- Scale: `hover:scale-[1.02]` ou `hover:scale-110`
- Translate: `hover:translate-y-[-4px]` ou `hover:translate-y-[-8px]`
- Border color changes
- Background opacity changes

## Tipografia

### Font Family
- **Principal**: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900

### Tamanhos
- **Hero Title**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- **Section Titles**: `text-3xl md:text-4xl lg:text-5xl`
- **Subtitles**: `text-lg md:text-xl`
- **Body**: `text-base` ou `text-lg`

### Estilos
- Font weight: `font-black` para títulos principais
- Letter spacing: `tracking-tight`
- Line height: `leading-[1.1]` para títulos, `leading-relaxed` para textos

## Estrutura de Seções

### Padrão de Seção
```tsx
<section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute ... bg-[#0076CE]/10 rounded-full blur-[200px]" />
  
  {/* Grid Pattern */}
  <div className="absolute inset-0 opacity-[0.02]" style={{...}} />
  
  {/* Content */}
  <div className="container mx-auto max-w-6xl relative z-10">
    {/* Header com badge */}
    {/* Conteúdo */}
  </div>
</section>
```

## Boas Práticas

### ✅ FAZER
- Usar gradientes vibrantes (azul/ciano/roxo)
- Adicionar elementos visuais tech (grids, glows, orbs)
- Manter consistência de cores por seção
- Usar animações sutis e profissionais
- Garantir que imagens façam sentido com os textos
- Usar espaçamento generoso (`py-20 md:py-32`)

### ❌ EVITAR
- Cores neutras sem gradientes
- Visual abstrato sem elementos tech
- Cards de estatísticas genéricos (a menos que solicitado)
- Textos distorcidos em relação às imagens
- Backgrounds completamente pretos sem elementos visuais

## Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router

## Estrutura de Arquivos

```
src/
  components/
    home/
      HeroSection.tsx          # Hero principal
      ProblemaSection.tsx      # Seção de problemas
      SolucaoSection.tsx       # Seção de soluções
      ComoFuncionaSection.tsx  # Timeline do processo
      DiferenciaisSection.tsx  # Diferenciais
      TimeSection.tsx          # Sobre o time
      ProvaSocialSection.tsx   # Compromisso/resultados
      FAQSection.tsx           # Perguntas frequentes
      ChamadaFinalSection.tsx  # CTA final
      FormularioSection.tsx    # Formulário de contato
      Footer.tsx               # Rodapé
  pages/
    Home.tsx                   # Página principal
  index.css                    # Design system CSS
```

## Mensagens e Conteúdo

### Tom de Voz
- Profissional mas acessível
- Focado em resultados
- Transparente e direto
- Tecnológico mas humano

### CTAs Principais
- "Falar com especialista" (WhatsApp)
- "Como funciona" (scroll interno)
- "Quero meu SaaS"
- "Falar com a LIMVEX"

## WhatsApp Integration

Todos os CTAs principais redirecionam para WhatsApp usando `getWhatsAppLink(context)` com mensagens pré-formatadas por contexto.

## Responsividade

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Grids adaptativos: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Textos responsivos com tamanhos escalonados

## Performance

- Lazy loading de imagens quando possível
- Animações otimizadas (CSS quando possível)
- Gradientes via Tailwind (otimizado)
- Blur effects com `backdrop-blur-sm`

---

**Última atualização**: 2025
**Versão do Design System**: 2.0 (Redesign Tecnológico)
