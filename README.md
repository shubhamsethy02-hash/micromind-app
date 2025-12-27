# Micro Mind

Micro Mind is a quick, private mental reset app for teenagers — tiny calm moments in under a minute. It is not therapy.

## What is Micro Mind?

Micro Mind helps teens feel calm, focused, and better during stressful moments. It gives a 30–60 second activity (breathing, grounding, brain-dump, quick prompts) and asks how you feel before and after. No accounts. No data sharing.

## Why it exists

- Fast: takes less than a minute
- Private: stores sessions locally on the device (no server required)
- Teen-friendly language and short exercises
- Works on laptop and phone

## How it works (user flow)

1. Open the app
2. Choose how you feel (emoji) — stored locally as "before"
3. App gives a micro-activity (30–60s)
4. After the activity, choose how you feel now — stored as "after"
5. Session saved locally and shown on the timeline

## Local development

Requirements:
- Node.js (18+ recommended)
- npm

Install and run:

```bash
cd C:\Users\shubh\micromind
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

The app uses the Next.js App Router and Tailwind CSS.

## Project structure (important files)

- `app/` — Next App Router pages
  - `app/page.jsx` — Home (mood selector)
  - `app/session/page.jsx` — Session / tool runner
  - `app/timeline/page.jsx` — Timeline (stores sessions locally)
  - `app/safety/page.jsx` — Safety & support info
- `components/` — UI building blocks
  - `MoodSelector.jsx`, `BreathingTool.jsx`, `CompletionCard.jsx`
- `lib/storage.js` — localStorage helpers (`saveSession`, `getSessions`)
- `tailwind.config.cjs` — Tailwind configuration
- `app/globals.css` — Tailwind directives + custom CSS

## Data & Privacy

All data is stored locally in `localStorage` under `mm-sessions` and never leaves the device. No sign-in required.

## Next steps (suggested)

- Implement the timeline to render saved sessions (`lib/storage.js` already provides helpers).
- Add more micro-tools (grounding, brain-dump, prompts).
- Add accessibility checks and small animations.
- Convert to TypeScript (`.tsx`) if you want stronger types.
- Push to GitHub and deploy to Vercel for a live link.

## Contributing / Notes for me (dev)

- Files are currently JavaScript (`.jsx`). If you prefer TypeScript I can convert files to `.tsx` and add types.
- To push to GitHub, create a repo and run:

```bash
git remote add origin https://github.com/<username>/micromind.git
git branch -M main
git push -u origin main
```

If you'd like, I can create the README commit now and push to GitHub for you (I will need a repo name or your authorization).

---

Micro Mind — tiny resets, big difference. 🧠This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
