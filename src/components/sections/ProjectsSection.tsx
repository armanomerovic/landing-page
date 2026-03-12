type Project = {
  title: string
  description: string
  githubUrl: string
  demoUrl: string
}

type ProjectsSectionProps = {
  projects: Project[]
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="island-shell rounded-3xl p-6 sm:p-8">
      <p className="island-kicker mb-3">Projects</p>
      <h2 className="mb-5 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">Featured Work</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="feature-card project-card rounded-2xl p-5">
            <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">{project.title}</h3>
            <p className="mb-5 text-sm text-[var(--sea-ink-soft)]">{project.description}</p>
            <div className="flex gap-3 text-sm">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link rounded-full px-4 py-2 no-underline">
                GitHub
              </a>
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link rounded-full px-4 py-2 no-underline">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
