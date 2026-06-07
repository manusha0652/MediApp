# MediApp (Vite + Gemini)

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set `GEMINI_API_KEY` in `.env.local`
3. Start local server:
   `npm run dev`

## Deploy to Vercel

1. Push this repository to GitHub and import it into Vercel.
2. In Vercel Project Settings → **Environment Variables**, add:
   - `GEMINI_API_KEY=<your_real_key>`
3. Keep build settings:
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

After deploy, verify:
- `GET /api/health`
- AI explanation flow (`/api/gemini/explain`)
- AI recommendation flow (`/api/gemini/recommend`)

> Note: GitHub repository secrets are not automatically injected into Vercel runtime. Add `GEMINI_API_KEY` in Vercel project settings directly.
