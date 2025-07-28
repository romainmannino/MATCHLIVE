import React from "react";
import Head from "next/head";
import Navbar from "./Navbar"; // si tu as une barre de navigation

export default function Home() {
  return (
    <>
      <Head>
        <title>MatchLive - Accueil</title>
      </Head>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Bienvenue sur MatchLive ⚽</h1>
        <p>Page d'accueil interactive pour suivre le match en direct.</p>
        {/* Tu peux ajouter ici des composants comme <MatchCard />, <QuizCard />, etc. */}
      </main>
    </>
  );
}

