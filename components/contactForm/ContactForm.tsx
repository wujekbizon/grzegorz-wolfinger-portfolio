import styles from './ContactForn.module.scss'
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '../../utils/motion'
import { Social } from '@/components'
import Tilt from 'react-parallax-tilt'

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setLoading(true)
  }
  return (
    <Tilt scale={1} transitionSpeed={250} tiltMaxAngleX={10} tiltMaxAngleY={10} className={styles.contact}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className={styles.form_container}>
        <p className={styles.subtitle}>Get in touch</p>
        <h2 className={styles.title}>Contact.</h2>

        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span className={styles.span}>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={styles.input}
            />
          </label>

          <button type="submit" className={styles.btn}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className={styles.social_container}>
        <Social />
      </motion.div>
    </Tilt>
  )
}
export default ContactForm
