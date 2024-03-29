export interface TechnologyProps {
  name: string
  description: string
  iconBackground: string
  icon: React.ReactNode
}
export default function Technology({ name, description, icon, iconBackground }: TechnologyProps): JSX.Element {
  return (
    <div className="hover:bg-dark-100 hover:bg-opacity-60 transition-all duration-200 border border-dark-100 sm:flex space-x-0 space-y-5 sm:space-y-0 sm:space-x-5 items-center rounded-xl p-5">
      <div className="h-14 w-14">
        <div
          className="h-14 w-14 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBackground }}
        >
          {icon}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-1">{name}</h1>
        <p className="text-zinc-500">{description}</p>
      </div>
    </div>
  )
}
