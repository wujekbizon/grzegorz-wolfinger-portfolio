import styles from './Home.module.scss'

import { Hero, Explore } from '@/sections'

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Explore />
    </main>
  )
}
export default Home
