import styles from './Experience.module.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ExperienceCard } from '@/components'
import { experiences } from '@/data/constants'
import { SectionWrapper } from '@/hoc'

const Experience = () => {
  return (
    <div className={`glassmorphism ${styles.experience}`}>
      <motion.div variants={fadeIn('up', 'tween', 0.1, 0.5)}>
        <p className={styles.subtitle}>What I have done so far</p>
        <h2 className={styles.title}>
          Work <span className={styles.span}>Exp</span>erience.
        </h2>
      </motion.div>

      <div className={styles.experience_container}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, 'work')
