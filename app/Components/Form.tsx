"use client";
import { useState } from "react";

interface AddCountdownFormProps {
  onAdd: (newCounter: {
    title: string;
    targetDate: string;
    bgImage: string;
  }) => void;
}

export const AddCountdownForm = ({ onAdd }: AddCountdownFormProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [bg, setBg] = useState("/photos/3.jpg");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return alert("Remplis tous les champs !");

    onAdd({
      title,
      targetDate: date,
      bgImage: bg,
    });

    setTitle("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-6 rounded-2xl backdrop-blur-md space-y-4"
    >
      <h2 className="text-xl font-bold text-white">Nouveau Compteur</h2>

      <div>
        <label className="block text-sm text-gray-300">Nom de événement</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Vacances, Anniversaire..."
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300">Date et Heure</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Ajouter le compteur
      </button>
    </form>
  );
};
