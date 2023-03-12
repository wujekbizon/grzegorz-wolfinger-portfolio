import styles from './Navbar.module.scss'
import { links } from '@/data/links'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'

const Navbar = () => {
  return (
    <motion.header variants={navVariants} initial="hidden" whileInView="show" className={styles.header}>
      <div className={`${styles.navbar_gradient} gradient-01 `} />
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          {links.map(({ label, url }) => (
            <li key={label}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
export default Navbar
