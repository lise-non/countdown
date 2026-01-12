"use client";
import { useState } from 'react';
import { CountdownView } from './Components/CountdownView';
import Link from 'next/link';

export default function Home() {
  const [bgImage, setBgImage] = useState('/photos/2.jpg');
  const [targetDate, setTargetDate] = useState('2026-12-25T00:00'); 

  return (
    <main>

      <Link href="/dashboard">
          <button className="bg-blue-600 p-3 rounded-lg text-white">
            Accéder à mes compteurs
          </button>
        </Link>
      <CountdownView 
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        bgImage={bgImage}
        setBgImage={setBgImage}
        title="Mon Nouvel An"
      />
    </main>
  );
}
//clicker sur le boutton pour afficher le datepicker
//faire form qui s'affiche au click
//pouvoir en créer de nouveaux
//pouvoir acceder sur les different compteur