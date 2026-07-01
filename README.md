# TecBoard - Exemplos de Data Fetching no Next.js

Este projeto demonstra os diferentes métodos de busca de dados (data fetching) disponíveis no Next.js com Page Router.

## 🚀 Exemplos Incluídos

### 1. **getServerSideProps** - Server-Side Rendering (SSR)
- **Arquivo:** `/pages/server-side.js`
- **Rota:** `/server-side`
- **Características:**
  - Renderizado no servidor a cada requisição
  - Dados sempre atualizados
  - Acesso a headers, cookies, query params
  - Mais lento que páginas estáticas

### 2. **getStaticProps** - Static Site Generation (SSG)
- **Arquivo:** `/pages/static.js`
- **Rota:** `/static`
- **Características:**
  - Gerado estaticamente no build
  - Extremamente rápido
  - Ideal para conteúdo que não muda frequentemente
  - Pode ser servido via CDN

### 3. **getStaticPaths** - Páginas Dinâmicas Estáticas
- **Arquivos:** `/pages/posts/[id].js` e `/pages/posts/index.js`
- **Rotas:** `/posts` e `/posts/[id]`
- **Características:**
  - Combina getStaticProps com rotas dinâmicas
  - Define quais páginas pré-gerar
  - Ideal para blogs, e-commerce, etc.

### 4. **ISR** - Incremental Static Regeneration
- **Arquivo:** `/pages/isr-example.js`
- **Rota:** `/isr-example`
- **Características:**
  - Combina performance do SSG com dados atualizados
  - Revalidação automática em background
  - Usuários sempre veem conteúdo atual

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install
# ou
pnpm install

# Executar em desenvolvimento
npm run dev
# ou
pnpm dev

# Fazer build para ver SSG/ISR em ação
npm run build
npm run start
# ou
pnpm build
pnpm start
```

## 📚 Quando Usar Cada Método

| Método | Quando Usar | Performance | Dados |
|--------|-------------|-------------|-------|
| **getServerSideProps** | Dados que mudam a cada requisição, autenticação, personalização | 🟡 Médio | 🔄 Sempre atualizados |
| **getStaticProps** | Conteúdo que raramente muda | 🟢 Máxima | 📅 Atualizados no build |
| **getStaticPaths** | Páginas dinâmicas com conteúdo estático | 🟢 Máxima | 📅 Atualizados no build |
| **ISR** | Conteúdo que muda ocasionalmente | 🟢 Alta | 🔄 Atualizados automaticamente |

## 🎯 Conceitos Demonstrados

- **SSR vs SSG**: Diferenças práticas entre renderização no servidor e geração estática
- **Páginas Dinâmicas**: Como criar rotas dinâmicas com `[id].js`
- **ISR**: Revalidação incremental para manter dados atualizados
- **Performance**: Como cada método afeta a performance da aplicação
- **SEO**: Benefícios de cada abordagem para otimização de motores de busca

## 📖 Recursos Adicionais

- [Documentação oficial do Next.js](https://nextjs.org/docs)
- [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)

---

Este projeto foi criado para fins educativos como parte do curso TecBoard da Alura.
