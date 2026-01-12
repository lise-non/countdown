interface DateSelectorProps {
  onDateChange: (newDate: string) => void;
  currentDate: string;
}

export const DateSelector = ({ onDateChange, currentDate }: DateSelectorProps) => {
  return (
    <div className="p-4 bg-black/30 rounded-xl backdrop-blur-md border border-white/10">
      <label className="block text-white text-sm mb-2 font-medium">
        Choisir une nouvelle échéance :
      </label>
      <input 
        type="datetime-local" 
        value={currentDate}
        onChange={(e) => onDateChange(e.target.value)}
        className="w-full bg-gray-900 text-white p-2 rounded-lg outline-none focus:ring-2 ring-blue-500 transition-all"
      />
    </div>
  );
};