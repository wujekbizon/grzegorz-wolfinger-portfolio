import styles from './Logo.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <h1>Grzegorz</h1>
      <Link href="/">
        <Image src="/images/logo.png" alt="wolfinger" width={180} height={22} />
      </Link>
      <h1>Portfolio</h1>
    </div>
  )
}

export default Logo
