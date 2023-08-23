import styles from './Title.module.scss'

const Title = ({ title }: { title: string }) => {
  return <h1 className={styles.title}>{title}</h1>
}
export default Title
