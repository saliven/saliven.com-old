import Link from 'next/link'
import React from 'react'
import { useLanyard } from 'react-use-lanyard'
import SpotifyIcon from '../../icons/SpotifyIcon'

export default function NowPlaying(): JSX.Element {
  const { loading, status } = useLanyard({
    userId: '366544702478090241',
    socket: true,
  })

  if (loading || !status?.spotify) return <></>

  return (
    <Link href={`https://open.spotify.com/track/${status.spotify.track_id}`}>
      <a className="mb-4 text-sm group flex items-center space-x-2">
        <SpotifyIcon />
        <span className="transition-opacity duration-300 opacity-70 group-hover:opacity-100">
          Listening to <b>{status?.spotify?.song}</b> by <b>{status?.spotify?.artist}</b>
        </span>
      </a>
    </Link>
  )
}
