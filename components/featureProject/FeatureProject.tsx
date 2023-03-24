import styles from './FeatureProject.module.scss'
import { Fragment } from 'react'
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
    <Fragment key={id}>
      <div className={styles.about_title}>
        <span>◻️</span>
        <h2>{projectName}</h2>
      </div>
      <div className={styles.feature_project}>
        <a target="_blank" href={url}>
          <Image src={imgSrc} alt={projectName} width={400} height={250} />
        </a>
        <h4 className={styles.content}>{info}</h4>
      </div>
    </Fragment>
  )
}
export default FeatureProject
