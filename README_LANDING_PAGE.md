# Landing Page - MVL Construtora 🏗️

Landing page moderna e responsiva para a MVL Construtora, desenvolvida com React, TypeScript e TailwindCSS.

## 🎨 Características

- ✅ Design moderno e profissional
- ✅ 100% responsivo (mobile, tablet, desktop)
- ✅ Cor principal da marca: `#0e4c75` (azul)
- ✅ Navegação suave (smooth scroll)
- ✅ Botão flutuante do WhatsApp
- ✅ Seções completas conforme briefing

## 📱 Seções Implementadas

1. **Header** - Menu fixo com navegação suave e CTA
2. **Hero Section** - Chamada principal com estatísticas
3. **Quem Somos** - História e valores (Missão, Visão, Valores)
4. **Serviços** - 6 serviços principais com ícones
5. **Diferenciais** - 4 cards destacando pontos fortes
6. **Portfólio** - Galeria antes/depois (com imagens placeholder)
7. **Depoimentos** - 3 avaliações de clientes
8. **Como Funciona** - 4 etapas do processo
9. **Footer** - Informações de contato e redes sociais
10. **WhatsApp Button** - Botão flutuante fixo

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📞 Contatos Configurados

- **WhatsApp:** (32) 98401-7629
- **E-mail:** contato@mvlconstrutora.com.br
- **Localização:** Muriaé - MG e região

## 🎨 Paleta de Cores

- **Primária:** `#0e4c75` (Azul MVL)
- **Primária Escura:** `#0a3a5a`
- **Primária Clara:** `#1668a0`
- **Texto:** Gray scale
- **Accent:** Blue-300 (para destaques)

## 📸 Imagens

As imagens do portfólio estão usando placeholders do Unsplash. Para adicionar fotos reais:

1. Abra `src/features/site/components/Portfolio.tsx`
2. Substitua as URLs no array `projects`
3. Adicione mais projetos conforme necessário

## 🔧 Personalização

### Alterar número do WhatsApp

Todos os componentes usam o número: `5532984017629`

Para alterar, edite em cada componente ou crie uma constante global em `src/config/contact.ts`

### Adicionar mais serviços

Edite `src/features/site/components/Services.tsx` e adicione itens no array `services`

### Modificar cores

Edite `tailwind.config.js` na seção `extend.colors`

## 📁 Estrutura de Arquivos

```
src/
└── features/
    └── site/
        ├── pages/
        │   └── LandingPage.tsx        # Página principal
        └── components/
            ├── Header.tsx              # Menu de navegação
            ├── Hero.tsx                # Seção hero
            ├── About.tsx               # Quem somos
            ├── Services.tsx            # Serviços
            ├── Differentials.tsx       # Diferenciais
            ├── Portfolio.tsx           # Portfólio
            ├── Testimonials.tsx        # Depoimentos
            ├── HowItWorks.tsx          # Como funciona
            ├── Footer.tsx              # Rodapé
            └── WhatsAppButton.tsx      # Botão flutuante
```

## ✨ Recursos Extras

- Scroll suave entre seções
- Animações e transições
- Hover effects profissionais
- Mobile menu responsivo
- Botão WhatsApp aparece ao rolar
- Custom scrollbar com cor da marca

## 🌐 SEO

- Meta tags configuradas
- Descrição otimizada
- Título personalizado
- Lang pt-BR

---

Desenvolvido com ❤️ para MVL Construtora

