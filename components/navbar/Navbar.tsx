import styles from './Navbar.module.scss'
import { links } from '@/data/links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className={styles.header}>
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
    </header>
  )
}
export default Navbar
