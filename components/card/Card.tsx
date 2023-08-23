import styles from './Card.module.scss'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Title, TitleButton, ExploreLink } from '..'
import { CardProps } from '@/types'

const Card = ({ description, title, titleBtn, imgSrc, text, url, style, custom }: CardProps) => {
  const { ref, inView } = useInView()

  return (
    <div
      className={`${inView ? styles.show : ''} ${styles.card} ${custom ? styles.custom_animation : styles.animation}`}
      ref={ref}
      style={{ ...style }}
    >
      <div className={styles.card_content}>
        <TitleButton title={titleBtn} />
        <Title title={title} />
        <p>{description}</p>
        <ExploreLink text={text} url={url} />
      </div>
      <div className={styles.card_image}>
        <Image src={imgSrc} alt={title} />
      </div>
    </div>
  )
}
export default Card
