import styles from './Home.module.scss'
import AnimationLayout from '../layout/AnimationLayout'
import { Hero, Explore, Technologies } from '@/sections'

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Explore />
      <Technologies />
    </main>
  )
}
export default Home
