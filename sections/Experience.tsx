import styles from './Experience.module.scss'
import { motion } from 'framer-motion'
import { text2Variant } from '../utils/motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ExperienceCard } from '@/components'
import { experiences } from '@/files/constants'
import { SectionWrapper } from '@/hoc'

const Experience = () => {
  return (
    <>
      <motion.div variants={text2Variant(1)}>
        <p className={styles.subtitle}>What I have done so far</p>
        <h2 className={styles.title}>Work Experience.</h2>
      </motion.div>

      <div className={styles.experience_container}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
