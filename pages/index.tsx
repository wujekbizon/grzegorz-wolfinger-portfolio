import { Home } from '@/components'
import Head from 'next/head'
import AnimationLayout from '@/components/layout/AnimationLayout'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Wolfinger | Portfolio</title>
        <meta
          name="description"
          content="Today's web is pushing the boundaries of what is possible. Let's create a network of endless possibilities together. As a developer, I believe applications should be scalable, cost-effective, cross-platform, secure and should utilizing a peer-to-peer network "
        />
      </Head>
      <Home />
      <AnimationLayout />
    </>
  )
}
export default HomePage
