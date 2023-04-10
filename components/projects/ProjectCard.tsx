import styles from './ProjectCard.module.scss'
import { ProjectData } from '@/types'
import Image from 'next/image'
import { cloudinaryLoader } from '@/helpers/cloudinary'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { fadeIn } from '../../utils/motion'
import generateRandomColor from '@/utils/generateRandomColor'

type ProjecCardProps = {
  project: ProjectData
  index: number
}

const ProjectCard = ({ project, index }: ProjecCardProps) => {
  const { _id, name, type, text, skills, items, btnText, btnCode, url, imgSrc, githubUrl } = project

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt className={styles.tilt_container} scale={1} transitionSpeed={450} tiltMaxAngleX={25} tiltMaxAngleY={25}>
        <div className={styles.image_container}>
          <Image
            src={imgSrc}
            alt="my locker"
            width={250}
            height={250}
            loader={cloudinaryLoader}
            priority
            className={styles.image}
          />
          <div className={styles.links}>
            <div className={`black-gradient ${styles.github}`}>
              <a target="_blank" href={githubUrl}>
                <Image src="/images/github.png" alt="github-link" width={50} height={50} />
              </a>
            </div>
            <div className={`black-gradient ${styles.project_url}`}>
              <a target="_blank" href={url}>
                <Image src={imgSrc} alt="project-link" width={50} height={50} loader={cloudinaryLoader} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.content_wrapper}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.tags}>
          {skills.map((tag) => {
            const randomColor = generateRandomColor()

            return (
              <p key={`${tag}-${index}`} style={{ color: randomColor, fontSize: '14px', fontWeight: '600' }}>
                #{tag}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}
export default ProjectCard
