"use client";
import { useCountdown } from "../hooks/useCountdown";

export const Countdown = ({ targetDate } : {targetDate: Date}) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex justify-center gap-4 font-mono text-2xl">
      <div>
        {days}
        <span>j</span>
      </div>
      <div>
        {hours}
        <span>h</span>
      </div>
      <div>
        {minutes}
        <span>m</span>
      </div>
      <div>
        {seconds}
        <span>s</span>
      </div>
    </div>
  );
};
