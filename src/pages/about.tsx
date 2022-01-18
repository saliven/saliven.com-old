import { GetStaticProps, InferGetStaticPropsType } from 'next'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Repositories from '../components/Repositories'
import { PinnedRepo } from '../utils/types'

export default function About({ pinnedRepos }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <AboutMe />
      <Projects />
      <Repositories repos={pinnedRepos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch('https://gh-pinned-repos.egoist.sh/?username=saliven').then(
    async (response) => response.json() as Promise<PinnedRepo[]>
  )

  return {
    props: {
      pinnedRepos: data,
    },
    revalidate: 1800,
  }
}
