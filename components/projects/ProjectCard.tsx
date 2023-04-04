import { ProjectData } from '@/types'
import Image from 'next/image'
import { cloudinaryLoader } from '@/helpers/cloudinary'
import styles from './ProjectCard.module.scss'

const ProjectCard = ({
  _id,
  name,
  type,
  text,
  skills,
  items,
  btnText,
  btnCode,
  url,
  imgSrc,
  githubUrl
}: ProjectData) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        {/* <h1>{name}</h1> */}
        <Image src={imgSrc} alt="my locker" width={150} height={150} loader={cloudinaryLoader} priority />
      </div>
    </div>
  )
}
export default ProjectCard
