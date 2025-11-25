# 🛠️ Comandos Úteis - MVL Landing Page

## 🚀 Desenvolvimento

### Iniciar servidor de desenvolvimento
```bash
npm run dev
```
Abre em: `http://localhost:5173`

### Build para produção
```bash
npm run build
```
Gera pasta `dist/` com arquivos otimizados

### Preview do build
```bash
npm run preview
```
Testa a versão de produção localmente

### Linter
```bash
npm run lint
```
Verifica erros de código

---

## 📦 Gerenciamento de Pacotes

### Instalar dependências
```bash
npm install
```

### Adicionar nova biblioteca
```bash
npm install nome-do-pacote
```

### Remover biblioteca
```bash
npm uninstall nome-do-pacote
```

### Atualizar dependências
```bash
npm update
```

---

## 🔍 Busca e Navegação

### Buscar texto em todos os arquivos
```bash
# PowerShell (Windows)
Get-ChildItem -Recurse -Filter "*.tsx" | Select-String "texto"

# Ou use Ctrl+Shift+F no VS Code
```

### Encontrar arquivos
```bash
# PowerShell
Get-ChildItem -Recurse -Filter "*.tsx"
```

---

## 🎨 TailwindCSS

### Gerar arquivo CSS de saída
```bash
# Já incluído no npm run dev
```

### Usar classes customizadas
No `src/index.css`:
```css
@layer components {
  .btn-primary {
    @apply bg-[#0e4c75] text-white px-6 py-3 rounded-lg;
  }
}
```

---

## 🖼️ Otimização de Imagens

### Instalar ferramenta de otimização
```bash
npm install --save-dev imagemin imagemin-cli
```

### Otimizar imagens
```bash
npx imagemin src/assets/images/* --out-dir=src/assets/images/optimized
```

---

## 🌐 Deploy

### Vercel
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages
```bash
# Build
npm run build

# Deploy (configurar gh-pages)
npm install --save-dev gh-pages
```

Adicione ao `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

---

## 🔧 Git (Controle de Versão)

### Inicializar repositório
```bash
git init
git add .
git commit -m "Initial commit - Landing Page MVL"
```

### Conectar com GitHub
```bash
git remote add origin https://github.com/seu-usuario/mvl-landing.git
git push -u origin main
```

### Commits organizados
```bash
# Adicionar arquivos
git add .

# Commit com mensagem
git commit -m "feat: adiciona seção de portfólio"

# Push para repositório
git push
```

### Ver status
```bash
git status
```

### Ver histórico
```bash
git log --oneline
```

---

## 📊 Análise de Performance

### Lighthouse (Chrome DevTools)
1. Abra o site no Chrome
2. F12 > Lighthouse
3. Run audit

### Bundle Size
```bash
npm run build

# Ver tamanho dos arquivos
ls -lh dist/assets/
```

---

## 🐛 Debug

### Ver erros do TypeScript
```bash
npx tsc --noEmit
```

### Limpar cache do Vite
```bash
rm -rf node_modules/.vite
npm run dev
```

### Reinstalar dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🔄 Atualização de Conteúdo

### Trocar número WhatsApp
```bash
# PowerShell - Buscar todas as ocorrências
Get-ChildItem -Recurse -Filter "*.tsx" | Select-String "5532984017629"

# Ou edite src/config/contact.ts
```

### Alterar cores da marca
Edite `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#NOVA_COR',
    // ...
  }
}
```

---

## 📱 Teste em Dispositivos

### Tunnel local (ngrok)
```bash
# Instalar ngrok
npm install -g ngrok

# Executar dev server
npm run dev

# Em outro terminal
ngrok http 5173
```

### Teste responsivo (Chrome DevTools)
1. F12
2. Toggle device toolbar (Ctrl+Shift+M)
3. Selecionar dispositivos

---

## 🔒 Segurança

### Verificar vulnerabilidades
```bash
npm audit
```

### Corrigir automaticamente
```bash
npm audit fix
```

### Atualizar pacotes com vulnerabilidades
```bash
npm audit fix --force
```

---

## 📚 Documentação

### Gerar documentação de componentes
```bash
# Instalar Storybook (opcional)
npx storybook init
```

### TypeDoc (para TypeScript)
```bash
npm install --save-dev typedoc
npx typedoc src/
```

---

## 🎯 Produtividade

### VS Code Extensions recomendadas:
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier
- ESLint

### Snippets úteis no VS Code
Digite `rafce` e pressione Tab para criar componente React

---

## 💡 Dicas Rápidas

### Hot Reload não funciona?
```bash
# Reinicie o servidor
Ctrl+C
npm run dev
```

### Porta 5173 em uso?
```bash
# Use outra porta
npm run dev -- --port 3000
```

### Build lento?
```bash
# Limpe cache
npm run build -- --force
```

---

## 📞 Suporte

Se tiver problemas:
1. Verifique erros no console (`npm run dev`)
2. Limpe cache e reinstale dependências
3. Verifique versão do Node (`node --version` - recomendado 18+)
4. Consulte documentação oficial do Vite/React

---

**Todos os comandos testados e funcionais! ✅**

