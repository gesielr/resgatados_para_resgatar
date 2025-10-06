# Associação Resgatados para Resgatar - Website Institucional

## Visão Geral
Site institucional completo e responsivo para a Associação Resgatados para Resgatar, uma entidade cristã sem fins lucrativos dedicada a resgatar pessoas em situação de rua em Garopaba-SC.

## Arquitetura do Projeto

### Stack Tecnológica
- **Frontend**: React + Vite + TypeScript
- **Styling**: TailwindCSS + Shadcn UI
- **Animações**: Framer Motion
- **Roteamento**: Wouter
- **Forms**: React Hook Form + Zod
- **Backend**: Express.js + TypeScript
- **Pagamentos**: Stripe
- **State Management**: TanStack Query

### Estrutura de Páginas
1. **Home** (`/`) - Hero banner, missão, últimos projetos, depoimentos
2. **Sobre Nós** (`/sobre`) - História, missão/visão/valores, equipe
3. **Trabalhos** (`/trabalhos`) - Grid filtrado de projetos com modais de detalhes
4. **Parceiros** (`/parceiros`) - Lista de parceiros e formulário de contato
5. **Contribuir** (`/contribuir`) - Doações via PIX e Stripe (cartão)
6. **Contato** (`/contato`) - Formulário de contato, mapa, WhatsApp

### Esquema de Cores
- **Primary**: Azul Escuro (#1E3A8A)
- **Gold**: Dourado Suave (#D4AF37)
- **Background**: Branco
- **Fonts**: Inter & Poppins

### APIs Implementadas
- `POST /api/partner-contact` - Formulário de parceiros
- `POST /api/contact` - Formulário de contato geral
- `POST /api/create-payment-intent` - Criação de pagamento Stripe

### Variáveis de Ambiente Necessárias
- `STRIPE_SECRET_KEY` - Chave secreta do Stripe (backend)
- `VITE_STRIPE_PUBLIC_KEY` - Chave pública do Stripe (frontend)

## Funcionalidades Principais

### Sistema de Doações
- **PIX**: Chave copiável e QR Code visual
- **Cartão**: Integração completa com Stripe
- **Frequências**: Uma vez, mensal, trimestral, anual
- **Valores**: Predefinidos (R$ 20, 50, 100, 200) ou customizado

### Formulários
- Validação com Zod
- Feedback visual de sucesso/erro
- Estados de loading durante submissão

### Navegação
- Navbar fixa com menu responsivo
- Footer com links rápidos, redes sociais e newsletter
- Botão scroll-to-top flutuante

### Recursos Visuais
- Animações suaves com Framer Motion
- Hover effects em cards
- Modais para detalhes de projetos
- Grid responsivo para todos os dispositivos

## Estrutura de Arquivos

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ui/ (Shadcn components)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Partners.tsx
│   │   ├── Donation.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── index.css
server/
├── routes.ts (API endpoints)
└── storage.ts
shared/
└── schema.ts (Zod schemas e tipos TypeScript)
```

## Próximas Melhorias Sugeridas
1. Integração real com EmailJS ou serviço de e-mail
2. Sistema de admin para gerenciar projetos e depoimentos
3. Blog/notícias
4. Sistema de voluntariado
5. Dashboard de impacto com métricas
6. Multi-idioma (PT/EN)

## Como Executar
O projeto está configurado para rodar automaticamente no Replit. O workflow "Start application" executa `npm run dev` que inicia o servidor Express e o Vite dev server na porta 5000.

## Design Guidelines
Todas as decisões de design seguem rigorosamente as diretrizes estabelecidas em `design_guidelines.md`, garantindo uma experiência visual consistente, profissional e acessível.
