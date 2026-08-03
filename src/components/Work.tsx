import Icon from './Icon'
import SectionHead, { SubHead, Tags } from './SectionHead'
import { alsoBuilt, feature, projects, type FeatureApp, type Project, type SmallProject } from '@/data/projects'

function AppCard({ app }: { app: FeatureApp }) {
  return (
    <a className="app-card" href={app.href} target="_blank" rel="noopener">
      <div className="app-card__head">
        <h4>{app.title}</h4>
        <Icon name="arrow-up-right" size={15} stroke="var(--color-accent-700)" />
      </div>
      <p className="app-card__body">{app.body}</p>
      {app.sub && (
        <div className="app-card__sub">
          <div className="app-card__sub-kicker">Sub-project</div>
          <div className="app-card__sub-title">{app.sub.title}</div>
          <p className="app-card__sub-body">{app.sub.body}</p>
          <Tags items={app.sub.tags} variant="neutral" />
        </div>
      )}
    </a>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div
        className={`project__glyph project__glyph--blob-${project.blob}${
          project.tone === 'accent-2' ? ' project__glyph--accent-2' : ''
        }`}
        aria-hidden="true"
      >
        <Icon name={project.icon} size={34} />
      </div>
      <div>
        <div className="project__head">
          <h3>{project.title}</h3>
          {project.href && <Icon name="arrow-up-right" stroke="var(--color-accent-700)" />}
          {project.status && <span className="tag tag-outline">{project.status}</span>}
          {project.demo && <span className="tag tag-outline">Demo available on request</span>}
        </div>
        <div className="project__kicker">{project.kicker}</div>
        <p className="project__body">{project.body}</p>
        <Tags items={project.tags} variant={project.tone} />
      </div>
    </>
  )

  return project.href ? (
    <a className="project" href={project.href} target="_blank" rel="noopener" data-reveal="">
      {body}
    </a>
  ) : (
    <div className="project" data-reveal="">
      {body}
    </div>
  )
}

function MiniCard({ project }: { project: SmallProject }) {
  return (
    <div className="mini" data-reveal="">
      <h4>{project.title}</h4>
      <div className="mini__kicker">{project.kicker}</div>
      <p className="mini__body">{project.body}</p>
      <Tags items={project.tags} variant={project.tone} tight />
    </div>
  )
}

export default function Work() {
  const [lead, ...rest] = feature.apps

  return (
    <section className="section section--work" id="work" data-reveal="">
      <SectionHead
        title="Selected work"
        lede="Projects I've built that showcase my approach to solving problems with code."
      />

      <div className="work__feature" id="emisk" data-reveal="">
        <div className="feature">
          <div className="feature__meta">
            <span className="tag tag-solid">{feature.builtAt}</span>
            <span className="feature__client">{feature.client}</span>
          </div>
          <h2 className="feature__title">{feature.title}</h2>
          <p className="feature__body">{feature.body}</p>
          <div className="feature__tags">
            {feature.tags.map((tag) => (
              <span key={tag} className="tag tag-on-tint">
                {tag}
              </span>
            ))}
          </div>

          <div className="feature__grid">
            <AppCard app={lead} />
            <div className="feature__stack">
              {rest.map((app) => (
                <AppCard key={app.title} app={app} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="work__block" data-reveal="">
        <SubHead title="Selected projects" />
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="work__block work__block--also" data-reveal="">
        <SubHead title="Also built" />
        <div className="mini-grid">
          {alsoBuilt.map((project) => (
            <MiniCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
