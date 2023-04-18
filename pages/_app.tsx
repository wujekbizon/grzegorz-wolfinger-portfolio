import '@/styles/index.css'
import '@/styles/globals.scss'
import '@/styles/gradients.scss'
import '@/styles/fonts.scss'
import '@/styles/canvas.scss'
import '@/styles/wrappers.scss'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'
import { ToastContainer, Zoom } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer position="top-center" transition={Zoom} draggablePercent={60} />
    </Layout>
  )
}
