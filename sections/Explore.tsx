import styles from './Explore.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { features, modernLinks } from '@/data/features'
import { TypingText } from '@/components/animation/CustomText'
import FatalErrorAnimation from '@/components/animation/FatalError'

const Explore = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.explore}
      >
        <article className={styles.explore_cloud}>
          <motion.div variants={fadeIn('right', 'tween', 1, 1)} className={styles.image_container}>
            <Image src="/images/cloud.png" alt="cloud" width={700} height={400} />
          </motion.div>
          <div className={styles.titles}>
            <TypingText title="# Cloud Services" textStyles={styles.typing} />
            {features.map((feature, index) => (
              <motion.h1 variants={fadeIn('left', 'tween', 1 + index / 2, 1)} key={feature.id}>
                {feature.title}
              </motion.h1>
            ))}
          </div>
        </article>

        <article className={styles.explore_modern_app}>
          <div className={styles.titles}>
            <TypingText title="# Modern Applications" textStyles={styles.typing} />
            {modernLinks.map((link, index) => (
              <motion.h1 variants={fadeIn('right', 'tween', 1 + index / 2, 1)} key={link.id}>
                {link.link}
              </motion.h1>
            ))}
          </div>
          <FatalErrorAnimation />
        </article>
      </motion.div>
    </section>
  )
}
export default Explore
