import styles from './SidePanelTitle.module.scss'
import { ReactNode } from 'react'

type SidePanelTitleProps = {
  children: ReactNode
  color?: string
  primaryColor?: string
  secondaryColor?: string
}

const SidePanelTitle = ({
  children,
  primaryColor = '#ae67fa',
  secondaryColor = '#f49867',
  color,
}: SidePanelTitleProps) => {
  return (
    <div
      className={styles.side_top}
      style={{ background: `linear-gradient(109.97deg, ${primaryColor} 1.84%, ${secondaryColor}  102.67%)` }}
    >
      <h2 style={{ color }}>{children}</h2>
    </div>
  )
}
export default SidePanelTitle
