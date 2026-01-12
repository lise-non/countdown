import {Countdown} from './Countdown';

interface CountdownCardProps {
  item: CountdownItem;
  onDelete: (id: string) => void;
}
interface CountdownItem {
  id: string;
  title: string;
  targetDate: string;
  bgImage: string;
}

// Dans CountdownCard.tsx
import Link from 'next/link';

export const CountdownCard = ({ item, onDelete }: CountdownCardProps) => {
  return (
    <div className="relative group">
      {/* Le lien vers la page dynamique */}
      <Link href={`/dashboard/${item.id}`}>
        <div 
          className="h-48 rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-transform"
          style={{ backgroundImage: `url(${item.bgImage})`, backgroundSize: 'cover' }}
        >
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
        </div>
      </Link>

      {/* On garde le bouton delete en dehors du lien pour éviter les bugs au clic */}
      <button 
        onClick={() => onDelete(item.id)}
        className="absolute top-2 right-2 z-10 bg-red-500 p-1 rounded-full text-white"
      >
        ✕
      </button>
    </div>
  );
};