import styles from './About.module.scss'
import Image from 'next/image'
import { Fragment } from 'react'
import { aboutTexts } from '@/data/about'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { TypingText } from '@/components/animation/CustomText'
import { profileItems } from '@/data/about'
import { humanReadableDate } from '@/utils/date'
import TagLink from '@/components/tag/TagLink'

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

            <div className={styles.date}>
              {humanReadableDate && (
                <h2 className="gradient_text">
                  Welcome, today is {humanReadableDate}
                </h2>
              )}
              <div className={styles.emoji_container}>
                <span>📅</span>
              </div>
            </div>
            <div className={styles.tags}>
              {profileItems.map(({ id, icon, title, link }) => {
                return (
                  <Fragment key={id}>
                    <div className={styles.item}>
                      {link && (
                        <TagLink icon={icon} title={title} link={link} />
                      )}
                    </div>
                  </Fragment>
                )
              })}
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.title}>
              <h1>
                Hi, I'm <span className={styles.letter}>G</span>rzegorz{' '}
                <span className={styles.letter}>W</span>olfinger
              </h1>
              <h4>
                NextJs/React Developer <span>|</span> Junior Web Developer{' '}
                <span>|</span> JavaScript Engineer
              </h4>
            </div>
            <div className={styles.about_title}>
              ◻️ <h2>About</h2>
            </div>
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
