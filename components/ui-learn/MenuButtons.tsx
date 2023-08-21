import styles from './MenuButtons.module.scss'
import { CustomButton } from '@/components'
import type { MenuButtonsInterface } from '@/types'

const MenuButtons = ({ isStudy, isTest, handleModeStudy, handleHomeBack, handleModeTest }: MenuButtonsInterface) => {
  return (
    <div className={styles.btns}>
      {!isStudy && (
        <CustomButton onClick={handleModeStudy} className={styles.side_btn}>
          Nauka
        </CustomButton>
      )}
      {!isTest && (
        <CustomButton onClick={handleModeTest} className={styles.side_btn}>
          Test
        </CustomButton>
      )}
      {(isTest || isStudy) && (
        <CustomButton onClick={handleHomeBack} className={styles.side_btn}>
          Strona Główna
        </CustomButton>
      )}
    </div>
  )
}
export default MenuButtons
