import { InferGetServerSidePropsType } from 'next'
import React from 'react'
import Introduction from '../components/sections/Introduction'
import Technologies from '../components/sections/Technologies'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import Projects from '../components/sections/Projects'
import { PinnedRepo } from '../utils/types'

export default function Home({ pinnedRepos }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
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

export const getServerSideProps = async () => {
  const data = await fetch('https://gh-pinned-repos.egoist.sh/?username=saliven').then(
    async (response) => response.json() as Promise<PinnedRepo[]>
  )

  return {
    props: {
      pinnedRepos: data,
    },
  }
}
