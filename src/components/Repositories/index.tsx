import React from 'react'
import { PinnedRepo } from '../../utils/types'
import Repository from './Repository'

export default function Repositories({ repos }: { repos: PinnedRepo[] }): JSX.Element {
  return (
    <section className="mb-10">
      <h1 className="text-3xl font-semibold mb-4">
        Repositories <span className="ml-3">📚</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {repos.map((repo, idx) => (
          <Repository {...repo} key={idx} />
        ))}
      </div>
    </section>
  )
}
