import type { AppProps } from 'next/app'

import '../styles/globals.scss'

import 'sanitize.css'
import 'sanitize.css/typography.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
