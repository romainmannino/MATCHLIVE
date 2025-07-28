export default function MatchCard() {
  // Données statiques pour OL - PSG
  const match = { home: 'OL', away: 'PSG', score: '1 - 2', minute: 75 };
  return (
    <div className="border p-4 rounded shadow inline-block">
      <h2 className="text-lg font-semibold mb-2">{match.home} vs {match.away}</h2>
      <p className="text-xl">{match.score}</p>
      <p className="text-sm text-gray-600">{match.minute}'</p>
    </div>
  );
}
