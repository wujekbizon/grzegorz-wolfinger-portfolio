import styles from './Explore.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'

const Explore = () => {
  return (
    <section className={`section_wrapper`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.motion_explore}
      >
        <motion.h1 variants={fadeIn('up', 'tween', 2, 1)}>
          Cloud services can be expensive, especially for businesses that
          require a large amount of storage and computing power.
        </motion.h1>
        <motion.h1 variants={fadeIn('up', 'tween', 4, 1)}>
          Is there any way of changing that?
        </motion.h1>
      </motion.div>
      <h1>Explore</h1>
    </section>
  )
}
export default Explore
