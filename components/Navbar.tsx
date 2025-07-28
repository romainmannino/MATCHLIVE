import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex space-x-4">
      <Link href="/" className="hover:underline">
        Accueil
      </Link>
      <Link href="/leaderboard" className="hover:underline">
        Classement
      </Link>
      <Link href="/login" className="ml-auto hover:underline">
        Connexion
      </Link>
    </nav>
  );
}
