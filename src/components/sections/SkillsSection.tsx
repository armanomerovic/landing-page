type SkillsSectionProps = {
  skills: string[]
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="island-shell rounded-3xl p-6 sm:p-8">
      <p className="island-kicker mb-3">Skills</p>
      <h2 className="mb-5 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">What I Work With</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill} className="feature-card skill-card rounded-2xl px-5 py-4">
            <h3 className="m-0 text-base font-semibold text-[var(--sea-ink)]">{skill}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
