'use client'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'GISCON',
    period: 'February 2024 – Present',
    description: 'Collaborated remotely with Kuwait-based teams to maintain 4+ critical web applications (.NET MVC, React). Led mobile app development for hazardous waste management and integrated OpenAI ChatGPT for spatial searches.',
    skills: ['.NET', 'React', 'Capacitor', 'OpenAI', 'AWS'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Valeo - GISACC',
    period: 'October 2022 – December 2022',
    description: 'Contributed to development of geospatial applications and learned enterprise software development practices.',
    skills: ['GIS', '.NET', 'JavaScript', 'PostgreSQL'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Masarat Misr',
    period: 'June 2022 – September 2022',
    description: 'Developed features for web applications and participated in full development lifecycle.',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
]

const skills = [
  ['Languages', ['C#', 'JavaScript', 'TypeScript', 'Python', 'Solidity', 'Go']],
  ['Backend', ['.NET', 'Node.js', 'SQL', 'OpenAI API', 'Airflow']],
  ['Frontend', ['React', 'Next.js', 'Capacitor', 'Tailwind CSS', 'Bootstrap']],
  ['Cloud & DevOps', ['AWS', 'GCP', 'Docker', 'Jenkins', 'Git']],
] as const

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Experience & <span className="text-accent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Work History</h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-6 pb-8">
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <p className="text-accent text-sm font-semibold mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              ))}
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
