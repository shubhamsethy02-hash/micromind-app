"use client";

import { useEffect, useState } from "react";

export default function BreathingTool({ onComplete }) {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [phase, setPhase] = useState("Breathe in");
  const isDone = secondsLeft === 0;

  useEffect(() => {
    if (isDone) return;

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    const phaseInterval = setInterval(() => {
      setPhase((p) => {
        if (p === "Breathe in") return "Hold";
        if (p === "Hold") return "Breathe out";
        return "Breathe in";
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, [isDone]);

  useEffect(() => {
    if (isDone && onComplete) {
      onComplete();
    }
  }, [isDone, onComplete]);

  if (isDone) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white shadow-lg animate-pulse">
            <div className="text-center">
              <p className="text-2xl font-bold">{secondsLeft}s</p>
              <p className="text-sm mt-2 opacity-80">{phase}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-slate-600 text-center text-sm max-w-xs">
        Follow the timer and breathe naturally. You've got this. 🫁
      </p>
    </div>
  );
}
