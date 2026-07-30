# Portfolio

A responsive portfolio site showcasing my work as a full-stack software engineer. Built with Vite, React and TypeScript on the **Organic** design system — a warm cream-and-terracotta palette with Caprasimo display type over Figtree.

## 🚀 Live Site

**[https://sawalhyahmed.github.io/portfolio](https://sawalhyahmed.github.io/portfolio)**

## ✨ Features

- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **Selected work:** The eMISK application suite for Kuwait's EPA, plus TimeSync, Dynamic Form Builder, Apartment Listing App, Sawalhy Store, PriceIntel and a shorter "also built" grid
- **Writing:** Standalone article pages under `/writing/<slug>/`, prerendered for search engines
- **Experience:** Timeline of roles and education
- **Climbing & life:** Photo mosaic
- **Contact:** Form that composes a message into your mail client, plus direct links
- **Motion:** Pointer-parallax backdrop blobs and scroll-reveal sections, both disabled under `prefers-reduced-motion`

## 🛠️ Tech Stack

- **Build Tool:** Vite (multi-page: the portfolio plus one entry per article)
- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Plain CSS driven by design-system tokens — no utility framework
- **Fonts:** Caprasimo (display) & Figtree (body), self-hosted via Fontsource
- **Package Manager:** pnpm
- **Deployment:** GitHub Pages (automated via GitHub Actions)
- **Prerendering:** Playwright renders every page to static HTML at build time
- **Image Optimization:** Sharp

## 📦 Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm

### Installation

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

```bash
pnpm build     # typecheck, bundle, then prerender every page
pnpm preview   # serve the production build
```

`pnpm build` needs Playwright's Chromium: `pnpm exec playwright install chromium`.

## 📁 Project Structure

```
portfolio/
├── index.html                      # Portfolio entry point
├── writing/<slug>/index.html       # One entry point per article
├── src/
│   ├── main.tsx                    # Portfolio bootstrap
│   ├── article.tsx                 # Shared bootstrap for every article page
│   ├── App.tsx                     # Page composition
│   ├── data/                       # ← all content lives here
│   │   ├── site.ts                 # Identity, contact details, rail nav
│   │   ├── projects.ts             # eMISK panel, project cards, "also built"
│   │   ├── experience.ts           # Timeline entries
│   │   ├── gallery.ts              # Photo mosaic
│   │   └── writing.tsx             # Article metadata and bodies
│   ├── components/                 # Presentation only, no copy
│   ├── hooks/                      # Parallax, scroll reveal, active section
│   └── styles/
│       ├── organic.css             # ← design tokens (synced from Claude Design)
│       ├── base.css                # Fonts, backdrop, reveal states
│       ├── app.css                 # Portfolio layout
│       └── article.css             # Article reader layout
├── public/                         # Images, icons, CV
└── scripts/                        # Prerender, image and icon tooling
```

## ✏️ Editing content

Content and design are deliberately separated, so most changes touch exactly one file:

| To change… | Edit |
| --- | --- |
| Name, role, email, phone, social links, CV path, hero copy | `src/data/site.ts` |
| A project card, its tags, live link or "in progress" badge | `src/data/projects.ts` |
| A job, its bullets or the education entry | `src/data/experience.ts` |
| Gallery photos, captions or tile shapes | `src/data/gallery.ts` |
| Article text, teaser or LinkedIn link | `src/data/writing.tsx` |
| Colours, fonts, radii, shadows, spacing | the `:root` tokens in `src/styles/organic.css` |
| Layout and structure | `src/styles/app.css` and `src/components/` |

Every colour, radius, shadow and font in the CSS is a `var(--…)` token, so retuning the
palette in `organic.css` recolours the whole site — never hard-code a hex.

**Adding an article** takes three steps: add an entry to `articles` in
`src/data/writing.tsx`, create `writing/<slug>/index.html` (copy an existing one and
change `data-slug`, `<title>` and the description), and register that path in `pages`
in `vite.config.ts` and in `pages` in `scripts/prerender.js`.

## 🚢 Deployment

Automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

## 📝 License

This project is open source and available under the MIT License.
