import { About, Experience, Footer } from '@/sections'
import Head from 'next/head'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Hi, I'm Grzegorz Wolfinger. I am passionate about shaping the future of web development and leveraging the power of peer-to-peer networks and artificial intelligence in today's applications."
        />
      </Head>
      <About />
      <Experience />
      <Footer />
    </>
  )
}
export default AboutPage
