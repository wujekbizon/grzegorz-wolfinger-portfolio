import styles from './Technologies.module.scss'
import { technologyStack } from '../data/constants/skills'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// components
import { Title, TitleButton } from '../components'
import { Fragment } from 'react'

const Technologies = () => {
  const { ref, inView } = useInView()

  return (
    <section className={styles.technologies} ref={ref} style={{ opacity: `${inView ? 1 : 0}` }}>
      <div className={styles.technologies_title}>
        <TitleButton title="My Favorite Folder Of" />
        <Title title="Tech Stack" />
      </div>
      <div className={styles.technologies_grid} ref={ref} style={{ translate: `${inView ? '0%' : '120%'}` }}>
        {technologyStack.map((tech) => (
          <Fragment key={tech.id}>{tech.icon}</Fragment>
          // <Image src={tech} alt="tech" key={index} className={styles.tech_image} width={56} height={56} />
        ))}
      </div>
    </section>
  )
}
export default Technologies
