import Link from 'next/link'
import GitHubIcon from '../../icons/GitHubIcon'
import KeyIcon from '../../icons/KeyIcon'
import TwitterIcon from '../../icons/TwitterIcon'

export default function Footer(): JSX.Element {
  return (
    <footer className="flex mt-16 items-center">
      <div>
        <h1 className="text-3xl font-medium">Saliven</h1>
        <p className="text-lg text-white/40">© {new Date().getFullYear()}</p>
      </div>
      <div className="ml-auto flex items-center space-x-5">
        <Link href="https://github.com/saliven">
          <a target="_blank" className="text-white/50 hover:text-white transition-all duration-300">
            <GitHubIcon />
          </a>
        </Link>
        <Link href="https://twitter.com/s4liven">
          <a target="_blank" className="text-white/50 hover:text-white transition-all duration-300">
            <TwitterIcon />
          </a>
        </Link>
        <Link href="https://keybase.io/saliven">
          <a target="_blank" className="text-white/50 hover:text-white transition-all duration-300">
            <KeyIcon />
          </a>
        </Link>
      </div>
    </footer>
  )
}
