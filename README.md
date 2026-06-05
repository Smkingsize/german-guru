# GermanGuru

Landing page for **GermanGuru** — conversational German lessons with Ahmad and Ben.

**Live site:** [GermanGuru](https://german-guru-e9we.vercel.app/))

---

## Stack

| Tool | Version |
|------|---------|
| Next.js (App Router) | 15 |
| React | 19 |
| Tailwind CSS | 3.4 |
| TypeScript | 5 |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts) |

---

## Project Structure

```
german_guru/
├── public/
│   └── team.JPG              # Team photo (served as /team.JPG)
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind base + custom animations
│   │   ├── layout.tsx        # Root layout, fonts, SEO metadata, OG image
│   │   └── page.tsx          # Single page — assembles all sections
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav, mobile menu
│   │   ├── Hero.tsx          # Hero section with photo frame
│   │   ├── About.tsx         # Teacher bios + team photo
│   │   ├── Courses.tsx       # Teaching philosophy pillars
│   │   ├── HowItWorks.tsx    # 3-step process
│   │   ├── Pricing.tsx       # 3 pricing cards
│   │   ├── Contact.tsx       # WhatsApp CTA + Instagram
│   │   └── Footer.tsx        # Links + copyright
│   └── hooks/
│       └── useScrollReveal.ts
├── .github/workflows/
│   └── deploy.yml            # CI: runs npm build on every push to main
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Run Locally

```bash
npm install
npm run dev       # dev server → http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

---

## Deploy to Vercel

1. Push repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → import repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Every push to `main` triggers a new deploy automatically

After deploying, add `metadataBase` in `src/app/layout.tsx`:

```ts
metadataBase: new URL("https://your-site.vercel.app"),
```

---

## Update Contact Details

| File | Line | What to change |
|------|------|----------------|
| `src/components/Contact.tsx` | 6 | `WHATSAPP_NUMBER` |
| `src/components/Footer.tsx` | 2–3 | `WHATSAPP_NUMBER`, `INSTAGRAM_HANDLE` |

WhatsApp format: country code + number, no `+` or spaces — e.g. `4915231359326`

---

## Add Photos

Drop images into `public/` then use Next.js `<Image>`:

```tsx
import Image from "next/image";

<Image src="/your-photo.jpg" alt="..." fill className="object-cover" />
```

To swap the hero placeholder for a real photo, edit `src/components/Hero.tsx` — the right-column div is clearly marked.
