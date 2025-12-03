// Helper to get image path with base URL
const getImagePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

const projects = [
    {
        id: 1,
        title: 'TimeSync - Multi-Timezone Tracker',
        description: 'Full-stack React/TypeScript + Express app that lets remote teams track 400+ timezones with real-time clocks, solar day/night timelines, JWT-secured user dashboards, and Neon/PostgreSQL persistence for a responsive, mobile-friendly experience.',
        tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Neon'],
        image: '/timesync-preview.jpg',
        link: 'https://daylight-dash.vercel.app/',
        hasLink: true,
    },
    {
        id: 2,
        title: 'PriceIntel E-commerce Scraper',
        description: 'Web interface to track prices across multiple products and multiple retailers with scheduled runs that flags price changes automatically.',
        tags: ['Web Scraping', 'Node.js', 'React', 'Database', 'Playwright'],
        image: '/Priceintel.jpg',
        link: '#',
        isWorkInProgress: true,
    },
    {
        id: 3,
        title: 'Traffic Data Scraper',
        description: 'Built a traffic surrogate data pipeline on different cloud providers to programmatically collect live travel-time estimates from public map services. Produced a historical dataset and a Tableau dashboard that provided coverage for non-instrumented corridors and informed traffic models and operational decisions.',
        tags: ['Python', 'Selenium', 'AWS', 'Azure', 'Tableau'],
        image: '/traffic-map.jpg',
        link: '#',
        hasLink: false,
    },
    {
        id: 4,
        sectionTitle: 'eMISK Applications',
        sectionDescription: 'A suite of waste management apps built for Kuwait\'s Environment Public Authority (EPA) to manage waste permits, hazardous waste transport, asbestos management, and waste treatment operations. These applications run multiple integrations with external entities, data pipelines, code-first migrations, React components in Razor pages, and are hosted on Microsoft IIS.',
        tags: ['.NET', 'Entity Framework', 'C#', 'Jenkins', 'Airflow', 'Razor', 'React', 'jQuery', 'OpenAI API', 'Discord API'],
        isSectionHeader: true,
    },
    {
        id: 6,
        title: 'Hazardous Waste Transport',
        description: 'Electronic service to monitor waste transport operations, from inception to disposal at the receiving facility. Allows companies to issue electronic hazardous waste manifests.',
        tags: [],
        image: '/transport.jpg',
        link: 'https://enterprise.emisk.org/eMISKWasteHazardousWasteTransport/en',
        hasLink: true,
        isEmiskProject: true,
        subProjects: [
            {
                id: 7,
                title: 'Hazardous Waste Transport Mobile App',
                description: 'Mobile application for hazardous waste transport management, built with Capacitor for cross-platform deployment.',
                tags: ['Capacitor', 'Ant Design', 'Vite'],
                image: null,
                link: '#',
                hasLink: false,
            },
        ],
    },
    {
        id: 8,
        title: 'Asbestos Management',
        description: 'Electronic service for asbestos removal, transport, and disposal requests. Enables companies to submit and track asbestos management requests online. Fully responsive design for optimal experience across all devices.',
        tags: [],
        image: '/asbestos.jpg',
        link: 'https://enterprise.emisk.org/eMISKWasteAsbestosManagement',
        hasLink: true,
        isEmiskProject: true,
    },
    {
        id: 9,
        title: 'Treatment Management',
        description: 'Electronic service for waste treatment companies to submit waste data and manage treatment operations.',
        tags: [],
        image: '/treatment.jpg',
        link: 'https://enterprise.emisk.org/eMISKWasteTreatmentManagement',
        hasLink: true,
        isEmiskProject: true,
    },
    {
        id: 5,
        title: 'Permit Management',
        description: 'Waste Permit Request & Shipment Release System - An online portal that enables companies engaged in waste export and import to issue their permits electronically.',
        tags: [],
        image: '/permit.jpg',
        link: 'https://enterprise.emisk.org/eMISKWastePermitManagement/en',
        hasLink: true,
        isEmiskProject: true,
    },
    // {
    //     id: 10,
    //     title: 'IFSC-Compliant Climbing Competition Judge',
    //     description: 'An open-source tool that automates scoring for climbing competitions using official IFSC rules. It streamlines judge workflows by tracking attempts, tops, zones, and time, then producing fully compliant rankings in real time. Designed for accuracy, transparency, and ease of use, it supports both Boulder and Lead formats and can be integrated into local comps or larger events.',
    //     tags: [],
    //     image: '/ifsc.jpg',
    //     link: '#',
    //     isWorkInProgress: true,
    // },
    {
        id: 11,
        title: 'Opinion Pilot',
        description: 'Built an automated system that analyzes public statements to infer an individual’s leanings on sensitive topics. Developed a hybrid NLP pipeline using fine-tuned transformers and LLM reasoning to classify stances, aggregate insights, and generate clear, interpretable profiles for media and public-appearance screening.',
        tags: ['Node.js', 'Python', 'BERT', 'React', 'NLP', 'Feature Extraction'],
        image: '',
        link: '#',
    },
]

export default function Projects() {
    return (
        <section className="py-16 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                    Selected <span className="text-accent">Work</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
                    Here are some projects I've built that showcase my approach to solving problems with code.
                </p>

                <div className="space-y-12">
                    {projects.map((project, index) => {
                        if (project.isSectionHeader) {
                            // Find all projects flagged for this section
                            const sectionProjects = []
                            for (let i = index + 1; i < projects.length; i++) {
                                if (projects[i].isSectionHeader) break
                                if (!projects[i].isEmiskProject) break
                                sectionProjects.push(projects[i])
                            }

                            return (
                                <div key={project.id}>
                                    <div className="mb-6">
                                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{project.sectionTitle}</h3>
                                        <p className="text-muted-foreground text-lg mb-4">{project.sectionDescription}</p>
                                        {/* Section-level tags */}
                                        {project.tags && project.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Wrapping container for section projects */}
                                    <div className="space-y-12 p-6 md:p-8 rounded-xl border-2 border-accent/30 bg-card/50 backdrop-blur-sm">
                                        {sectionProjects.map((sectionProject) => (
                                            <div key={sectionProject.id} className="space-y-6">
                                                <a
                                                    href={sectionProject.link || '#'}
                                                    target={sectionProject.link !== '#' && sectionProject.hasLink ? "_blank" : undefined}
                                                    rel={sectionProject.link !== '#' && sectionProject.hasLink ? "noopener noreferrer" : undefined}
                                                    className="group block"
                                                >
                                                    <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-colors duration-300 cursor-pointer">
                                                        <div className="relative h-80 md:h-96 overflow-hidden">
                                                            <img
                                                                src={getImagePath(sectionProject.image || "/placeholder.svg")}
                                                                alt={sectionProject.title || 'Project image'}
                                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                                                        </div>

                                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                                            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                                                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{sectionProject.title}</h3>
                                                                {sectionProject.hasLink && sectionProject.link !== '#' && (
                                                                    <svg className="w-5 h-5 text-accent flex-shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                )}
                                                                {sectionProject.isWorkInProgress && (
                                                                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full border border-yellow-500/30 font-semibold self-center mt-0.5">
                                                                        Work in Progress
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-foreground/70 mb-4 text-sm md:text-base">{sectionProject.description}</p>
                                                            {/* Only show tags if they exist and are not empty */}
                                                            {sectionProject.tags && sectionProject.tags.length > 0 && (
                                                                <div className="flex flex-wrap gap-2">
                                                                    {sectionProject.tags.map((tag) => (
                                                                        <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </a>

                                                {/* Render subProjects if they exist */}
                                                {(sectionProject as any).subProjects && (sectionProject as any).subProjects.length > 0 && (
                                                    <div className="ml-4 md:ml-8 space-y-4 border-l-2 border-accent/20 pl-4 md:pl-6">
                                                        <h4 className="text-lg font-semibold text-foreground/80 mb-2">Sub Projects:</h4>
                                                        {(sectionProject as any).subProjects.map((subProject: any) => (
                                                            <a
                                                                key={subProject.id}
                                                                href={subProject.link || '#'}
                                                                target={subProject.link !== '#' && subProject.hasLink ? "_blank" : undefined}
                                                                rel={subProject.link !== '#' && subProject.hasLink ? "noopener noreferrer" : undefined}
                                                                className="group block"
                                                            >
                                                                <div className="relative overflow-hidden rounded-lg bg-card/80 border border-border/50 hover:border-accent/50 transition-colors duration-300 cursor-pointer">
                                                                    {subProject.image ? (
                                                                        <div className="relative h-48 md:h-64 overflow-hidden">
                                                                            <img
                                                                                src={getImagePath(subProject.image)}
                                                                                alt={subProject.title || 'Sub-project image'}
                                                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                            />
                                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                                                                        </div>
                                                                    ) : null}
                                                                    <div className={subProject.image ? "absolute bottom-0 left-0 right-0 p-4 md:p-6" : "relative p-4 md:p-6"}>
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h4 className="text-lg md:text-xl font-bold text-foreground">{subProject.title}</h4>
                                                                            {subProject.hasLink && subProject.link !== '#' && (
                                                                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                                </svg>
                                                                            )}
                                                                        </div>
                                                                        <p className="text-foreground/70 mb-2 text-xs md:text-sm">{subProject.description}</p>
                                                                        <div className="flex flex-wrap gap-1.5">
                                                                            {subProject.tags?.map((tag: string) => (
                                                                                <span key={tag} className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                                                                                    {tag}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        if (project.isEmiskProject) {
                            return null
                        }

                        return (
                            <a
                                key={project.id}
                                href={project.link || '#'}
                                target={project.link !== '#' && project.hasLink ? "_blank" : undefined}
                                rel={project.link !== '#' && project.hasLink ? "noopener noreferrer" : undefined}
                                className="group block"
                            >
                                <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-colors duration-300 cursor-pointer">
                                    {project.image ? (
                                        <>
                                            <div className="relative h-80 md:h-96 overflow-hidden">
                                                <img
                                                    src={getImagePath(project.image)}
                                                    alt={project.title || 'Project image'}
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                                                    {project.hasLink && project.link !== '#' && (
                                                        <svg className="w-5 h-5 text-accent flex-shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    )}
                                                    {project.isWorkInProgress && (
                                                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full border border-yellow-500/30 font-semibold self-center mt-0.5">
                                                            Work in Progress
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-foreground/70 mb-4 text-sm md:text-base">{project.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags?.map((tag) => (
                                                        <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="p-6 md:p-8 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                                                {project.hasLink && project.link !== '#' && (
                                                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                )}
                                            </div>
                                            {project.isWorkInProgress && (
                                                <div className="flex justify-center">
                                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full border border-yellow-500/30 font-semibold">
                                                        Work in Progress
                                                    </span>
                                                </div>
                                            )}
                                            <p className="text-foreground/70 text-sm md:text-base">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags?.map((tag) => (
                                                    <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
