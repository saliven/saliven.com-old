import notest from '../../../../public/logos/notest.png'
import Project, { ProjectProps } from './Project'

const PROJECTS: ProjectProps[] = [
  {
    name: 'Notest',
    description: 'Coming soon...',
    image: notest,
    role: 'Founder',
    link: 'https://notest.app',
  },
]

export default function Projects(): JSX.Element {
  return (
    <section className="mt-16">
      <h1 className="text-3xl font-semibold mb-4">
        Projects <span className="ml-3">🌍</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}
