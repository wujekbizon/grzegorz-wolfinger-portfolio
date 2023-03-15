import styles from './Hero.module.scss'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { init } from 'ityped'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'

const text = ["Todays web, slowly reaching it's limits.", 'Clouds services are getting more expensive.', 'Is there any way of changing that?']

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    if (!textRef.current) {
      return
    }

    init(textRef.current, {
      showCursor: false,
      strings: debouncedText,
      typeSpeed: 60,
      backDelay: 1800,
      backSpeed: 20
    })
  }, [debouncedText])

  return (
    <section className={`${'section_wrapper'} ${styles.hero}`}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={styles.motion_wrapper}>
        <motion.div variants={fadeIn('right', 'tween', 0.1, 0.1)} className={styles.left}>
          <h1 className={styles.ityped} ref={textRef}>
            {' '}
          </h1>
          <motion.h2 variants={fadeIn('right', 'tween', 4, 1)}>
            {' '}
            <span>&gt; </span> What's next?
          </motion.h2>
          <motion.h6 variants={zoomIn(14, 1.3)}>
          <span>&#8650; </span>Scroll down 
          </motion.h6>
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween', 6, 1.2)} className={` ${styles.right}`}>
          <Image src="/images/cloud.png" alt="cloud" width={520} height={300} />
        </motion.div>
      </motion.div>
    </section>
  )
}
export default Hero
