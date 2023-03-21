import styles from './About.module.scss'
import Image from 'next/image'
import { aboutTexts } from '@/data/about'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { profileItems } from '@/data/about'

const About = () => {
  return (
    <section className={styles.wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.about}
      >
        <div className={styles.container}>
          <div className={styles.image_container}>
            <Image
              src="/images/founder.jpg"
              alt="dev"
              width={450}
              height={450}
              priority
              className={styles.image}
            />
            <div className={styles.emoji_container}>🎯</div>

            <div>
              {profileItems.map(({ id, icon, title, date, link }) => (
                <div className={styles.item} key={id}>
                  {link && (
                    <>
                      {icon}
                      <a target="_blank" href={link}>
                        {title}
                      </a>
                    </>
                  )}
                  {date && date.toDateString()}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <hr className={styles.hr} />
            {aboutTexts.map(({ id, text }) => (
              <h4 className={styles.content} key={id}>
                {text}
              </h4>
            ))}
            <hr className={styles.hr} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default About
