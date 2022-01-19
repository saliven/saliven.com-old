import Link from 'next/link'
import Key from './Key'

export default function Keys({ pgp, ssh }: { pgp: string; ssh: string }): JSX.Element {
  return (
    <section className="mb-10">
      <h1 className="text-3xl font-semibold mb-4">
        Keys <span className="ml-3">🔑</span>
      </h1>
      <p className="text-zinc-400">
        Here are my PGP and SSH public keys. If you want to send me something encrypted, you can send me a message on{' '}
        <Link href="https://keybase.io/saliven">
          <a target="_blank" className="underline hover:no-underline">
            Keybase
          </a>
        </Link>
        .
      </p>
      <div className="flex flex-col">
        <Key name="PGP key" content={pgp} />
        <Key name="SSH key" content={ssh} />
      </div>
    </section>
  )
}
