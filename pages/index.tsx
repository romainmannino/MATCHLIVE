import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import MatchCard from '../components/MatchCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>MatchLive - Accueil</title>
      </Head>
      <Navbar />
      <main className="p-6 text-center space-y-4">
        <h1 className="text-2xl font-bold">Bienvenue sur MatchLive</h1>
        <MatchCard />
        <p>
          <Link href="/quiz" className="text-blue-500 underline">
            Participer au quiz en direct
          </Link>
        </p>
      </main>
    </>
  );
}
