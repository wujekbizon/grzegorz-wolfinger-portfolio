import styles from './Projects.module.scss'
import { ProjectList, ProjectsHero } from '@/components'
import { ThreeCanvas } from '@/canvas'
import type { ProjectsProps } from '@/components/projects/ProjectList'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className={styles.projects}>
      <ProjectsHero />
      <motion.div id="projects" variants={fadeIn('left', 'tween', 1, 1)} className={styles.feature}>
        <p className={styles.subtitle}>Featured Live Demo Project</p>
        <h2 className={styles.title}>
          Realistic 3D Environment with <span className={styles.span}>Three.js</span>{' '}
        </h2>
        <motion.p variants={fadeIn('left', 'tween', 1.2, 1)} className={styles.content}>
          {' '}
          This project was a great learning experience for me. I learned how to create a realistic 3D environment with
          Three.js, setting up the scene, adding textures and materials, creating lighting, and adding objects. I also
          learned how to use the Three.js library to create a realistic 3D environment with various features such as
          shadows, reflections, and more. Overall, this project was an excellent way for me to gain experience in
          creating 3D environments with Three.js.
        </motion.p>
      </motion.div>
      <div className={styles.three_canvas_container}>
        <ThreeCanvas />
      </div>
      <ProjectList projects={projects} />
    </section>
  )
}
export default Projects
