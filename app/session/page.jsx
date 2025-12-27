"use client";

import { useEffect, useState } from "react";
import BreathingTool from "@/components/BreathingTool";
import CompletionCard from "@/components/CompletionCard";

const TOOLS = [
  { id: "breathing", title: "Calm Breathing", duration: 60 },
  { id: "grounding", title: "5-4-3-2-1 Grounding", duration: 45 },
  { id: "brain-dump", title: "Brain Dump", duration: 60 },
  { id: "positive-reset", title: "Positive Reset", duration: 30 },
];

export default function SessionPage() {
  const [tool, setTool] = useState(TOOLS[0]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const random = TOOLS[Math.floor(Math.random() * TOOLS.length)];
    setTool(random);
    if (typeof window !== "undefined") {
      localStorage.setItem("mm-current-tool", random.id);
    }
  }, []);

  if (isDone) {
    return <CompletionCard />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-slate-800 mb-1">{tool.title}</h2>
        <p className="text-sm text-slate-600 mb-4">Take a tiny pause. This will take less than a minute.</p>

        {tool.id === "breathing" && (
          <BreathingTool duration={tool.duration} onComplete={() => setIsDone(true)} />
        )}

        {/* Later: add other tools here */}
      </div>
    </main>
  );
}
