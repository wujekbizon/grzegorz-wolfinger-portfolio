import styles from './Projects.module.scss'
import { ProjectList, CameraContainer, ProjectsHero } from '@/components'
import { ThreeCanvas } from '@/canvas'
import type { ProjectsProps } from '@/components/projects/ProjectList'

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className={styles.projects}>
      <ProjectsHero />
      <div id="projects" className={styles.three_canvas_container}>
        <ThreeCanvas />
        <div>
          <CameraContainer />
        </div>
      </div>
      <ProjectList projects={projects} />
    </section>
  )
}
export default Projects
