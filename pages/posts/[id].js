import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Post({ post, buildTime }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Carregando...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title} - TecBoard</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {post.title}
        </h1>

        <p className={styles.description}>
          Exemplo de página dinâmica com getStaticProps + getStaticPaths
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Informações do Post &rarr;</h2>
            <p><strong>ID:</strong> {post.id}</p>
            <p><strong>Autor:</strong> {post.author}</p>
            <p><strong>Data:</strong> {post.date}</p>
            <p><strong>Categoria:</strong> {post.category}</p>
          </div>

          <div className={styles.card}>
            <h2>Conteúdo &rarr;</h2>
            <p>{post.content}</p>
          </div>

          <div className={styles.card}>
            <h2>Build Info &rarr;</h2>
            <p>Página gerada em: {buildTime}</p>
            <small>Esta página foi pré-gerada no build usando getStaticProps + getStaticPaths</small>
          </div>

          <div className={styles.card}>
            <h2>Como funciona &rarr;</h2>
            <ul style={{ textAlign: 'left', fontSize: '14px' }}>
              <li>getStaticPaths define quais páginas gerar</li>
              <li>getStaticProps busca dados para cada página</li>
              <li>Páginas são geradas no build</li>
              <li>URLs dinâmicas como /posts/[id]</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href="/" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            ← Voltar para Home
          </a>
          <a href="/posts" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            Ver todos os posts →
          </a>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postsData = {
    '1': {
      id: '1',
      title: 'Introdução ao Next.js',
      author: 'João Silva',
      date: '2024-01-15',
      category: 'Frontend',
      excerpt: 'Aprenda os conceitos básicos do Next.js',
      content: 'Next.js é um framework React que oferece recursos como SSR, SSG, e muito mais. Neste post, exploramos os conceitos fundamentais que todo desenvolvedor deve conhecer para começar a usar esta poderosa ferramenta.'
    },
    '2': {
      id: '2',
      title: 'Data Fetching no Next.js',
      author: 'Maria Santos',
      date: '2024-01-20',
      category: 'Tutorial',
      excerpt: 'Entenda getStaticProps, getServerSideProps e getStaticPaths',
      content: 'O Next.js oferece várias formas de buscar dados: getStaticProps para geração estática, getServerSideProps para renderização no servidor, e getStaticPaths para páginas dinâmicas. Cada método tem seus casos de uso específicos.'
    },
    '3': {
      id: '3',
      title: 'Otimização de Performance',
      author: 'Carlos Oliveira',
      date: '2024-01-25',
      category: 'Performance',
      excerpt: 'Técnicas para otimizar aplicações Next.js',
      content: 'Performance é crucial em aplicações web modernas. O Next.js oferece várias técnicas de otimização como Image Optimization, Code Splitting automático, e Incremental Static Regeneration (ISR).'
    }
  }

  const post = postsData[params.id]

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      buildTime: new Date().toISOString(),
    },
  }
}
