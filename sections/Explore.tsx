import styles from './Explore.module.scss'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeIn, zoomIn, staggerContainer } from '@/utils/motion'
import { DESIGN, AI } from '@/data/constants/cards'
import { Title, TitleButton, Card } from '@/components'
import { useDebouncedMouseMove } from '@/hooks/useDebouncedMouseMove'

const Explore = () => {
  const animationRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  useDebouncedMouseMove(animationRef, 5)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.section
      className={styles.explore}
      id="explore"
      ref={animationRef}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className={styles.overview} ref={targetRef} style={{ opacity }}>
        <motion.div className={styles.explore_title}>
          <TitleButton title="Introduction" />
          <Title title="Overview" />
        </motion.div>
        <article className={styles.divider}>
          <motion.h1 style={{ scale }}>
            Today's <span className={styles.span}> web </span>is pushing the boundaries of what is possible. Let's
            create a network of endless possibilities <span className={styles.span}>together</span>.
          </motion.h1>
        </article>
      </motion.div>

      <Card {...DESIGN} />
      <Card {...AI} custom />

      {/* <article className={styles.divider}>
        <motion.h1 variants={zoomIn(1, 2)}>
          As a developer, I believe applications should be scalable, cost-effective, cross-platform, secure and should
          utilizing a <span className={styles.span}> peer-to-peer network </span>
        </motion.h1>
      </article> */}

      <article className={styles.divider}>
        <motion.h1 variants={fadeIn('up', 'tween', 0.5, 0.5)}>
          Do you want to find out more about new ways of creating applications?{' '}
          <Link href="/about#contact">
            Please <span className={styles.span}>contact me</span>
          </Link>
        </motion.h1>
      </article>
    </motion.section>
  )
}
export default Explore
