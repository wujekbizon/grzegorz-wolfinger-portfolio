import styles from './ProjectList.module.scss'
import type { ProjectData } from '@/types'
import { ProjectCard } from '@/components'
import { staggerContainer } from '../../utils/motion'
import { motion } from 'framer-motion'

export type ProjectsProps = {
  projects: ProjectData[]
}

const ProjectList = ({ projects }: ProjectsProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={styles.project_list}
    >
      <div className={styles.cards_wrapper}>
        {projects.map((project, index) => {
          return <ProjectCard key={project._id} index={index} project={project} />
        })}
      </div>
    </motion.div>
  )
}
export default ProjectList
