import '@/styles/globals.css'
import type { AppProps } from 'next/app' //context, global style

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
