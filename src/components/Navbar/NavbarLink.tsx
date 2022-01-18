import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function NavbarLink({
  destination,
  children,
}: {
  destination: string
  children: React.ReactNode
}): JSX.Element {
  const router = useRouter()

  return (
    <Link href={destination} prefetch>
      <a
        className={clsx(
          router.pathname === destination ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
        )}
      >
        {children}
      </a>
    </Link>
  )
}
