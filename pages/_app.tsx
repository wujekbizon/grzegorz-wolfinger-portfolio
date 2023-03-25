import '@/styles/globals.scss'
import '@/styles/gradients.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
