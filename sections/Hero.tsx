import styles from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { TypingText } from '@/components/animation/CustomText'
import Image from 'next/image'
import { customers } from '@/data/customers'

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.hero}
    >
      <div className={styles.hero_wrapper}>
        <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className={styles.title_container}>
          <motion.h1 className={`${styles.hero_uppertitle}`} variants={fadeIn('down', 'tween', 2, 2)}>
            Today's web is pushing the boundaries of what is possible.
          </motion.h1>
          <div className={styles.map_container}>
            {customers.map((customer, index) => (
              <motion.div
                variants={zoomIn(index * 0.5, 0.4)}
                key={customer.id}
                className={styles.dot}
                style={{ top: customer.top, left: customer.left }}
              >
                <div className={styles.dot_container}>
                  <p className={styles.dot_content}>{customer.name}</p>
                </div>
              </motion.div>
            ))}
            <Image src="/images/map.png" alt="map" width={700} height={350} className={styles.map} />
          </div>
          <motion.h1 className={` ${styles.hero_lowertitle}`} variants={fadeIn('up', 'tween', 2.5, 2)}>
            Let's create <span>Together</span>, network of endless possibilities.
          </motion.h1>
        </motion.div>
      </div>
      <motion.h6 className={styles.scroll} variants={fadeIn('up', 'tween', 3, 1)}>
        <span>&#8650; </span>Scroll down
        <div className="footer_gradient" />
      </motion.h6>
    </motion.section>
  )
}
export default Hero
