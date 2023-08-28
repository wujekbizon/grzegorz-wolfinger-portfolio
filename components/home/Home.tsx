import styles from './Home.module.scss'
import { Hero, Explore, Technologies } from '@/sections'
import { CustomDivider, PortfolioTitle } from '@/components'
import AnimationLayout from '../layout/AnimationLayout'

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Explore />
      <Technologies />
      <CustomDivider />
      <PortfolioTitle />
      <AnimationLayout />
    </main>
  )
}
export default Home
