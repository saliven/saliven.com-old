import Image from 'next/image'
import LinkIcon from '../../icons/LinkIcon'

export interface ProjectProps {
  name: string
  role: string
  description: string
  link?: string
  image: any
}

export default function Projects({ name, role, description, link, image }: ProjectProps): JSX.Element {
  return (
    <div
      onClick={() => link && window.open(link)}
      className="hover:bg-dark-100 hover:bg-opacity-60 transition-all duration-300 border border-dark-100 rounded-xl p-5 hover:cursor-pointer"
    >
      <div className="flex items-center space-x-5 border-b border-dark-100 pb-5">
        <Image className="rounded-lg" height="70" width="70" alt={name} src={image} />
        <div>
          <h1 className="flex items-center text-lg font-semibold">
            {name}{' '}
            {link && (
              <div className="ml-2 opacity-70">
                <LinkIcon />
              </div>
            )}
          </h1>
          <p className="opacity-70">{role}</p>
        </div>
      </div>
      <div className="pt-5">{description}</div>
    </div>
  )
}
