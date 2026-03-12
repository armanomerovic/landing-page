import { createFileRoute } from '@tanstack/react-router'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from '../components/sections'

export const Route = createFileRoute('/')({ component: App })

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Responsive Design',
  'Git',
]

const projects = [
  {
    title: 'React Dashboard UI',
    description: 'A responsive admin dashboard with charts, filters, and reusable widget components.',
    githubUrl: 'https://github.com/username/react-dashboard-ui',
    demoUrl: 'https://demo.example.com/react-dashboard-ui',
  },
  {
    title: 'E-Commerce Frontend',
    description: 'A product browsing experience with category filtering, cart preview, and clean checkout flow.',
    githubUrl: 'https://github.com/username/ecommerce-frontend',
    demoUrl: 'https://demo.example.com/ecommerce-frontend',
  },
  {
    title: 'Portfolio Template',
    description: 'A modern portfolio template focused on performance, accessibility, and maintainable components.',
    githubUrl: 'https://github.com/username/portfolio-template',
    demoUrl: 'https://demo.example.com/portfolio-template',
  },
]

function App() {
  return (
    <main className="page-wrap px-4 pb-12 pt-12 sm:pt-14">
      <div className="space-y-6 sm:space-y-8">
        <HeroSection name="Arman Omerović" />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </div>
    </main>
  )
}
