import styles from './Explore.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { features, modernLinks } from '@/data/features'
const Explore = () => {
  const [active, setActive] = useState(false)

  const onClickHandler = () => {
    setTimeout(() => {
      setActive(!active)
    }, 500)
  }

  return (
    <section className={`section_wrapper`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.explore}
      >
        <motion.div
          className={styles.left}
          variants={fadeIn('right', 'tween', 1, 1)}
        >
          <div>
            <Image
              src="/images/cloud.png"
              alt="cloud"
              width={700}
              height={400}
            />
          </div>

          <div>
            {features.map((feature) => (
              <h1 key={feature.id}>{feature.title}</h1>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={fadeIn('left', 'tween', 2, 1)}
        >
          <div>
            {modernLinks.map((link) => (
              <h1 key={link.id}>{link.link}</h1>
            ))}
          </div>
          <div
            className={
              active ? 'active feedback_gradient' : 'feedback_gradient'
            }
          />
          <div style={{ position: 'relative' }}>
            <div className={active ? 'eye_gradient' : ''} />
            <div className={active ? 'eye2_gradient' : ''} />
            <div className={active ? 'laser_gradient' : ''} />
            <div className={active ? 'laser2_gradient' : ''} />
            <div className={active ? 'boil_gradient' : ''} />
            <div className={active ? 'black_gradient' : ''} />
            <Image src="/images/bot.png" alt="ai" width={700} height={400} />
            <button onClick={onClickHandler} className={styles.btn}>
              Fatal Error
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
export default Explore
