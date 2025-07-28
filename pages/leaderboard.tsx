import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Navbar from '../components/Navbar';

interface Score {
  id: string;
  pseudo: string;
  points: number;
}

export default function Leaderboard() {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const { data } = await supabase
        .from('scores')
        .select('id, pseudo, points')
        .order('points', { ascending: false });
      if (data) setScores(data);
    };
    fetchScores();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-xl font-bold text-center mb-4">Classement</h1>
        <ul className="space-y-2">
          {scores.map((s) => (
            <li key={s.id} className="flex justify-between border p-2">
              <span>{s.pseudo}</span>
              <span>{s.points}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
