import styles from './ContactForn.module.scss'
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '../../utils/motion'
import { Social } from '@/components'
import Tilt from 'react-parallax-tilt'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

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

    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      return
    }

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Grzegorz Wolfinger',
          from_email: form.email,
          to_email: 'grzegorz.wolfinger@gmail.com',
          message: form.message
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          toast.success('Message successfully sent!')
          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          toast.error('Failed to send the message, please try again')
        }
      )
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
