import styles from './ProjectsHero.module.scss'
import { SectionWrapper } from '@/hoc'
import { fadeIn } from '../../utils/motion'
import { motion } from 'framer-motion'
import { ScrollButton } from '@/components'

const ProjectsHero = () => {
  return (
    <div className={styles.projects_hero_container}>
      <motion.div variants={fadeIn('down', 'tween', 1, 1)}>
        <p className={styles.subtitle}>My work</p>
        <h2 className={styles.title}>
          Projec<span className={styles.span}>ts</span>.
        </h2>
      </motion.div>

      <div className={styles.content_wrapper}>
        <motion.p variants={fadeIn('right', 'tween', 1, 1)} className={styles.content}>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ScrollButton tag="projects" />
      </div>
    </div>
  )
}
export default SectionWrapper(ProjectsHero, '')
