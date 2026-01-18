"use client";
import { useParams } from 'next/navigation';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { CountdownView } from '../../Components/CountdownView';
import Link from 'next/link';

export default function CountdownDetailPage() {
  const params = useParams();
  const [countdowns, setCountdowns] = useLocalStorage<any[]>("test", []);

  const currentIndex = countdowns.findIndex(c => c.id === params.id);
  const currentCountdown = countdowns[currentIndex];

  const updateBgImage = (newUrl: string) => {
    if (currentIndex === -1) return;

    const updatedList = [...countdowns];
    updatedList[currentIndex] = { ...currentCountdown, bgImage: newUrl };
    setCountdowns(updatedList);
  };

  const updateDate = (newDate: string) => {
    if (currentIndex === -1) return;
      
    const updatedList = [...countdowns];
    updatedList[currentIndex] = { ...currentCountdown, targetDate: newDate };
    setCountdowns(updatedList);

  }

  if (!currentCountdown) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>Compteur introuvable...</p>
        <Link href="/dashboard" className="text-blue-500 underline">Retour au dashboard</Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <Link href="/dashboard" className="fixed top-6 left-6 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-black">
        ← Retour
      </Link>

      <CountdownView 
        title={currentCountdown.title}
        targetDate={currentCountdown.targetDate}
        bgImage={currentCountdown.bgImage}
        setTargetDate={updateDate} 
        setBgImage={updateBgImage}
      />
    </div>
  );
}