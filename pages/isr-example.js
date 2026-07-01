import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function ISRExample({ data, lastUpdate }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo ISR - TecBoard</title>
        <meta name="description" content="Exemplo de Incremental Static Regeneration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exemplo de <Link href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration">ISR</Link>
        </h1>

        <p className={styles.description}>
          Incremental Static Regeneration - O melhor dos dois mundos
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Dados Atualizados &rarr;</h2>
            <p>Última atualização: {lastUpdate}</p>
            <p>Valor atual: {data.value}</p>
            <small>Esta página é revalidada a cada 30 segundos</small>
          </div>

          <div className={styles.card}>
            <h2>Status do Sistema &rarr;</h2>
            <p>CPU: {data.system.cpu}%</p>
            <p>Memória: {data.system.memory}%</p>
            <p>Usuários online: {data.system.usersOnline}</p>
            <small>Dados simulados que seriam buscados de uma API</small>
          </div>

          <div className={styles.card}>
            <h2>Como o ISR Funciona &rarr;</h2>
            <ul style={{ textAlign: 'left', fontSize: '14px' }}>
              <li>Página gerada estaticamente no build</li>
              <li>Servida rapidamente como SSG</li>
              <li>Revalidada em background após o tempo definido</li>
              <li>Usuários sempre veem a versão atual</li>
              <li>Performance + dados atualizados</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Configuração &rarr;</h2>
            <p>Revalidate: 30 segundos</p>
            <p>Fallback: false</p>
            <small>Definido no getStaticProps</small>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            Atualize a página várias vezes. Após 30 segundos, você verá dados atualizados.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className={styles.card}
            style={{ 
              display: 'inline-block', 
              cursor: 'pointer', 
              border: 'none', 
              background: 'transparent',
              margin: '0 1rem'
            }}
          >
            🔄 Recarregar Página
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            ← Voltar para Home
          </Link>
          <Link href="/static" className={styles.card} style={{ display: 'inline-block', margin: '0 1rem' }}>
            Ver getStaticProps básico →
          </Link>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = {
    value: Math.floor(Math.random() * 1000),
    system: {
      cpu: Math.floor(Math.random() * 100),
      memory: Math.floor(Math.random() * 100),
      usersOnline: Math.floor(Math.random() * 500) + 100,
    }
  }

  const lastUpdate = new Date().toISOString()

  return {
    props: {
      data,
      lastUpdate,
    },
    revalidate: 30,
  }
}
