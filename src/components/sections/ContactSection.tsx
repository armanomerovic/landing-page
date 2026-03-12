const ContactSection = () => {
  return (
    <section id="contact" className="island-shell rounded-3xl p-6 sm:p-8">
      <p className="island-kicker mb-3">Contact</p>
      <h2 className="mb-5 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">Let us Build Something</h2>
      <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
        <label className="form-field">
          <span className="mb-1.5 block text-sm font-medium text-[var(--sea-ink)]">Name</span>
          <input type="text" name="name" className="form-control" placeholder="Your name" required />
        </label>
        <label className="form-field">
          <span className="mb-1.5 block text-sm font-medium text-[var(--sea-ink)]">Email</span>
          <input type="email" name="email" className="form-control" placeholder="you@example.com" required />
        </label>
        <label className="form-field">
          <span className="mb-1.5 block text-sm font-medium text-[var(--sea-ink)]">Message</span>
          <textarea name="message" rows={5} className="form-control resize-y" placeholder="Tell me about your project" required />
        </label>
        <button type="submit" className="cta-button w-fit rounded-full px-6 py-3 text-sm font-semibold sm:text-base">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactSection
