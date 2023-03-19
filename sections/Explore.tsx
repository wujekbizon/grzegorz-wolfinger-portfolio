import styles from './Explore.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/utils/motion'
import { features, modernLinks } from '@/data/features'
const Explore = () => {
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
          variants={fadeIn('left', 'tween', 1, 1)}
        >
          <div>
            {modernLinks.map((link) => (
              <h1 key={link.id}>{link.link}</h1>
            ))}
          </div>
          <div>
            <Image src="/images/bot.png" alt="ai" width={700} height={400} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
export default Explore
