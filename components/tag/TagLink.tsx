import styles from './TagLink.module.scss'

type TagProps = {
  icon: JSX.Element
  title: string
  link?: string
}

const TagLink = ({ icon, title, link }: TagProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.tag}>
        <a target="_blank" href={link} className={styles.link}>
          <h4>{title}</h4>
        </a>
      </div>
    </div>
  )
}
export default TagLink
