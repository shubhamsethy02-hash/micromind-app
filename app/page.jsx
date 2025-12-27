"use client";

import MoodSelector from "@/components/MoodSelector";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-slate-800 mb-2">Micro Mind</h1>
        <p className="text-center text-slate-600 mb-6">A quick, private mental reset for teens. Not therapy, just tiny calm moments.</p>
        <MoodSelector />
      </div>
    </main>
  );
}
