import styles from './About.module.scss'
import Image from 'next/image'
import { Fragment } from 'react'
import { aboutTexts } from '@/data/about'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import { profileItems } from '@/data/about'
import { humanReadableDate } from '@/utils/date'
import TagLink from '@/components/tag/TagLink'
import { featureProjects } from '@/data/features'

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
            <motion.div variants={zoomIn(0.3, 1)}>
              <Image
                src="/images/founder.jpg"
                alt="dev"
                width={450}
                height={450}
                priority
                className={styles.image}
              />
            </motion.div>
            <motion.div
              variants={fadeIn('right', 'tween', 0.4, 1)}
              className={styles.date}
            >
              {humanReadableDate && (
                <h2 className="gradient_text">
                  Welcome, today is {humanReadableDate}r.
                </h2>
              )}
              <div className={styles.emoji_container}>
                <span>📅</span>
              </div>
            </motion.div>
            <div className={styles.tags}>
              {profileItems.map(({ id, icon, title, link }, index) => {
                return (
                  <Fragment key={id}>
                    <motion.div
                      variants={fadeIn('right', 'tween', 1 + index, 0.8)}
                      className={styles.item}
                    >
                      {link && (
                        <TagLink icon={icon} title={title} link={link} />
                      )}
                      {!link && <TagLink icon={icon} title={title} />}
                    </motion.div>
                  </Fragment>
                )
              })}
            </div>
          </div>
          <motion.div
            variants={fadeIn('left', 'tween', 1, 1)}
            className={styles.content_container}
          >
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
              <span>◻️</span> <h2>About Me</h2>
            </div>
            <hr className={styles.hr} />
            {aboutTexts.map(({ id, text }) => (
              <h4 className={styles.content} key={id}>
                {text}
              </h4>
            ))}
            <hr className={styles.hr} />

            <div className={styles.about_title}>
              <span>◻️</span>
              <h2>Wolfpad 2.0 - Ineractive Coding Environment</h2>
            </div>

            {featureProjects.map(({ id, url, info, imgSrc, projectName }) => (
              <div className={styles.feature_project} key={id}>
                <a target="_blank" href={url}>
                  <Image
                    src={imgSrc}
                    alt={projectName}
                    width={400}
                    height={250}
                  />
                </a>
                <h4 className={styles.content}>{info}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
export default About
