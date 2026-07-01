import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function StaticPage({ buildTime, posts, stats }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo getStaticProps - TecBoard</title>
        <meta name="description" content="Exemplo de uso do getStaticProps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exemplo de <Link href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">getStaticProps</Link>
        </h1>

        <p className={styles.description}>
          Esta página é gerada estaticamente no momento do build
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Build Time &rarr;</h2>
            <p>Página gerada em: {buildTime}</p>
            <small>Este timestamp só muda quando você faz um novo build</small>
          </div>

          <div className={styles.card}>
            <h2>Posts Simulados &rarr;</h2>
            <ul style={{ textAlign: 'left', fontSize: '14px' }}>
              {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
              ))}
            </ul>
            <small>Dados que seriam buscados de uma API no build</small>
          </div>

          <div className={styles.card}>
            <h2>Estatísticas &rarr;</h2>
            <p>Total de posts: {stats.totalPosts}</p>
            <p>Última atualização: {stats.lastUpdate}</p>
            <small>Dados computados no momento do build</small>
          </div>

          <div className={styles.card}>
            <h2>Características do SSG &rarr;</h2>
            <ul style={{ textAlign: 'left', fontSize: '14px' }}>
              <li>Gerado uma vez no build</li>
              <li>Extremamente rápido</li>
              <li>Servido via CDN</li>
              <li>Ideal para conteúdo que não muda frequentemente</li>
              <li>Pode usar ISR para revalidação</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            ← Voltar para Home
          </Link>
          <Link href="/server-side" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            Ver exemplo getServerSideProps →
          </Link>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const posts = [
    { title: 'Como usar getStaticProps no Next.js' },
    { title: 'Diferenças entre SSR e SSG' },
    { title: 'Implementando ISR para revalidação automática' },
    { title: 'Otimizando performance com Static Generation' },
    { title: 'Quando usar cada método de data fetching' },
  ]

  const buildTime = new Date().toISOString()
  
  const stats = {
    totalPosts: posts.length,
    lastUpdate: buildTime,
  }

  return {
    props: {
      buildTime,
      posts,
      stats,
    },
  }
}
