import Introduction from '../components/sections/Introduction'
import Technologies from '../components/sections/Technologies'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import React from 'react'
import Projects from '../components/sections/Projects'

export default function Home(): JSX.Element {
  return (
    <div className="px-10 py-16 sm:px-20 md:px-40 xl:px-96 2xl:px-[32rem]">
      <Introduction />
      <Contact />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  )
}
