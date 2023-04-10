import styles from './Footer.module.scss'
import { Social, ContactForm } from '@/components'
import { SectionWrapper } from '@/hoc'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Social />
        <ContactForm />
      </div>
    </>
  )
}
export default SectionWrapper(Footer, 'footer')
