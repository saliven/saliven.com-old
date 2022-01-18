import TechnologiesList from '../components/Technologies'

export default function Technologies(): JSX.Element {
  return (
    <section className="mb-10">
      <h1 className="text-4xl font-semibold mb-5">
        Technologies <span className="ml-3">🖥</span>
      </h1>
      <p className="text-lg text-zinc-400">
        I use the latest technologies to develop stable and fast applications. Below you can find a list of my most used
        technologies.
      </p>
      <TechnologiesList />
    </section>
  )
}
