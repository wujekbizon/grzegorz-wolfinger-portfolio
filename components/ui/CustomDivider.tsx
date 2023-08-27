import styles from './CustomDivider.module.scss'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

const CustomDivider = () => {
  const { ref, inView } = useInView()
  return (
    <div className={`${inView ? styles.show : ''} ${styles.divider_wrapper}`} ref={ref}>
      <article className={styles.divider}>
        <h1>
          Do you want to find out more about new ways of creating applications?{' '}
          <Link href="/about#contact">
            Please <span className={styles.span}>contact me</span>
          </Link>
        </h1>
      </article>
    </div>
  )
}
export default CustomDivider
