import styles from './Projects.module.scss'
import { ProjectList, ProjectsHero } from '@/components'
import { ThreeCanvas } from '@/canvas'
import type { ProjectsProps } from '@/components/projects/ProjectList'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import Image from 'next/image'

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <section className={styles.projects}>
        <ProjectsHero />
        <motion.div
          animate={{
            y: [0, 12, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className={styles.hero_skills}
        >
          <Image src="/images/tech/docker.png" alt="three" width={280} height={280} className={styles.docker} />
          <Image src="/images/tech/tailwind.png" alt="three" width={1024} height={90} className={styles.tailwind} />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div id="projects" variants={fadeIn('right', 'tween', 0.5, 0.5)} className={styles.project}>
            <p className={styles.subtitle}>Real World Projects</p>
            <h2 className={styles.title}>
              Developing <span className={styles.span}>Innovative</span> Solutions
            </h2>
            <motion.p variants={fadeIn('right', 'tween', 0.5, 0.5)} className={styles.content}>
              My portfolio webpage showcases the real-world projects I have completed, demonstrating my technical skills
              and abilities as a developer. I am constantly learning new technologies and techniques to stay up-to-date
              with the latest industry trends. I am now focusing on changing the web as we know it today by building
              more complex cross-platform applications and connecting them in a P2P network.
            </motion.p>
          </motion.div>

          <ProjectList projects={projects} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div id="projects" variants={fadeIn('left', 'tween', 0.5, 0.5)} className={styles.feature}>
              <p className={styles.subtitle}>Featured Live Demo Project</p>
              <h2 className={styles.title}>
                Realistic 3D Environment with <span className={styles.span}>Three.js</span>{' '}
              </h2>
              <motion.p variants={fadeIn('left', 'tween', 0.5, 0.5)} className={styles.content}>
                {' '}
                This project was a great learning experience for me. I learned how to create a realistic 3D environment
                with Three.js, setting up the scene, adding textures and materials, creating lighting, and adding
                objects. I also learned how to use the Three.js library to create a realistic 3D environment with
                various features such as shadows, reflections, and more. Overall, this project was an excellent way for
                me to gain experience in creating 3D environments with Three.js.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className={styles.three_canvas_container}>
          <ThreeCanvas />
        </div>
      </section>
    </>
  )
}
export default Projects
