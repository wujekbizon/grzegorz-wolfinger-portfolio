import styles from './TitleButton.module.scss'

const TitleButton = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className={styles.title_button}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4.03482" cy="3.79312" r="4.69839" fill="#db6300" />
        </svg>
        <h4>{title}</h4>
      </div>
    </div>
  )
}
export default TitleButton
