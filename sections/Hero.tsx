import styles from './Hero.module.scss'
import { useState } from 'react'
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
let allUsers: User[] = []

const Hero = () => {
  const [users, setUsers] = useState<User[]>(customers)
  const [isAllConnected, setIsAllConnected] = useState(false)

  let onlineUsers: User[] = customers.reduce((acc: User[], currentValue) => {
    if (currentValue.status === 'online') {
      acc.push(currentValue)
    }
    return acc
  }, [])

  const onClickHandler = () => {
    if (isAllConnected) {
      for (let user of allUsers) {
        user.status = 'offline'
      }

      setUsers(allUsers)
      setIsAllConnected(false)
      return
    }

    allUsers = []

    for (let customer of customers) {
      customer.status = 'online'
      allUsers.push(customer)
    }
    setIsAllConnected(true)
    setUsers(allUsers)
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={styles.hero}
    >
      <div className={styles.hero_wrapper}>
        <motion.div variants={zoomIn(0.5, 0.5)} className={styles.title_container}>
          <div className={styles.map_container}>
            <div className={styles.network}>
              <h2>P2P Connection Network</h2>
              <div className={styles.total_users}>
                <h4>
                  Total Connected Users: <span className="gradient_hero"> {onlineUsers.length} </span> /{' '}
                  {customers.length}
                </h4>
                <div className={styles.status}>
                  <div className={`${styles.status_online}`} />
                  <h6> - online user</h6>

                  <div className={`${styles.status_offline}`} />
                  <h6> - offline user</h6>
                </div>
                <motion.button className={styles.users_btn} onClick={onClickHandler}>
                  <motion.h6
                    animate={{
                      y: [0, 0, 0],
                      x: [0, -24, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                  >
                    {isAllConnected ? 'Disconnnect Users' : 'Connect All Users'}
                  </motion.h6>
                </motion.button>
              </div>
            </div>
            {users.map((customer, index) => {
              return (
                <motion.div
                  variants={zoomIn(index * 0.2, 0.4)}
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
        </motion.div>
        <div className={styles.filler}>
          <p>All data are fetched from DB , there is no limit of users in P2P network.</p>
        </div>
        <div className={styles.scroll}>
          <ScrollButton tag="explore" />
        </div>
      </div>
    </motion.section>
  )
}
export default Hero
