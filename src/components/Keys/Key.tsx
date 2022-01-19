import { useState } from 'react'
import copy from 'copy-text-to-clipboard'

export default function Key({ name, content }: { name: string; content: string }): JSX.Element {
  const [copied, setCopied] = useState(false)

  const copyContent = () => {
    copy(content)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <div className="mt-10">
      <p className="text-zinc-400 text-xl font-medium mb-2">{name}</p>
      <div className="h-24 w-[100%] break-all overflow-hidden text-zinc-600 relative">
        <div className="absolute w-full h-full bg-gradient-to-t from-dark-200 to-black/0"></div>
        <div>{content}</div>
      </div>
      <div className="text-center mt-3">
        <button
          onClick={copyContent}
          className="hover:bg-dark-100 hover:bg-opacity-60 transition-all duration-200 border border-dark-100 rounded-md px-5 py-1.5 text-zinc-300 font-medium"
        >
          {copied ? <>Copied to clipboard</> : <>Copy</>}
        </button>
      </div>
    </div>
  )
}
