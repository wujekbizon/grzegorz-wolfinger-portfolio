import styles from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { TypingText } from '@/components/animation/CustomText'

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${'section_wrapper'} ${styles.hero}`}
    >
      <div className={styles.hero_wrapper}>
        <motion.div className={styles.title}>
          <TypingText title={`Today's web is pushing the boundaries of what is possible.`} textStyles={styles.text} />
        </motion.div>
      </div>
      <motion.h6 className={styles.scroll} variants={zoomIn(3, 1.5)}>
        <span>&#8650; </span>Scroll down
        <div className="footer_gradient" />
      </motion.h6>
    </motion.section>
  )
}
export default Hero
