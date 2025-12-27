"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const moods = [
  { emoji: "😞", score: 1, label: "Really low" },
  { emoji: "😕", score: 2, label: "Not great" },
  { emoji: "😐", score: 3, label: "Okay" },
  { emoji: "🙂", score: 4, label: "Pretty good" },
  { emoji: "😄", score: 5, label: "Feeling bright" },
];

export default function MoodSelector() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const handleSelect = (mood) => {
    setSelected(mood.score);
    if (typeof window !== "undefined") {
      localStorage.setItem("mm-current-mood-before", String(mood.score));
    }
    router.push("/session");
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-center text-slate-800 mb-4">
        How are you feeling right now?
      </h2>
      <div className="flex justify-between gap-2 mb-3">
        {moods.map((m) => (
          <button
            key={m.score}
            onClick={() => handleSelect(m)}
            className={`flex-1 flex flex-col items-center py-3 rounded-2xl border transition ${
              selected === m.score ? "border-purple-500 bg-purple-50" : "border-slate-200 bg-white/60"
            }`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <span className="text-xs mt-1 text-slate-600">{m.label}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-center text-slate-500">
        This is private and stays on your device.
      </p>
    </div>
  );
}
