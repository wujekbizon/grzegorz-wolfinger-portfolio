import styles from './PortfolioTitle.module.scss'
import { TitleButton, Title, Line, VerticalLine, NeonDigit } from '@/components'

const PortfolioTitle = () => {
  return (
    <section className={styles.portfolio_title}>
      <div className={styles.title}>
        <TitleButton title="My recent additions to" />
        <Title title="Portfolio Projects" />
      </div>
      {/* <div className={styles.digital_screen}>
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="transparent" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
        <NeonDigit width="25px" height="20px" color="white" />
      </div> */}
    </section>
  )
}
export default PortfolioTitle
