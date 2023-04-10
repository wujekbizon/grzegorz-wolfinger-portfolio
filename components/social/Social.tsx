import styles from './Social.module.scss'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { profileItems } from '@/data/about'
import { humanReadableDate } from '@/utils/date'
import { fadeIn } from '@/utils/motion'
import { TagLink } from '@/components'

const Social = () => {
  return (
    <div className={styles.social_container}>
      <motion.div variants={fadeIn('right', 'tween', 0.4, 1)} className={styles.date}>
        {humanReadableDate && <h2>Today is {humanReadableDate}r.</h2>}
        <div className={styles.emoji_container}>
          <span>📅</span>
        </div>
      </motion.div>
      <div className={styles.tags}>
        {profileItems.map(({ id, icon, title, link }, index) => {
          return (
            <Fragment key={id}>
              <motion.div variants={fadeIn('right', 'tween', 1 + index / 2, 0.8)} className={styles.item}>
                {link && <TagLink icon={icon} title={title} link={link} />}
                {!link && <TagLink icon={icon} title={title} />}
              </motion.div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
export default Social
