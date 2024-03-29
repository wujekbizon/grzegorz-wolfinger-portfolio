import { useState } from 'react'
import styles from './InfoCard.module.scss'
import { BsPlusSquare } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import type { InfoCardProps } from '@/types'

const InfoCard: React.FC<InfoCardProps> = ({ title, content, links }) => {
  const [isShowTitle, setIsShowTitle] = useState(false)

  const handleShowContent = () => {
    setIsShowTitle(!isShowTitle)
  }

  return (
    <div className={styles.info_card}>
      <div className={styles.info_title}>
        <h2>{title}</h2>

        <div className={styles.icon_container}>
          {isShowTitle ? (
            <BiMinus size={20} color="black" onClick={handleShowContent} className={styles.icon} />
          ) : (
            <BsPlusSquare size={20} color="black" onClick={handleShowContent} className={styles.icon} />
          )}
        </div>
      </div>
      {isShowTitle && (
        <div className={styles.info_content}>
          <p>
            {content}
            {links &&
              links.map((link, index) => (
                <a href={link.url} target="_blank" className={styles.link} key={index}>
                  {link.title},{' '}
                </a>
              ))}
          </p>
        </div>
      )}
    </div>
  )
}
export default InfoCard
