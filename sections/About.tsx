import styles from './About.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { aboutTexts } from '@/data/about'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'
import { GrContact } from 'react-icons/gr'

const About = () => {
  const [isBionicReading, setIsBionicReading] = useState(true)

  return (
    <>
      <motion.div variants={fadeIn('left', 'tween', 0.5, 0.5)} className={`glassmorphism ${styles.content_container}`}>
        <div className={styles.title}>
          <h1>
            Hi, I'm <span className={styles.letter}>G</span>rzegorz <span className={styles.letter}>W</span>olfinger
          </h1>

          <h4>
            NextJs/React Developer <span>|</span> Junior Web Developer <span>|</span> JavaScript Engineer
          </h4>
        </div>

        <Image src="/images/me.jpg" alt="dev" width={150} height={150} priority className={styles.image} />

        <a href="#contact">
          <motion.button
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className={`${styles.scroll_btn}`}
          >
            <GrContact className={styles.icon} />
          </motion.button>
        </a>

        <hr className={styles.hr} />
        <div className={styles.about_title}>
          <h2># About Me</h2>
          <button onClick={() => setIsBionicReading(!isBionicReading)} className={styles.bionic_btn}>
            {' '}
            Bionic Reading -{isBionicReading ? 'Off' : 'On'}
          </button>
        </div>

        {aboutTexts.map(({ id, text }) => (
          <h4 className={`${isBionicReading ? 'bold' : 'normal'} ${styles.content}`} key={id}>
            {text}
          </h4>
        ))}
      </motion.div>
    </>
  )
}
export default SectionWrapper(About, '')
