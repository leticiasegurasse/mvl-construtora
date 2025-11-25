# 📸 Como Adicionar Imagens Reais ao Portfólio

## Passo 1: Preparar as imagens

1. Organize as fotos da construtora
2. Separe em pares: ANTES e DEPOIS
3. Redimensione para web (recomendado: 800x600px ou similar)
4. Otimize o tamanho dos arquivos (use TinyPNG.com se necessário)

## Passo 2: Adicionar ao projeto

### Opção A: Usar pasta assets (Local)

```bash
# Crie a pasta de imagens
mkdir src/assets/images
mkdir src/assets/images/portfolio
```

Copie suas imagens para `src/assets/images/portfolio/`

Exemplo de estrutura:
```
src/assets/images/portfolio/
├── projeto1-antes.jpg
├── projeto1-depois.jpg
├── projeto2-antes.jpg
├── projeto2-depois.jpg
└── ...
```

### Opção B: Usar CDN/Hospedagem externa

Upload das imagens para:
- Cloudinary
- ImgBB
- AWS S3
- Sua própria hospedagem

## Passo 3: Atualizar o componente Portfolio

Edite: `src/features/site/components/Portfolio.tsx`

**Exemplo usando assets locais:**

```typescript
import projeto1Antes from '../../assets/images/portfolio/projeto1-antes.jpg';
import projeto1Depois from '../../assets/images/portfolio/projeto1-depois.jpg';

const projects = [
  {
    title: 'Casa Residencial - Nova Iguaçu',
    description: 'Construção completa de 120m²',
    beforeImage: projeto1Antes,
    afterImage: projeto1Depois
  },
  // ... mais projetos
];
```

**Exemplo usando URLs externas:**

```typescript
const projects = [
  {
    title: 'Casa Residencial - Nova Iguaçu',
    description: 'Construção completa de 120m²',
    beforeImage: 'https://seusite.com/images/projeto1-antes.jpg',
    afterImage: 'https://seusite.com/images/projeto1-depois.jpg'
  },
  // ... mais projetos
];
```

## 📸 Recomendações de Fotos

### Para o Portfólio (Antes/Depois):
- Mínimo 3 projetos
- Mesma angulação nas fotos antes/depois
- Boa iluminação
- Alta resolução

### Fotos adicionais recomendadas:
- Equipe trabalhando
- Ferramentas e equipamentos
- Logo da empresa (SVG preferível)
- Ícone/favicon personalizado

## 🎨 Otimização de Imagens

### Ferramentas recomendadas:
- **TinyPNG** - Compressão sem perda de qualidade
- **Squoosh** - Ferramenta do Google
- **ImageOptim** - Para Mac

### Formatos recomendados:
- **JPG** - Para fotos
- **PNG** - Para logos/transparência
- **WebP** - Formato moderno (menor tamanho)
- **SVG** - Para ícones e logo

## 🔄 Atualizar Logo

1. Salve o logo em `src/assets/images/logo.svg` (ou .png)
2. Importe no Header:

```typescript
import logo from '../../assets/images/logo.svg';

// No componente Header
<img src={logo} alt="MVL Construtora" className="h-10" />
```

## 🌟 Exemplo Completo

```typescript
// src/features/site/components/Portfolio.tsx
import { Image } from 'lucide-react';

// Importar imagens locais
import obra1Antes from '../../assets/images/portfolio/obra1-antes.jpg';
import obra1Depois from '../../assets/images/portfolio/obra1-depois.jpg';
import obra2Antes from '../../assets/images/portfolio/obra2-antes.jpg';
import obra2Depois from '../../assets/images/portfolio/obra2-depois.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Casa Residencial - Nova Iguaçu',
      description: 'Construção completa de 120m²',
      beforeImage: obra1Antes,
      afterImage: obra1Depois
    },
    {
      title: 'Reforma Completa - Centro',
      description: 'Renovação de estrutura e acabamento',
      beforeImage: obra2Antes,
      afterImage: obra2Depois
    },
    // Adicione mais projetos aqui
  ];

  return (
    // ... resto do componente
  );
};
```

## ✅ Checklist Final

- [ ] Imagens otimizadas (< 200KB cada)
- [ ] Resolução adequada (800-1200px largura)
- [ ] Nomes de arquivo descritivos
- [ ] Mesma proporção entre antes/depois
- [ ] Alt text descritivo nas imagens
- [ ] Testado em diferentes dispositivos

## 🎯 Dica Pro

Crie um script para otimizar automaticamente:

```json
// package.json
"scripts": {
  "optimize-images": "imagemin src/assets/images/* --out-dir=src/assets/images/optimized"
}
```

---

Pronto! Suas imagens reais vão dar muito mais credibilidade ao site! 📸✨

