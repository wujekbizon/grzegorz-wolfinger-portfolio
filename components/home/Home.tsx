import styles from './Home.module.scss'
import { Hero, Explore, Technologies } from '@/sections'
import CustomDivider from '../ui/CustomDivider'
import AnimationLayout from '../layout/AnimationLayout'

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Explore />
      <Technologies />
      <CustomDivider />
      {/* <AnimationLayout /> */}
    </main>
  )
}
export default Home
