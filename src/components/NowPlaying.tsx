import Link from 'next/link'
import React from 'react'
import { useLanyard } from 'react-use-lanyard'
import SpotifyIcon from './icons/SpotifyIcon'

export default function NowPlaying(): JSX.Element {
  const { status } = useLanyard({
    userId: '366544702478090241',
    socket: true,
  })

  return (
    <Link href={status?.spotify ? `https://open.spotify.com/track/${status.spotify.track_id}` : ''}>
      <a className="mb-4 text-sm group flex items-center space-x-2">
        <SpotifyIcon />
        <span className="transition-color duration-200 text-zinc-300 group-hover:text-white">
          {status?.spotify ? (
            <>
              Listening to <b>{status.spotify?.song}</b> by <b>{status.spotify?.artist}</b>
            </>
          ) : (
            <>Not playing anything</>
          )}
        </span>
      </a>
    </Link>
  )
}
