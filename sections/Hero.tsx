import styles from './Hero.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { TypingText } from '@/components/animation/CustomText'

const Hero = () => {
  return (
    <section className={`${'section_wrapper'} ${styles.hero}`}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={styles.motion_wrapper}>
        <div className={styles.hero_container}>
          <motion.div className={styles.left}>
            <TypingText title={`Todays web, reaching it's limits.`} textStyles={styles.text} />
            <motion.h1 variants={fadeIn('up', 'tween', 2.3, 1)}>Clouds services are getting more expensive.</motion.h1>
            <motion.h1 variants={fadeIn('up', 'tween', 4, 1)}>Is there any way of changing that?</motion.h1>
          </motion.div>
          <motion.div variants={fadeIn('left', 'tween', 3.4, 1)} className={` ${styles.right}`}>
            <Image src="/images/cloud.png" alt="cloud" width={550} height={320} />
          </motion.div>
        </div>
        <motion.h6 variants={zoomIn(5, 1)}>
          <span>&#8650; </span>Scroll down
        </motion.h6>
      </motion.div>
    </section>
  )
}
export default Hero
