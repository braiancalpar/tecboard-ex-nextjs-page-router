import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function PostsIndex({ posts, buildTime }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts - TecBoard</title>
        <meta name="description" content="Lista de posts do blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de Posts
        </h1>

        <p className={styles.description}>
          Exemplo de página de índice gerada estaticamente
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id} className={styles.card}>
              <h2>{post.title} &rarr;</h2>
              <p>{post.excerpt}</p>
              <small>Por {post.author} em {post.date}</small>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div className={styles.card}>
            <h2>Informações da Página &rarr;</h2>
            <p>Página gerada em: {buildTime}</p>
            <p>Total de posts: {posts.length}</p>
            <small>Esta página e todos os posts foram pré-gerados no build</small>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className={styles.card} style={{ display: 'inline-block' }}>
            ← Voltar para Home
          </Link>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = [
    {
      id: '1',
      title: 'Introdução ao Next.js',
      author: 'João Silva',
      date: '2024-01-15',
      excerpt: 'Aprenda os conceitos básicos do Next.js'
    },
    {
      id: '2',
      title: 'Data Fetching no Next.js',
      author: 'Maria Santos',
      date: '2024-01-20',
      excerpt: 'Entenda getStaticProps, getServerSideProps e getStaticPaths'
    },
    {
      id: '3',
      title: 'Otimização de Performance',
      author: 'Carlos Oliveira',
      date: '2024-01-25',
      excerpt: 'Técnicas para otimizar aplicações Next.js'
    }
  ]

  return {
    props: {
      posts,
      buildTime: new Date().toISOString(),
    },
  }
}
