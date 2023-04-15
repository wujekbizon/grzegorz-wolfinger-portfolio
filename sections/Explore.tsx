import styles from './Explore.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { features, modernLinks } from '@/data/features'
import { TypingText } from '@/components/animation/CustomText'
import FatalErrorAnimation from '@/components/animation/FatalError'
import Link from 'next/link'
import { SectionWrapper } from '@/hoc'

const Explore = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.explore}
      >
        <motion.div variants={fadeIn('down', 'twwen', 1, 1)}>
          <p className={styles.subtitle}>Introduction</p>
          <h2 className={styles.title}>Overview.</h2>
        </motion.div>

        <article className={styles.divider}>
          <motion.h1 variants={fadeIn('up', 'tween', 1, 1)}>
            As a developer, I believe applications should be scalable, cost-effective, cross-platform, secure and should
            utilizing a <span className={styles.span}> peer-to-peer network </span>
          </motion.h1>
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
        <article className={styles.divider}>
          <motion.h1 variants={zoomIn(1, 2)}>
            Today's <span className={styles.span}> web </span>is pushing the boundaries of what is possible. Let's
            create a network of endless possibilities <span className={styles.span}>together</span>.
          </motion.h1>
        </article>
        <article className={styles.explore_cloud}>
          <motion.div variants={fadeIn('right', 'tween', 1, 1)} className={styles.image_container}>
            <Image src="/images/cloud.png" alt="cloud" width={550} height={400} />
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

        <article className={styles.divider}>
          <motion.h1 variants={fadeIn('up', 'tween', 1.2, 1)}>
            Do you want to find out more about new ways of creating applications?{' '}
            <Link href="/about#contact">
              Please <span className={styles.span}>contact me</span>
            </Link>
          </motion.h1>
        </article>
      </motion.section>
    </>
  )
}
export default SectionWrapper(Explore, 'explore')
