import styles from './FeatureProject.module.scss'
import Image from 'next/image'

interface FeatureProjectProps {
  id: number
  projectName: string
  url: string
  imgSrc: string
  info: string
}

const FeatureProject = ({
  id,
  projectName,
  url,
  imgSrc,
  info
}: FeatureProjectProps) => {
  return (
    <article key={id} className={styles.wrapper}>
      <div className={styles.project_title}>
        <span>◻️</span>
        <h2>{projectName}</h2>
      </div>
      <div className={styles.feature_project}>
        <div className={styles.image_container}>
          <a target="_blank" href={url}>
            <Image src={imgSrc} alt={projectName} width={400} height={250} />
          </a>
        </div>
        <h4 className={styles.content}>{info}</h4>
      </div>
    </article>
  )
}
export default FeatureProject
