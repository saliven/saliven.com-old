import Link from 'next/link'

export default function Contact(): JSX.Element {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-semibold mb-4">
        Contact <span className="ml-3">💬</span>
      </h1>
      <p className="text-zinc-400">
        You can get in touch with me by email (
        <Link href="mailto:s4liven@pm.me">
          <a className="underline hover:no-underline">s4liven@pm.me</a>
        </Link>
        ) or send me DM on{' '}
        <Link href="https://twitter.com/s4liven">
          <a className="underline hover:no-underline">Twitter</a>
        </Link>{' '}
        where I&apos;m most active.
      </p>
    </section>
  )
}
