import styles from './FeatureProject.module.scss'
import Image from 'next/image'

interface FeatureProjectProps {
  id: number
  projectName: string
  url: string
  imgSrc: string
  info: string
  logo?: string
}

const FeatureProject = ({
  id,
  projectName,
  url,
  imgSrc,
  info,
  logo
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
            <Image
              src={imgSrc}
              alt={projectName}
              width={400}
              height={250}
              priority
              className={styles.image}
            />
            <div className={styles.cover} />
          </a>
        </div>
        <div className={styles.content}>
          <h4>{info}</h4>
          <div className={styles.logo_container}>
            {logo && (
              <Image
                src={logo}
                className={styles.logo}
                alt="logo"
                width={60}
                height={60}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
export default FeatureProject
