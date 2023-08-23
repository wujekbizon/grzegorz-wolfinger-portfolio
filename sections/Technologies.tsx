import styles from './Technologies.module.scss'
import { technologyStack } from '../data/constants/skills'
import Image from 'next/image'

// components
import { Title, TitleButton } from '../components'

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <div className={styles.technologies_title}>
        <TitleButton title="My Favorite Folder Of" />
        <Title title="Tech Stack" />
      </div>
      <div className={styles.technologies_grid}>
        {technologyStack.map((tech, index) => (
          <Image src={tech} alt="tech" key={index} className={styles.tech_image} />
        ))}
      </div>
    </section>
  )
}
export default Technologies
