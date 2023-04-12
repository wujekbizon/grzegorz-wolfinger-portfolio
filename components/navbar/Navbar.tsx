import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import { links } from '@/data/links'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import { Logo } from '@/components'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.header} ${scrolled ? 'scrolled' : ''}`}
    >
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

        <div className={styles.menu}>
          <Image
            src={toggle ? '/images/close.svg' : '/images/menu.svg'}
            alt="menu"
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {links.map(({ label, url }) => (
                <li
                  className={url === router.pathname ? `${styles.active} ${styles.link_btn}` : `${styles.link_btn}`}
                  key={label}
                >
                  <Link href={url}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
export default Navbar
