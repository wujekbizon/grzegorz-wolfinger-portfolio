import '@/styles/index.css'
import '@/styles/globals.scss'
import '@/styles/gradients.scss'
import '@/styles/fonts.scss'
import '@/styles/canvas.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
