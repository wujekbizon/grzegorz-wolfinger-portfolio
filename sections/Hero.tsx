import styles from './Hero.module.scss'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { init } from 'ityped'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { TypingText } from '@/components/animation/CustomText'

const text = ["Todays web, slowly reaching it's limits.", 'Clouds services are getting more expensive.', 'Is there any way of changing that?']

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [debouncedText, setDebouncedText] = useState(text)

  // useEffect(() => {
  //   if (!textRef.current) {
  //     return
  //   }

  //   init(textRef.current, {
  //     showCursor: false,
  //     strings: debouncedText,
  //     typeSpeed: 60,
  //     backDelay: 1800,
  //     backSpeed: 20
  //   })
  // }, [debouncedText])

  return (
    <section className={`${'section_wrapper'} ${styles.hero}`}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={styles.motion_wrapper}>
        <motion.div className={styles.left}>
          {/* <h1 className={styles.ityped} ref={textRef}>
            {' '}
          </h1> */}
          <TypingText title={`Todays web, slowly reaching it's limits.`} />
          
          {/* <TypingText title="Is there any way of changing that?" /> */}
          <motion.h2 variants={fadeIn('right', 'tween', 4, 1)}>
            
            <span>&gt; </span> What's next?
            {/* <TypingText title="Clouds services are getting more expensive." /> */}
          </motion.h2>
          <motion.h6 variants={zoomIn(2, 1)}>
          <span>&#8650; </span>Scroll down 
          </motion.h6>
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween', 2,1)} className={` ${styles.right}`}>
          <Image src="/images/cloud.png" alt="cloud" width={550} height={350} />
        </motion.div>
      </motion.div>
    </section>
  )
}
export default Hero
