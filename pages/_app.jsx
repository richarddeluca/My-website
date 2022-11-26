// import type { AppProps } from 'next/app'
import Link from 'next/link'

import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
// eslint-disable-next-line camelcase
import { Raleway, Playfair_Display } from '@next/font/google'

export const raleway = Raleway({ subsets: ['latin'] })
export const playfair = Playfair_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  // : AppProps
  return (
    <PrismicProvider internalLinkComponent={Link}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
