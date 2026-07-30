/** The Experience timeline, newest first. The last entry is the education marker. */

export type TimelineEntry = {
  period: string
  role: string
  /** Rendered after the role in the accent colour, e.g. "· GISCON". */
  org?: string
  points?: readonly string[]
  tags?: readonly string[]
  /** Dot colour: `current` = terracotta, `sage` = the second accent, default = faded. */
  marker?: 'current' | 'sage'
  /** Education entries show the school as a sage subtitle instead of bullets. */
  school?: string
}

export const timeline: readonly TimelineEntry[] = [
  {
    period: 'Present · Alongside full-time',
    role: 'Freelance Engineer',
    org: '· Independent',
    marker: 'sage',
    points: [
      'Replatforming a bilingual Egyptian e-commerce storefront (Sawalhy Store) onto a headless TypeScript stack: Medusa v2, Next.js, Paymob payments and a 9,600-asset catalog migration.',
      'Built PriceIntel, a multi-retailer price tracking service on RabbitMQ message queues with scheduled runs and automatic change flagging.',
    ],
  },
  {
    period: 'February 2024 – Present',
    role: 'Software Engineer',
    org: '· GISCON',
    marker: 'current',
    points: [
      'Collaborated remotely with Kuwait-based Product Owner and engineers to gather user requirements, implement features, and resolve 10+ production incidents with rapid response and resolution.',
      "Maintained and enhanced over 4 critical web applications (.NET MVC, React) for Kuwait's Environment Public Authority and the Egyptian Environmental Affairs Agency, delivering UI/UX improvements, new feature deployments and performance optimizations.",
      'Led the development of a Capacitor-based mobile app for hazardous waste management, eliminating field reporting errors and reducing processing time.',
      "Integrated OpenAI's ChatGPT to create an AI-powered conversational assistant for spatial searches and geolocation queries, improving user experience and reducing manual support workload.",
      'Built an LLM-integrated air quality analytics chatbot on top of a large SQL Server dataset using Node.js/Express and an OpenAI API query layer, translating natural-language questions into reliable data requests and returning structured results with clear user-facing summaries.',
      "Secured renewal of GISCON's flagship eMISK contract by delivering high-quality work and maintaining effective communication with clients and stakeholders.",
      'Proposed and implemented Airflow health checks, weekly DAG reports, and failure alerts via Discord webhooks; eliminated silent DAG failures and cut time-to-detect from hours to minutes.',
    ],
  },
  {
    period: 'June 2023 – January 2024',
    role: 'Software Engineer',
    org: '· ACS',
    points: [
      "Worked on the backend of a family planning software system in partnership with Egypt's Ministry of Health, implementing RESTful APIs and database queries.",
      'Supported distribution and administration of multiple contraceptive types used by ministry administrators, nurses, and doctors across Egypt.',
    ],
  },
  {
    period: 'October 2022 – December 2022',
    role: 'Engineering Intern',
    org: '· Valeo - GISACC',
    points: [
      "Refactored and expanded unit testing coverage using Mockito for Valeo's internal project management wiki, improving maintainability, readability, and reliability of the codebase.",
    ],
    tags: ['Java', 'Mockito', 'Unit Testing'],
  },
  {
    period: 'June 2022 – September 2022',
    role: 'Engineering Intern',
    org: '· Masarat Misr',
    points: [
      'Built a traffic surrogate data pipeline on GCP to collect live travel-time estimates from public map services, producing a historical dataset and Tableau dashboard that informed traffic models and operational decisions.',
    ],
    tags: ['Python', 'Cloud', 'Data Pipeline', 'Tableau'],
  },
  {
    period: 'October 2021 – January 2022',
    role: 'Engineering Intern',
    org: '· Valeo - GISACC',
    points: ['Built a custom GCP dashboard, automating health checks and reducing manual monitoring effort.'],
    tags: ['GCP', 'Full-Stack', 'Git'],
  },
  {
    period: '2023 · Education',
    role: 'B.Sc. Computer & Communications Engineering',
    school: 'Cairo University',
    marker: 'sage',
  },
]
