import styles from './ScrollButton.module.scss'
import { motion } from 'framer-motion'

const ScrollButton = () => {
  return (
    <div className={styles.container}>
      <a href="#about">
        <div className={styles.btn_container}>
          <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className={styles.btn}
          />
        </div>
      </a>
    </div>
  )
}
export default ScrollButton
