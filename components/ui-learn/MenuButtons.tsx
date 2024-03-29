import styles from './MenuButtons.module.scss'
import { CustomButton } from '@/components'
import type { MenuButtonsInterface } from '@/types'

const MenuButtons = ({
  isStudy,
  isTest,
  isForm,
  handleModeStudy,
  handleHomeBack,
  handleModeTest,
  handleQuestionnaire,
}: MenuButtonsInterface) => {
  return (
    <div className={styles.container}>
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
        {(isStudy || isTest || isForm) && (
          <CustomButton onClick={handleHomeBack} className={styles.side_btn}>
            Strona Główna
          </CustomButton>
        )}
      </div>
      {!isForm && (
        <CustomButton onClick={handleQuestionnaire} className={styles.form_btn}>
          Ankieta
        </CustomButton>
      )}
    </div>
  )
}
export default MenuButtons
