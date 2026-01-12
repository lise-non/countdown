"use client";
import { Background } from './Background';
import {Countdown} from './Countdown';
import { DateSelector } from './DateSelector';
import { ImageGallery } from './ImageGallery';

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
  title = "Objectif 2026" 
}: FocusViewProps) => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <Background imageUrl={bgImage} />

      <div className="z-10 text-white text-center p-6 bg-black/20 backdrop-blur-sm rounded-3xl">
        <h1 className="text-4xl mb-8 font-bold">{title}</h1>
        
        <Countdown targetDate={targetDate} />
        
        <div className='mt-12 space-y-6'>
          <DateSelector onDateChange={setTargetDate} currentDate={targetDate}/>
        </div>
        
        <div className="mt-12">
          <p className="mb-4 opacity-80">Choisir le fond :</p>
          <ImageGallery onSelect={setBgImage} activeUrl={bgImage} />
        </div>
      </div>

      <button className="rounded-full border border-transparent mt-6 p-2.5 transition-all text-slate-100 hover:bg-amber-500" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </button>
    </main>
  );
};