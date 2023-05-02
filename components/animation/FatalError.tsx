import styles from './FatalError.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const FatalErrorAnimation = () => {
  const [active, setActive] = useState(false)
  const [activeLaser, setActiveLaser] = useState(false)
  const [activeImplosion, setActiveImplosion] = useState(false)
  const [activeGradient, setActiveGradient] = useState(false)

  const onClickHandler = () => {
    if (active && activeLaser && activeImplosion && activeGradient) {
      setActive(!active)
      setActiveLaser(!activeLaser)
      setActiveImplosion(!activeImplosion)
      setActiveGradient(!activeGradient)
    } else {
      setTimeout(() => {
        setActive(true)
      }, 100)
      setTimeout(() => {
        setActiveLaser(true)
      }, 500)
      setTimeout(() => {
        setActiveImplosion(true)
      }, 1200)
      setTimeout(() => {
        setActiveGradient(true)
      }, 1700)
    }
  }

  return (
    <motion.div variants={fadeIn('left', 'tween', 1.3, 1)} className={styles.animation_container}>
      <div className={active ? 'eye_gradient' : ''} />
      <div className={active ? 'eye2_gradient' : ''} />
      <div className={activeLaser ? 'laser_gradient' : ''} />
      <div className={activeLaser ? 'laser2_gradient' : ''} />
      <div className={activeImplosion ? 'black_gradient' : ''} />
      <div className={activeImplosion ? 'boil_gradient' : ''} />
      <div className={activeGradient ? 'active feedback_gradient' : 'feedback_gradient'} />
      <div className={styles.image_container}>
        <Image src="/images/bot.png" alt="ai" width={500} height={500} />
        <button onClick={onClickHandler} className={styles.btn}>
          {!active ? 'Run "Fatal Error Animation"' : 'Abort Termination'}
        </button>
      </div>
    </motion.div>
  )
}
export default FatalErrorAnimation
