import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function ServerSidePage({ timestamp, randomNumber, userAgent }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo getServerSideProps - TecBoard</title>
        <meta name="description" content="Exemplo de uso do getServerSideProps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exemplo de <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">getServerSideProps</a>
        </h1>

        <p className={styles.description}>
          Esta página é renderizada no servidor a cada requisição
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Timestamp do Servidor &rarr;</h2>
            <p>Gerado no servidor: {timestamp}</p>
            <small>Atualize a página para ver um novo timestamp</small>
          </div>

          <div className={styles.card}>
            <h2>Número Aleatório &rarr;</h2>
            <p>Número gerado: {randomNumber}</p>
            <small>Cada requisição gera um número diferente</small>
          </div>

          <div className={styles.card}>
            <h2>User Agent &rarr;</h2>
            <p>{userAgent}</p>
            <small>Informação do navegador capturada no servidor</small>
          </div>

          <div className={styles.card}>
            <h2>Características do SSR &rarr;</h2>
            <ul style={{ textAlign: 'left', fontSize: '14px' }}>
              <li>Renderizado no servidor a cada requisição</li>
              <li>Sempre tem dados atualizados</li>
              <li>Mais lento que páginas estáticas</li>
              <li>Ideal para dados dinâmicos</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href="/" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            ← Voltar para Home
          </a>
          <a href="/static" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            Ver exemplo getStaticProps →
          </a>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  await new Promise(resolve => setTimeout(resolve, 500))

  const timestamp = new Date().toISOString()
  const randomNumber = Math.floor(Math.random() * 1000)
  const userAgent = context.req.headers['user-agent'] || 'Unknown'

  return {
    props: {
      timestamp,
      randomNumber,
      userAgent,
    },
  }
}
