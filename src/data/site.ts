/** Identity, contact details and the rail navigation. Edit here, not in components. */

/** Resolves a /public asset against the deploy base (`/portfolio/` in production). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const site = {
  name: 'Ahmed Sameh El-Sawalhy',
  brand: 'Sawalhy.',
  role: 'Full Stack Engineer · AI Integration',
  blurb: 'Cairo, Egypt. Building scalable software, climbing hard rock.',
  /** Hero status pill. Set to a short line (e.g. 'Open to full-time roles') to show it; empty hides it. */
  availability: '',
  headline: ['AI-enabled', 'software', 'engineer.'],
  intro:
    'Full Stack Software Engineer from Cairo, Egypt. I build software end to end and I use AI where it actually helps. I push limits both in code and on the climbing wall.',
  heroImage: { src: '/TannourineDay.jpg', alt: 'Climbing in Tannourine, Lebanon' },
  email: 'sawalhyahmed@gmail.com',
  phone: { label: '+20 106 576 8517', href: 'tel:+201065768517' },
  github: 'https://github.com/Sawalhy',
  linkedin: 'https://linkedin.com/in/sawalhyahmed',
  /** Drop the PDF in /public under this name to activate the CV links. */
  cv: '/Ahmed-Sawalhy-CV.pdf',
  footer: 'Built by Ahmed Sameh El-Sawalhy. Cairo, Egypt',
} as const

/** Order here drives the rail's order; keep it in step with the section order in App.tsx. */
export const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'writing', label: 'Writing' },
  { id: 'climbing', label: 'Climbing' },
  { id: 'contact', label: 'Contact' },
] as const

export const contactCopy = {
  title: "Let's connect.",
  body: 'Whether you want to collaborate, chat, or grab coffee. I’m always interested in new opportunities.',
} as const
