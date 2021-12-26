import Link from 'next/link'
import { PinnedRepo } from '../../../utils/types'

export default function Repository({ repo, description, stars }: PinnedRepo): JSX.Element {
  return (
    <Link href={'https://github.com/saliven/' + repo}>
      <a
        target="_blank"
        className="hover:bg-dark-100 hover:bg-opacity-60 relative h-auto transition-all duration-300 border border-dark-100 rounded-xl p-5 hover:cursor-pointer"
      >
        <div className="flex items-center space-x-5 border-b border-dark-100 pb-5">
          <h1 className="flex items-center text-lg font-medium w-full">{repo}</h1>
          <div className="ml-auto flex items-center space-x-2">
            <span>🌟</span>
            <span>{stars}</span>
          </div>
        </div>
        <div className="pt-5">{description}</div>
      </a>
    </Link>
  )
}
