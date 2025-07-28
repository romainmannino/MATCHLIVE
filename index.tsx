
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <Head><title>MatchLive</title></Head>
      <h1>Bienvenue sur MatchLive</h1>
      <p>Match du jour : <strong>OL - PSG</strong></p>
      <p>Connecte-toi pour participer !</p>
    </div>
  )
}
