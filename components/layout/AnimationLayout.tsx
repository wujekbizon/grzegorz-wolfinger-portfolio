import styles from './AnimationLayout.module.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { DynamicProjectCard } from '../projects/ProjectList'
import { featuredProjects } from '../../data/featuredProjects'

const AnimationLayout = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: targetRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollXProgress, [0, 1], ['-10%', '0%'])
  const y2 = useTransform(scrollXProgress, [0, 1], ['10%', '0%'])
  const opacity = useTransform(scrollXProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollXProgress, [0, 1], [0.3, 1])

  // const { scrollXProgress } = useScroll({
  //   container: targetRef,
  // })
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.section className={`${styles.animation_container} ${styles.animation_snaps}`}>
      <motion.div className={styles.progress_bar} style={{ scaleX }} />
      {featuredProjects.map((project, index) => {
        const { extraContent } = project
        return (
          <motion.div className={styles.card_wrapper} key={project._id} ref={targetRef}>
            <motion.div className={styles.card_extra} style={{ y: y1, opacity }}>
              <h3>{extraContent?.question}</h3>
              <p>{extraContent?.content}</p>
              <ul>
                {extraContent?.items.map((item, index) => (
                  <li key={item + index}>{item}</li>
                ))}
              </ul>
              {/* <h2>{extraContent?.summary}</h2> */}
            </motion.div>
            <motion.div className={styles.card_project} style={{ opacity, y: y2, scale }}>
              <DynamicProjectCard project={project} index={index} />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.section>
  )
}
export default AnimationLayout
