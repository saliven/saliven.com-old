import { GetStaticProps, InferGetStaticPropsType } from 'next'
import AboutMe from '../components/AboutMe'
import Keys from '../components/Keys'
import Projects from '../components/Projects'
import Repositories from '../components/Repositories'
import { PinnedRepo } from '../utils/types'

export default function About({ pinnedRepos, ssh, pgp }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <AboutMe />
      <Projects />
      <Repositories repos={pinnedRepos} />
      <Keys pgp={pgp} ssh={ssh} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pinnedRepos = await fetch('https://gh-pinned-repos.egoist.sh/?username=saliven').then(
    async (response) => response.json() as Promise<PinnedRepo[]>
  )

  const pgp = await fetch('https://github.com/saliven.gpg').then(async (response) => response.text())
  const ssh = await fetch('https://github.com/saliven.keys').then(async (response) => response.text())

  return {
    props: {
      pinnedRepos: pinnedRepos,
      ssh,
      pgp,
    },
    revalidate: 1800,
  }
}
