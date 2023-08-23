import styles from './Hero.module.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, fadeIn, openOut } from '@/utils/motion'
import { ScrollButton } from '@/components'

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'relative' : 'fixed'
  })

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={styles.hero}
    >
      <motion.div
        style={{ scale, x: '-50%', position }}
        className={styles.hero_title}
        variants={openOut('tween', 0.5, 1)}
      >
        <motion.h1 className={styles.title} variants={fadeIn('down', 'tween', 0.8, 0.5)}>
          Welcome to my coding playground!
        </motion.h1>
        <div className={styles.hero_intro}>
          <motion.p variants={fadeIn('up', 'tween', 1, 0.5)}>
            As a passionate programmer, I blend creativity and logic to fulfill your software dreams. Step into a world
            where innovation meets efficiency, and let's embark on a journey of technical wizardry together! Whether
            it's web development, app creation, or solving complex problems, I've got the skills and wit to deliver
            top-notch solutions.
          </motion.p>
        </div>
      </motion.div>
      <div className={styles.scroll}>
        <ScrollButton tag="explore" />
      </div>
    </motion.section>
  )
}
export default Hero
