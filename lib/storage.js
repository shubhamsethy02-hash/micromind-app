// lib/storage.js
export function saveSession(entry) {
  if (typeof window === "undefined") return;
  const existing = JSON.parse(localStorage.getItem("mm-sessions") || "[]");
  existing.push(entry);
  localStorage.setItem("mm-sessions", JSON.stringify(existing));
}

export function getSessions() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("mm-sessions") || "[]");
}

export function clearSessions() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("mm-sessions");
}
