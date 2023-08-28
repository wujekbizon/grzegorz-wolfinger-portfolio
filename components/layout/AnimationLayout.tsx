import styles from './AnimationLayout.module.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { DynamicProjectCard } from '../projects/ProjectList'
import { featuredProjects } from '../../data/featuredProjects'
import { TitleButton, Line, Title } from '@/components'

const AnimationLayout = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: targetRef,
  })

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.section className={`${styles.animation_container} ${styles.animation_snaps}`} ref={targetRef}>
      <motion.div className={styles.progress_bar} style={{ scaleX }} />
      {featuredProjects.map((project, index) => {
        const { extraContent } = project
        return (
          <motion.div className={styles.card_wrapper} key={project._id}>
            <motion.div className={styles.card_extra}>
              <TitleButton title={extraContent?.question || 'About the Project'} className={styles.title_wrapper} />
              <p>{extraContent?.content}</p>
              <ul>
                {extraContent?.items.map((item, index) => (
                  <li key={item + index}>{item}</li>
                ))}
              </ul>
              <Line
                width="40%"
                height={4}
                color="#dd98608b"
                isMotion
                animate={{ x: ['0%', '150%', '0%'] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
              <motion.div
                animate={{ opacity: [1, 1, 0, 1, 1] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <h5 className="gradient_text">{extraContent?.summary}</h5>
              </motion.div>
              <Line
                width="40%"
                height={4}
                color="#dd98608b"
                isMotion
                animate={{ x: ['150%', '0%', '150%'] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </motion.div>
            <motion.div className={styles.card_project} animate={{}}>
              <DynamicProjectCard project={project} index={index} />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.section>
  )
}
export default AnimationLayout
