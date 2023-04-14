import styles from './ProjectList.module.scss'
import type { ProjectData } from '@/types'
import { ProjectCard } from '@/components'
import { staggerContainer } from '../../utils/motion'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const DynamicProjectCard = dynamic(() => import('../projects/ProjectCard'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export type ProjectsProps = {
  projects: ProjectData[]
}

const ProjectList = ({ projects }: ProjectsProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.project_list}
    >
      <div className={styles.cards_wrapper}>
        {projects.map((project, index) => {
          return <DynamicProjectCard key={project._id} index={index} project={project} />
        })}
      </div>
    </motion.div>
  )
}
export default ProjectList
