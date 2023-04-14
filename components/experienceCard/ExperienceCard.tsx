import styles from './ExperienceCard.module.scss'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import type { ExperienceProps } from '@/types'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'radial-gradient(#f49867 20%, #040c18 100%)',
        border: '1px solid #040c18',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid #f49867' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.image_container}>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={100}
            height={100}
            className={styles.image}
          />
        </div>
      }
    >
      <div>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.name} style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className={styles.list}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={styles.list_item}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
export default ExperienceCard
