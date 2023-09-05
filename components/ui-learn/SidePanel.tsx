import styles from './SidePanel.module.scss'
import { SidePanelTitle, MenuButtons } from '@/components'
import type { SidePanelInterface } from '@/types'

const SidePanel: React.FC<SidePanelInterface> = ({
  handleHomeBack,
  handleModeStudy,
  handleModeTest,
  handleQuestionnaire,
  isSidePanelOpen,
  mode,
}) => {
  return (
    <aside
      className={styles.side_panel}
      style={{
        width: `${isSidePanelOpen ? '20%' : '0%'}`,
        opacity: `${isSidePanelOpen ? '1' : '0'}`,
      }}
    >
      <SidePanelTitle>Praktyczne testy dla Opiekuna Medycznego</SidePanelTitle>
      <div className={styles.side_bottom}>
        <MenuButtons
          isStudy={mode === 'study'}
          isTest={mode === 'test'}
          isForm={mode === 'form'}
          handleModeStudy={handleModeStudy}
          handleModeTest={handleModeTest}
          handleHomeBack={handleHomeBack}
          handleQuestionnaire={handleQuestionnaire}
        />
        <h4>® WESA 2023</h4>
      </div>
    </aside>
  )
}
export default SidePanel
