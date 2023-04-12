import styles from './Logo.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo_container}>
        <Image src="/images/logo.png" alt="wolfinger" width={150} height={22} priority />
        <h1>| Portfolio</h1>
      </div>
    </Link>
  )
}

export default Logo
