type HeroSectionProps = {
  name: string
}

const HeroSection = ({ name }: HeroSectionProps) => {
  return (
    <section className="island-shell relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.35),transparent_64%)]" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.22),transparent_66%)]" />

      <p className="island-kicker mb-3">Frontend Portfolio</p>
      <h1 className="display-title mb-4 text-4xl leading-tight font-bold text-[var(--sea-ink)] sm:text-5xl md:text-6xl">
        {name}
      </h1>
      <p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
        Frontend Developer specializing in React
      </p>
      <a href="#projects" className="cta-button inline-flex rounded-full px-6 py-3 text-sm font-semibold no-underline sm:text-base">
        View Projects
      </a>
    </section>
  )
}

export default HeroSection
