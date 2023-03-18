import styles from './Explore.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/utils/motion'
import { features } from '@/data/features'
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
          variants={fadeIn('down', 'tween', 1, 1)}
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
          variants={fadeIn('up', 'tween', 1, 1)}
        >
          <h1>
            How should we create a modern, scalable application that is
            cost-effective, cross-platform, secure, using a P2P network,
            reliable and most of the task we can commission to artificial
            intelligence ? The answer is simple :
          </h1>
          <h2 className={styles.socket}>
            {' '}
            Socket
            <span className="gradient_private"> Supply CO.</span>
            <br />
          </h2>
          <div>
            <Image src="/images/bot.png" alt="ai" width={700} height={400} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
export default Explore
