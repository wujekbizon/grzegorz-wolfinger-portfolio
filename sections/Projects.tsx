import styles from './Projects.module.scss'
import { ProjectList, CameraContainer } from '@/components'
import { ThreeCanvas } from '@/canvas'
import type { ProjectsProps } from '@/components/projects/ProjectList'

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className={styles.projects}>
      <div className={styles.title_container}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Greg</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <div className={styles.three_canvas_container}>
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
