import TypeScriptIcon from '../../icons/TypeScriptIcon'
import GraphQLIcon from './../../icons/GraphQLIcon'
import NextIcon from './../../icons/NextIcon'
import PostgresIcon from './../../icons/PostgresIcon'
import ReactIcon from './../../icons/ReactIcon'
import TailwindIcon from './../../icons/TailwindIcon'
import Technology, { TechnologyProps } from './Technology'

const TECHNOLOGIES: TechnologyProps[] = [
  {
    name: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    icon: <TypeScriptIcon />,
    iconBackground: '#3178c6',
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    icon: <ReactIcon />,
    iconBackground: '#61dbfb',
  },
  {
    name: 'NextJs',
    description: 'The React framework for production',
    icon: <NextIcon />,
    iconBackground: '#0076FF',
  },
  {
    name: 'GraphQL',
    description: 'A query language for API',
    icon: <GraphQLIcon />,
    iconBackground: '#E10098',
  },
  {
    name: 'Tailwind',
    description: 'Rapidly build modern websites without ever leaving your HTML',
    icon: <TailwindIcon />,
    iconBackground: '#3b9faf',
  },
  {
    name: 'PostgreSQL',
    description: `The world's most advanced open-source relational database`,
    icon: <PostgresIcon />,
    iconBackground: '#336791',
  },
]

export default function Technologies(): JSX.Element {
  return (
    <section className="mt-16">
      <h1 className="text-3xl font-semibold mb-4">
        Technologies <span className="ml-3">🖥</span>
      </h1>
      <p className="opacity-70">
        I use the latest technologies to develop stable and fast applications. Below you can find a list of my most used
        technologies.
      </p>
      <div className="space-y-8 mt-8">
        {TECHNOLOGIES.map((technology, idx) => (
          <Technology key={idx} {...technology} />
        ))}
      </div>
    </section>
  )
}
