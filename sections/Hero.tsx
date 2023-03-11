import styles from './Hero.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={`${'section_wrapper'} ${styles.hero}`}>
      <div className={styles.left}>
        <h1>Todays web reach it's limits</h1>
        <h4></h4>
      </div>

      <div className={styles.right}>
        <Image src="/images/cloud.png" alt="cloud" width={520} height={300} />
      </div>
    </section>
  )
}
export default Hero
