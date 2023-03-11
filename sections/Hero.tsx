import styles from './Hero.module.scss'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { init } from 'ityped'

const text = ["Todays web, slowly reaching it's limits.", 'Clouds services are getting more expensive.']

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    if (!textRef.current) {
      return
    }

    init(textRef.current, {
      cursorChar: '',
      showCursor: true,
      strings: debouncedText,
      backDelay: 1800,
      backSpeed: 20
    })
  }, [debouncedText])

  return (
    <section className={`${'section_wrapper'} ${styles.hero}`}>
      <div className={styles.left}>
        <h1 className={styles.ityped} ref={textRef}></h1>
        <h4></h4>
      </div>

      <div className={styles.right}>
        <Image src="/images/cloud.png" alt="cloud" width={520} height={300} />
      </div>
    </section>
  )
}
export default Hero
