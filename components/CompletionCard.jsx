"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveSession } from "@/lib/storage";

const moods = [
  { emoji: "😞", score: 1 },
  { emoji: "😕", score: 2 },
  { emoji: "😐", score: 3 },
  { emoji: "🙂", score: 4 },
  { emoji: "😄", score: 5 },
];

export default function CompletionCard() {
  const router = useRouter();
  const [selectedAfter, setSelectedAfter] = useState(null);

  const handleComplete = () => {
    if (typeof window !== "undefined") {
      const moodBefore = parseInt(
        localStorage.getItem("mm-current-mood-before") || "3"
      );
      const toolUsed = localStorage.getItem("mm-current-tool") || "Breathing";

      saveSession({
        date: new Date().toISOString().split("T")[0],
        moodBefore,
        moodAfter: selectedAfter,
        toolUsed,
      });
    }
    router.push("/timeline");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-xl font-semibold text-center text-slate-800">
        How are you feeling now?
      </h2>
      <div className="flex justify-between gap-3">
        {moods.map((m) => (
          <button
            key={m.score}
            onClick={() => setSelectedAfter(m.score)}
            className={`w-16 h-16 rounded-2xl border transition ${
              selectedAfter === m.score
                ? "border-purple-500 bg-purple-50"
                : "border-slate-200 bg-white/60"
            }`}
          >
            <span className="text-2xl">{m.emoji}</span>
          </button>
        ))}
      </div>
      <button
        onClick={handleComplete}
        disabled={!selectedAfter}
        className="w-full px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Save & View History
      </button>
    </div>
  );
}
