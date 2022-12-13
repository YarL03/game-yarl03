import type { AppProps } from 'next/app'
import ContextProvider from '../providers/ContextProvider'
import useSound from 'use-sound'

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

  useSound(
    '/music.mp3', 
    {volume: 0.05,
    loop: true,
    autoplay: true
    },
    )

  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
