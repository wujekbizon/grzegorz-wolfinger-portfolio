import styles from './Footer.module.scss'
import { Social, ContactForm } from '@/components'
import { SectionWrapper } from '@/hoc'
import { motion } from 'framer-motion'
import { text2Variant } from '../utils/motion'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ContactForm />
        <Social />
      </div>
    </>
  )
}
export default SectionWrapper(Footer, 'contact')
