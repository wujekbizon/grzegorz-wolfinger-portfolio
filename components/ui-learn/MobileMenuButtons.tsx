import styles from './MobileMenuButtons.module.scss'
import { CustomButton } from '@/components'
import type { MobileMenuButtonsInterface } from '@/types'

const MobileMenuButtons: React.FC<MobileMenuButtonsInterface> = ({
  isStudy,
  isTest,
  isSidePanelOpen,
  handleModeStudy,
  handleModeTest,
  handleHomeBack,
}) => {
  return (
    <aside className={`${styles.mobile_side_panel} ${isSidePanelOpen ? styles.side_open : styles.side_close}`}>
      {!isStudy && (
        <CustomButton onClick={handleModeStudy} className={styles.mobile_side_btn}>
          Nauka
        </CustomButton>
      )}
      {!isTest && (
        <CustomButton onClick={handleModeTest} className={styles.mobile_side_btn}>
          Test
        </CustomButton>
      )}
      {(isTest || isStudy) && (
        <CustomButton onClick={handleHomeBack} className={styles.mobile_side_btn}>
          Strona Główna
        </CustomButton>
      )}
    </aside>
  )
}
export default MobileMenuButtons
