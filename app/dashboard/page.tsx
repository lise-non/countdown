"use client";
import { CountdownCard } from '../Components/CountDownCard';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AddCountdownForm } from '../Components/Form';

export default function Dashboard() {
  const [countdowns, setCountdowns] = useLocalStorage<CountdownItem[]>("test",[
    { id: '1', title: 'Noël', targetDate: '2026-12-25T00:00', bgImage: '/photos/2.jpg' },
    { id: '2', title: 'Vacances', targetDate: '2026-07-15T09:00', bgImage: '/photos/4.jpg' }
  ]);

    const deleteCountdown = (id: string) => {
    setCountdowns(countdowns.filter(c => c.id !== id));
  };
  const handleAdd = (data: { title: string, targetDate: string, bgImage: string }) => {
    const newEntry = {
      id: crypto.randomUUID(),
      ...data
    };
    setCountdowns([...countdowns, newEntry]);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Mes Compteurs</h1>
        <div className="p-8 max-w-4xl mx-auto space-y-12">
      <section>
        <AddCountdownForm onAdd={handleAdd} />
      </section>
      </div>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-700">
          + Nouveau Compteur
        </button>
      </header>

      {/* La grille de compteurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countdowns.map((item) => (
          <CountdownCard key={item.id} item={item} onDelete={deleteCountdown} />
        ))}
      </div>
    </div>
  );
}