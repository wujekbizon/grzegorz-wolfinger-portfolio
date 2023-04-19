import styles from './SwipeButton.module.scss'
import { motion } from 'framer-motion'
import { zoomIn } from '@/utils/motion'

type SwipeButtonProps = {
  onClickHandler: () => void
}

const SwipeButton = ({ onClickHandler }: SwipeButtonProps) => {
  return (
    <motion.div variants={zoomIn(0.5, 0.5)} className={styles.btn_container}>
      <motion.input
        animate={{
          x: [0, -100, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        type="checkbox"
        onClick={onClickHandler}
      />
      <h6>Press to Unlock</h6>
    </motion.div>
  )
}
export default SwipeButton
