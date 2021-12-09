import Link from 'next/link'

export default function NotFound(): JSX.Element {
  return (
    <div className="px-10 py-16 sm:px-20 md:px-40 xl:px-96 2xl:px-[32rem]">
      <h1 className="text-5xl font-semibold mb-4">404</h1>
      <p className="text-xl opacity-70 mb-4">This page does not exist on the server.</p>
      <Link href="/">
        <a className="opacity-70 underline hover:no-underline">Go home</a>
      </Link>
    </div>
  )
}
