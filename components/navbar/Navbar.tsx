import styles from './Navbar.module.scss'
import { links } from '@/data/links'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import { Logo } from '@/components'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  return (
    <motion.header variants={navVariants} initial="hidden" whileInView="show" className={styles.header}>
      <div className={`${styles.navbar_gradient} gradient_01 `} />
      <nav className={styles.navbar}>
        <Logo />
        <ul className={styles.links}>
          {links.map(({ label, url }) => (
            <li
              className={url === router.pathname ? `${styles.active} ${styles.link_btn}` : `${styles.link_btn}`}
              key={label}
            >
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
export default Navbar
