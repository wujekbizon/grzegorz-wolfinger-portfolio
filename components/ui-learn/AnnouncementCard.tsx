import styles from './AnnouncementCard.module.scss'
import type { AnnouncementCardInterface } from '@/types'

const AnnouncementCard: React.FC<AnnouncementCardInterface> = ({ title, content }) => {
  return (
    <div className={styles.announcement_card}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}
export default AnnouncementCard
