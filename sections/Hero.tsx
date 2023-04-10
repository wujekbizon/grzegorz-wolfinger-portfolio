import styles from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import Image from 'next/image'
import { customers } from '@/data/customers'
import { ScrollButton } from '@/components'

type User = {
  id: number
  name: string
  top: string
  left: string
  status: string
}

const Hero = () => {
  let onlineUsers: User[] = customers.reduce((acc: User[], currentValue) => {
    if (currentValue.status === 'online') {
      acc.push(currentValue)
    }
    return acc
  }, [])

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
          <motion.h1 className={`${styles.hero_uppertitle}`} variants={fadeIn('up', 'tween', 0.3, 1)}>
            Today's <span> web </span>is pushing the boundaries of what is possible.
          </motion.h1>
          <div className={styles.map_container}>
            <div className={styles.network}>
              <h2>P2P Connection Network</h2>
              <div className={styles.status}>
                <div className={`${styles.status_online}`} />
                <h6> - online user</h6>
              </div>
              <div className={styles.status}>
                <div className={`${styles.status_offline}`} />
                <h6> - offline user</h6>
              </div>
              <div>
                <h4 className={styles.total_users}>
                  Total Users: <span className="gradient_hero"> {onlineUsers.length} </span> / {customers.length}
                </h4>
              </div>
            </div>
            {customers.map((customer, index) => {
              return (
                <motion.div
                  variants={zoomIn(index * 0.5, 0.4)}
                  key={customer.id}
                  className={customer.status === 'online' ? styles.dot : styles.dot_offline}
                  style={{ top: customer.top, left: customer.left }}
                >
                  <div className={styles.dot_container}>
                    <p className={styles.dot_content}>
                      {customer.status === 'online' ? customer.name : 'User Offline'}
                    </p>
                  </div>
                </motion.div>
              )
            })}
            <Image src="/images/map.png" alt="map" width={700} height={350} priority className={styles.map} />
          </div>

          <motion.h1 className={` ${styles.hero_lowertitle}`} variants={fadeIn('down', 'tween', 0.3, 1)}>
            Let's create a network of endless possibilities <span>together</span>.
          </motion.h1>
        </motion.div>
      </div>
      {/* <motion.h6 className={styles.scroll} variants={fadeIn('up', 'tween', 1, 1)}>
        <span>&#8650; </span>Scroll down
 
      </motion.h6> */}
      <div className={styles.scroll}>
        <ScrollButton tag="explore" />
      </div>
    </motion.section>
  )
}
export default Hero
