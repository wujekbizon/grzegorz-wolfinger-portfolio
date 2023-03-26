import styles from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { TypingText } from '@/components/animation/CustomText'
import Image from 'next/image'

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={styles.hero}
    >
      <div className={styles.hero_wrapper}>
        <motion.div variants={zoomIn(1, 2)} className={styles.title_container}>
          <h1>Today's web is pushing the boundaries of what is possible.</h1>
          <Image src="/images/map.png" alt="map" width={700} height={350} className={styles.map} />
        </motion.div>
      </div>
      <motion.h6 className={styles.scroll} variants={fadeIn('up', 'tween', 2, 1)}>
        <span>&#8650; </span>Scroll down
        <div className="footer_gradient" />
      </motion.h6>
    </motion.section>
  )
}
export default Hero
