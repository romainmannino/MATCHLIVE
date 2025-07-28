// pages/index.tsx ou index.js

import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MatchLive</title>
      </Head>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
        <h1>Bienvenue sur MatchLive ⚽</h1>
        <p>L’expérience interactive pendant les matchs de foot en direct.</p>
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={() => alert("En route vers le match OL - PSG !")}
        >
          Lancer la session de match
        </button>
      </main>
    </>
  );
}
