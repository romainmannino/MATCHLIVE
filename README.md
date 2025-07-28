# MatchLive MVP

Ce projet est un exemple minimal de webapp Next.js utilisant Supabase pour l'authentification. Il affiche un match fictif OL - PSG et propose un quiz live avec un classement.
L'interface est stylee avec Tailwind CSS.

## Démarrage

1. Renseignez les variables `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans `.env.local`.
2. Installez les dépendances puis lancez le dev server :

```bash
npm install
npm run dev
```

## Pages principales

- `/` : accueil et infos du match
- `/login` : création de compte / connexion
- `/quiz` : quiz en direct
- `/leaderboard` : classement
