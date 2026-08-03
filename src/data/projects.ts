/** The Work section: the eMISK feature panel, the selected-project cards, and the
    smaller "also built" grid. Add or reorder entries here — the components adapt. */

import type { IconName } from '@/components/Icon'

/** Which ramp a card's glyph and tags are tinted from: terracotta or sage. */
export type Tone = 'accent' | 'accent-2'

/** One of five hand-tuned blob silhouettes, so no two glyphs repeat a shape. */
export type Blob = 1 | 2 | 3 | 4 | 5

export type FeatureApp = {
  title: string
  href: string
  body: string
  sub?: { title: string; body: string; tags: readonly string[] }
}

export const feature = {
  builtAt: 'Built at GISCON',
  client: 'Client: Kuwait Environment Public Authority',
  title: 'eMISK Applications',
  body: "A suite of waste management apps built for Kuwait's Environment Public Authority to manage waste permits, hazardous waste transport, asbestos management, and waste treatment operations. These applications run multiple integrations with external entities, data pipelines, code-first migrations, React components in Razor pages, and are hosted on Microsoft IIS.",
  tags: ['.NET', 'Entity Framework', 'C#', 'Jenkins', 'Airflow', 'Razor', 'React', 'jQuery', 'OpenAI API'],
  /** The first app renders as the tall card; the rest stack beside it. */
  apps: [
    {
      title: 'Hazardous Waste Transport',
      href: 'https://enterprise.emisk.org/eMISKWasteHazardousWasteTransport/en',
      body: 'Electronic service to monitor waste transport operations, from inception to disposal at the receiving facility. Companies issue electronic hazardous waste manifests.',
      sub: {
        title: 'Mobile app',
        body: 'Cross-platform hazardous waste transport app built with Capacitor.',
        tags: ['Capacitor', 'Ant Design', 'Vite'],
      },
    },
    {
      title: 'Asbestos Management',
      href: 'https://enterprise.emisk.org/eMISKWasteAsbestosManagement',
      body: 'Removal, transport and disposal requests submitted and tracked online. Fully responsive across devices.',
    },
    {
      title: 'Treatment Management',
      href: 'https://enterprise.emisk.org/eMISKWasteTreatmentManagement',
      body: 'Waste treatment companies submit waste data and manage treatment operations.',
    },
    {
      title: 'Permit Management',
      href: 'https://enterprise.emisk.org/eMISKWastePermitManagement/en',
      body: 'Waste permit request & shipment release portal for companies exporting and importing waste.',
    },
  ] satisfies readonly FeatureApp[],
} as const

export type Project = {
  title: string
  kicker: string
  body: string
  tags: readonly string[]
  icon: IconName
  tone: Tone
  blob: Blob
  href?: string
  status?: string
  /** Shows a "Demo available on request" badge — for work that isn't public. */
  demo?: boolean
}

export const projects: readonly Project[] = [
  {
    title: 'TimeSync',
    kicker: 'Multi-Timezone Tracker',
    body: 'Full-stack React/TypeScript + Express app that lets remote teams track 400+ timezones with real-time clocks, solar day/night timelines, JWT-secured user dashboards, and Neon/PostgreSQL persistence for a responsive, mobile-friendly experience.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Neon'],
    icon: 'clock',
    tone: 'accent',
    blob: 1,
    href: 'https://daylight-dash.vercel.app/',
  },
  {
    title: 'Dynamic Form Builder',
    kicker: 'Nested conditional logic',
    body: 'Fastify/TypeScript + React form builder with public submissions and arbitrarily nested AND/OR/NOT visibility rules, authored through a visual condition builder. The evaluator is a shared package run identically client- and server-side, so visibility and validation cannot diverge. Prisma/PostgreSQL, deployed on Render + Supabase.',
    tags: ['Fastify', 'TypeScript', 'React', 'Prisma', 'Supabase'],
    icon: 'form',
    tone: 'accent-2',
    blob: 2,
    href: 'https://formmaker-68vw.onrender.com/',
  },
  {
    title: 'Apartment Listing App',
    kicker: 'Full-stack, infrastructure as code',
    body: 'NestJS/Prisma/PostgreSQL with presigned S3 upload URLs, unit and integration testing, and an SSR Next.js frontend. Dockerized and deployed to AWS (ECS Fargate, RDS, CloudFront) via Terraform, so it can be redeployed on demand.',
    tags: ['NestJS', 'Next.js', 'Prisma', 'Docker', 'Terraform', 'AWS'],
    icon: 'home',
    tone: 'accent',
    blob: 3,
    demo: true,
  },
  {
    title: 'Sawalhy Store',
    kicker: 'Bilingual e-commerce platform · freelance',
    body: 'Migrating an Arabic/English WooCommerce storefront for the Egyptian market: Paymob card payments, city-level shipping zones and full RTL/LTR localization across a 9,600-asset catalog. Replatforming to a headless TypeScript stack (Medusa v2 + Next.js in a Turborepo monorepo) and migrating the legacy WordPress schema from MySQL to PostgreSQL.',
    tags: ['Medusa v2', 'Next.js', 'TypeScript', 'Turborepo', 'PostgreSQL', 'Paymob', 'i18n / RTL'],
    icon: 'bag',
    tone: 'accent-2',
    blob: 4,
    status: 'In progress',
  },
  {
    title: 'Price-Intel',
    kicker: 'Price intelligence platform · built at ACS',
    body: 'Price intelligence platform tracking a product catalog across three Egyptian retailers, with an operator console for price history, run health and failure triage. Scrape failures are classified by owner, separating bot walls from stale selectors, and each one stores a screenshot and the page HTML so triage points at the fetcher or the parsing rules without a rerun. Retailers run behind per-retailer queue workers (RabbitMQ), isolating rate-limiting on one site from the other two; the concurrency invariants that make this safe are documented in the repo.',
    tags: ['Node.js', 'React', 'Playwright', 'RabbitMQ', 'Web Scraping'],
    icon: 'chart',
    tone: 'accent-2',
    blob: 5,
    demo: true,
  },
]

export type SmallProject = {
  title: string
  kicker: string
  body: string
  tags: readonly string[]
  tone: Tone | 'neutral'
}

export const alsoBuilt: readonly SmallProject[] = [
  {
    title: 'Commit–Reveal Game DApp',
    kicker: 'On-chain fair play',
    body: 'Fair-play on-chain Rock-Paper-Scissors-Spock-Lizard using a commit then reveal scheme (hash + salt) to prevent front-running, with stakes, timeouts and definitive results (win, draw or forfeit), plus automatic status checks.',
    tags: ['Solidity', 'Ethereum', 'Hardhat', 'React'],
    tone: 'accent',
  },
  {
    title: 'Browsing Session Analyzer',
    kicker: 'Product friction detection',
    body: 'Analyzes rrweb session logs to detect user-friction and failure patterns (dead clicks, rage clicks, form issues, runtime errors), then outputs prioritized findings and a readable session summary for faster product fixes.',
    tags: ['rrweb', 'NestJS', 'Next.js', 'PostgreSQL'],
    tone: 'accent-2',
  },
  {
    title: 'Air Quality Analytics Chatbot',
    kicker: 'LLM over a large SQL dataset',
    body: 'LLM-integrated chatbot over a large SQL Server air-quality dataset, built with Node.js/Express and an OpenAI query layer that translates natural-language questions into reliable data requests and returns structured results with clear user-facing summaries.',
    tags: ['OpenAI API', 'text-to-SQL', 'Node.js', 'SQL Server'],
    tone: 'accent',
  },
  {
    title: 'Traffic Data Scraper',
    kicker: 'Surrogate data pipeline',
    body: 'A traffic surrogate data pipeline on GCP that programmatically collects live travel-time estimates from public map services. Produced a historical dataset and a Tableau dashboard that gave coverage for non-instrumented corridors and informed traffic models and operational decisions.',
    tags: ['Python', 'Selenium', 'GCP', 'Tableau'],
    tone: 'neutral',
  },
  {
    title: 'Opinion Pilot',
    kicker: 'Hybrid NLP stance analysis · Masarat Misr',
    body: "An automated system that analyzes public statements to infer an individual's leanings on sensitive topics. A hybrid NLP pipeline using fine-tuned transformers and LLM reasoning to classify stances, aggregate insights and generate interpretable profiles for media and public-appearance screening.",
    tags: ['Node.js', 'Python', 'BERT', 'React'],
    tone: 'accent',
  },
]
