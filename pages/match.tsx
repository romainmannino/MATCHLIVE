import Navbar from '../components/Navbar';
import MatchCard from '../components/MatchCard';
import Link from 'next/link';

export default function Match() {
  return (
    <>
      <Navbar />
      <main className="p-6 text-center space-y-4">
        <MatchCard />
        <Link href="/quiz" className="text-blue-500 underline">
          Lancer le quiz
        </Link>
      </main>
    </>
  );
}
