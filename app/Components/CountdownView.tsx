"use client";
import { useState } from "react";
import { Background } from "./Background";
import { Countdown } from "./Countdown";
import { DateSelector } from "./DateSelector";
import { ImageGallery } from "./ImageGallery";

interface FocusViewProps {
  targetDate: string;
  setTargetDate: (val: string) => void;
  bgImage: string;
  setBgImage: (val: string) => void;
  title?: string;
}

export const CountdownView = ({
  targetDate,
  setTargetDate,
  bgImage,
  setBgImage,
  title = "Objectif 2026",
}: FocusViewProps) => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Background imageUrl={bgImage} />

      <div className="z-10 text-white text-center p-6 bg-black/20 backdrop-blur-sm rounded-3xl">
        <h1 className="text-4xl mb-8 font-bold">{title}</h1>

        <Countdown targetDate={targetDate} />
      </div>

      <button
        onClick={() => setShowPanel(!showPanel)}
        className="rounded-full border border-transparent mt-6 p-2.5 transition-all text-slate-100 hover:bg-stone-600"
        type="button"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 20 20"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1Ò"
            d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
          />
        </svg>
      </button>

      {showPanel && (
        <div
          onClick={() => setShowPanel(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <section className="relative w-full max-w-md bg-slate-900 border border-white/20 rounded-3xl shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="p-8">
              <div className="mt-12 space-y-6">
                <DateSelector
                  onDateChange={setTargetDate}
                  currentDate={targetDate}
                />
              </div>

              <div className="mt-12">
                <p className="mb-4 opacity-80">Choisir le fond :</p>
                <ImageGallery onSelect={setBgImage} activeUrl={bgImage} />
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
