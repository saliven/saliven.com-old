import NavbarLink from './NavbarLink'

export default function Navbar(): JSX.Element {
  return (
    <div className="my-10 flex items-center space-x-7">
      <NavbarLink destination="/">Home</NavbarLink>
      <NavbarLink destination="/technologies">Technologies</NavbarLink>
      <NavbarLink destination="/about">About</NavbarLink>
    </div>
  )
}
