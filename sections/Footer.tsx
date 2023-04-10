import styles from './Footer.module.scss'
import { ContactForm } from '@/components'
import { SectionWrapper } from '@/hoc'

const Footer = () => {
  return (
    <>
      <ContactForm />
    </>
  )
}
export default SectionWrapper(Footer, 'contact')
