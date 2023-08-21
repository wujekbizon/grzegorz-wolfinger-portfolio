import styles from './MenuButtons.module.scss'
import { CustomButton } from '@/components'

interface MenuButtonsProps {
  isStudy: boolean
  isTest: boolean
  handleShowStudy: () => void
  handleShowTest: () => void
  handleHomeBack: () => void
  className?: string
}

const MenuButtons = ({ isStudy, isTest, handleShowStudy, handleHomeBack, handleShowTest }: MenuButtonsProps) => {
  return (
    <div className={styles.btns}>
      {!isStudy && (
        <CustomButton onClick={handleShowStudy} className={styles.side_btn}>
          Nauka
        </CustomButton>
      )}
      {!isTest && (
        <CustomButton onClick={handleShowTest} className={styles.side_btn}>
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
