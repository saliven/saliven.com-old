import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <footer className="flex mt-16">
      <div className="flex items-center space-x-5 mx-auto">
        <Link href="https://github.com/saliven">
          <a className="underline hover:no-underline opacity-75">GitHub</a>
        </Link>
        <Link href="https://twitter.com/s4liven">
          <a className="underline hover:no-underline opacity-75">Twitter</a>
        </Link>
      </div>
    </footer>
  )
}
