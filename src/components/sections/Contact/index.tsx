import Link from 'next/link'

export default function Contact(): JSX.Element {
  return (
    <section className="mt-16">
      <h1 className="text-3xl font-semibold mb-4">
        Contact <span className="ml-3">💬</span>
      </h1>
      <p className="opacity-70">
        You can get in touch with me by email (
        <Link href="mailto:me@saliven.com">
          <a className="underline hover:no-underline">me@saliven.com</a>
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
