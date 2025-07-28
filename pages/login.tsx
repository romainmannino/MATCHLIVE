import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return setMessage(error.message);
    if (data.user) {
      await supabase.from('profiles').insert({ id: data.user.id, pseudo });
      setMessage('Vérifiez vos mails pour confirmer votre inscription');
    }
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-md mx-auto space-y-4">
        <h1 className="text-xl font-bold text-center">Connexion</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : null)}
        />
        <div className="flex space-x-2">
          <button onClick={signIn} className="flex-1 bg-blue-600 text-white p-2">
            Se connecter
          </button>
          <button onClick={signUp} className="flex-1 bg-green-600 text-white p-2">
            Créer un compte
          </button>
        </div>
        {message && <p className="text-center text-sm">{message}</p>}
      </div>
    </>
  );
}
