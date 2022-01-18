import NowPlaying from './NowPlaying'

export default function Introduction(): JSX.Element {
  return (
    <section>
      <h1 className="text-5xl font-semibold mb-4">
        Hi there <span className="ml-3">👋</span>
      </h1>
      <NowPlaying />
      <p className="text-lg text-zinc-400">
        I&apos;m Saliven, an open-source enthusiast and fullstack developer. I&apos;m most interested in web
        technologies. I&apos;m now focusing mainly on frontend technologies.
      </p>
    </section>
  )
}
