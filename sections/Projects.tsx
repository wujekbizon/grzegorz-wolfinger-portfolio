import styles from './Projects.module.scss'
import { ProjectList } from '@/components'
import type { ProjectsProps } from '@/components/projects/ProjectList'

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className={styles.projects}>
      <ProjectList projects={projects} />
    </section>
  )
}
export default Projects
