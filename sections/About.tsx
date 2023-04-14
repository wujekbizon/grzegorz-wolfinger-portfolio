import styles from './About.module.scss'
import Image from 'next/image'
import { aboutTexts } from '@/data/about'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'
import { ScrollButton } from '@/components'

const About = () => {
  return (
    <>
      <motion.div variants={fadeIn('left', 'tween', 1, 1)} className={styles.content_container}>
        <div className={styles.title}>
          <h1>
            Hi, I'm <span className={styles.letter}>G</span>rzegorz <span className={styles.letter}>W</span>olfinger
          </h1>

          <h4>
            NextJs/React Developer <span>|</span> Junior Web Developer <span>|</span> JavaScript Engineer
          </h4>
        </div>

        <Image src="/images/me.jpg" alt="dev" width={150} height={150} priority className={styles.image} />
        <hr className={styles.hr} />
        <div className={styles.about_title}>
          <span>◻️</span> <h2>About Me</h2>
        </div>

        {aboutTexts.map(({ id, text }) => (
          <h4 className={styles.content} key={id}>
            {text}
          </h4>
        ))}
        <div className={styles.scroll_btn}>
          <ScrollButton tag="work" />
        </div>
      </motion.div>
    </>
  )
}
export default SectionWrapper(About, '')
