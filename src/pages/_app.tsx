import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="bg-dark-200 text-white min-h-screen w-full">
      <NextSeo
        title="Saliven.com"
        description="I'm Saliven, an open-source enthusiast and fullstack web developer."
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'author', content: 'Saliven (https://saliven.com)' },
        ]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'tween', ease: 'anticipate', duration: 1 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </div>
  )
}
