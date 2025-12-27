"use client";

import { useEffect, useState } from "react";
import { getSessions, clearSessions } from "@/lib/storage";

const moodEmoji = {
  1: "😞",
  2: "😕",
  3: "😐",
  4: "🙂",
  5: "😄",
};

export default function TimelinePage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  function handleClear() {
    clearSessions();
    setSessions([]);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <button onClick={handleClear} className="text-sm text-red-600">Clear history</button>
        </div>

        {sessions.length === 0 ? (
          <div className="p-6 bg-white rounded shadow">
            <p className="text-sm text-slate-600">No sessions yet. Do a quick session and it will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.map((s, i) => (
              <div key={i} className="p-4 bg-white rounded shadow flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">{s.date}</div>
                  <div className="font-medium">{s.toolUsed || 'tool'}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-xs text-slate-500">Before</div>
                    <div className="text-2xl">{moodEmoji[s.moodBefore] || '—'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500">After</div>
                    <div className="text-2xl">{moodEmoji[s.moodAfter] || '—'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
