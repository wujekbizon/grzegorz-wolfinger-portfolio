import styles from './ProjectsHero.module.scss'
import { SectionWrapper } from '@/hoc'
import { fadeIn } from '../../utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsHero = () => {
  return (
    <div className={styles.projects_hero_container}>
      <Image src="/images/tech/figma.png" alt="three" width={80} height={80} className={styles.figma} />
      <motion.div variants={fadeIn('up', 'tween', 1, 1)}>
        <h2 className={styles.title}>
          Projec<span className={styles.span}>ts</span>.
        </h2>
      </motion.div>
      <div className={styles.content_wrapper}>
        <motion.p variants={fadeIn('up', 'tween', 1.1, 1)} className={styles.content}>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
    </div>
  )
}
export default SectionWrapper(ProjectsHero, '')
