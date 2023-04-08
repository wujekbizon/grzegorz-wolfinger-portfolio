import '@/styles/index.css'
import '@/styles/globals.scss'
import '@/styles/gradients.scss'
import '@/styles/fonts.scss'
import '@/styles/canvas.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'
import { Provider } from 'react-redux'
import { store } from '../state'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
