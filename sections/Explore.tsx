import styles from './Explore.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { features, modernLinks } from '@/data/features'
import { TypingText } from '@/components/animation/CustomText'

const Explore = () => {
  const [active, setActive] = useState(false)

  const onClickHandler = () => {
    setTimeout(() => {
      setActive(!active)
    }, 500)
  }

  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.explore}
      >
        <motion.div className={styles.explore_cloud}>
          <motion.div variants={fadeIn('right', 'tween', 0.7, 1)} className={styles.image_container}>
            <Image src="/images/cloud.png" alt="cloud" width={700} height={400} />
          </motion.div>
          <div className={styles.titles}>
            <TypingText title="# Cloud Services" textStyles={styles.cloud_typing} />
            {features.map((feature, index) => (
              <motion.h1 variants={fadeIn('left', 'tween', 1 + index / 2, 1)} key={feature.id}>
                {feature.title}
              </motion.h1>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.explore_modern} variants={fadeIn('left', 'tween', 1.3, 1)}>
          <div>
            <TypingText title="# Modern Applications" textStyles={styles.cloud_typing} />
            {modernLinks.map((link) => (
              <h1 key={link.id}>{link.link}</h1>
            ))}
          </div>
          <div className={active ? 'active feedback_gradient' : 'feedback_gradient'} />
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
