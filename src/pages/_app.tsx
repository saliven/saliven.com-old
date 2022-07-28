import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
        additionalLinkTags={[{ rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-10 sm:px-20 md:px-40 xl:px-96 2xl:px-[32rem] flex flex-col min-h-screen"
        transition={{ type: 'tween', ease: 'anticipate', duration: 1 }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </div>
  )
}
