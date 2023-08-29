import styles from './PortfolioTitle.module.scss'
import { motion } from 'framer-motion'
import { TitleButton, Title } from '@/components'

const PortfolioTitle = () => {
  return (
    <section className={styles.portfolio_title}>
      <div className={styles.title}>
        <TitleButton title="My recent additions to" />
        <Title title="Portfolio Projects" />
      </div>
      <div className={styles.scroll}>
        <motion.h4
          animate={{ x: [-45, 0], opacity: [0, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          Scroll Right -&gt;
        </motion.h4>
      </div>
    </section>
  )
}
export default PortfolioTitle
