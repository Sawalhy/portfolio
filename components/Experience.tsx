
const experiences = [
  {
    role: 'Software Engineer',
    company: 'GISCON',
    period: 'February 2024 – Present',
    description: [
      'Collaborated remotely with Kuwait-based Product Owner and engineers to gather user requirements, implement features, and resolve 10+ production incidents with rapid response and resolution.',
      'Maintained and enhanced over 4 critical web applications (.NET MVC, React) for Kuwait\'s Environment Public Authority (EPA) and the Egyptian Environmental Affairs Agency. Delivered UI/UX improvements, new feature deployments, and performance optimizations.',
      'Led the development of a Capacitor-based mobile app for hazardous waste management, eliminating field reporting errors and reducing processing time.',
      'Integrated OpenAI\'s ChatGPT to create an AI-powered conversational assistant for spatial searches and geolocation queries, improving user experience and reducing manual support workload.',
      'Secured renewal of GISCON\'s flagship eMISK contract by delivering high-quality work and maintaining effective communication with clients and stakeholders.',
      'Proposed and implemented Airflow health checks, weekly DAG reports, and failure alerts (heartbeat, task-fail) via Discord webhooks; eliminated silent DAG failures and cut time-to-detect from hours to minutes across license-expiry and integration pipelines.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Valeo - GISACC',
    period: 'October 2021 – January 2022',
    description: [
      'Built a custom GCP dashboard, automating health checks and reducing manual monitoring effort.',
    ],
    skills: ['GCP', 'Full-Stack Development', 'Git'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Masarat Misr',
    period: 'June 2022 – September 2022',
    description: [
      'Built a traffic surrogate data pipeline on different cloud providers to programmatically collect live travel-time estimates from public map services. Produced a historical dataset and a Tableau dashboard that provided coverage for non-instrumented corridors and informed traffic models and operational decisions.',
    ],
    skills: ['Python', 'Cloud', 'Data Pipeline', 'Tableau', 'Software Development'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Valeo - GISACC',
    period: 'October 2022 – December 2022',
    description: [
      'Refactored and expanded unit testing coverage using Mockito for Valeo\'s internal project management wiki, improving maintainability, readability, and reliability of the codebase.',
    ],
    skills: ['Java', 'Mockito', 'Unit Testing', 'Full-Stack Development', 'Team Collaboration'],
  },
]

const skills = [
  ['Languages', ['C#', 'JavaScript', 'TypeScript', 'Python', 'Solidity']],
  ['Backend', ['.NET', 'Node.js', 'SQL', 'OpenAI API']],
  ['Frontend', ['React', 'Next.js', 'Capacitor', 'Razor', 'Tailwind CSS', 'Bootstrap', 'Ant Design']],
  ['Cloud & DevOps', ['AWS', 'GCP', 'Docker', 'Jenkins', 'Git', 'Airflow', 'Github Actions']],
  ['Testing & QA', ['Jest']],
] as const

export default function Experience() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Experience & <span className="text-accent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Work History</h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-6 pb-8">
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <p className="text-accent text-sm font-semibold mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-2 text-foreground/80">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((desc, i) => (
                        <li key={i} className="text-sm leading-relaxed">{desc}</li>
                      ))
                    ) : (
                      <li className="text-sm leading-relaxed">{exp.description}</li>
                    )}
                  </ul>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-xl font-bold text-foreground">B.Sc. Computer & Communications Engineering</h4>
                <p className="text-accent text-sm font-semibold mb-1">Cairo University</p>
                <p className="text-muted-foreground text-sm">2023</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {skills.map(([category, items], idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-accent transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
