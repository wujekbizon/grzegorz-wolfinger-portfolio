import styles from './SectionWrapper.module.scss'
import { staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'

const SectionWrapper = (Component: () => JSX.Element, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.section_wrapper}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
