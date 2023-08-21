import styles from './NavBar.module.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MobileMenuButtons, InputSearch } from '@/components'
import type { MobileMenuButtonsInterface, InputSearchInterface } from '@/types'

interface LearningNavBarInterface extends MobileMenuButtonsInterface, InputSearchInterface {
  mode: string
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar: React.FC<LearningNavBarInterface> = ({
  mode,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleHomeBack,
  handleModeStudy,
  handleModeTest,
  isSidePanelOpen,
  setIsSidePanelOpen,
}) => {
  return (
    <nav className={styles.nav_panel}>
      <RxHamburgerMenu size={24} className={styles.icon} onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} />
      <h4 className={styles.nav_brand}>WESA E-Learning Platform 2023</h4>
      <div className={styles.nav_search}>
        {mode === 'study' && (
          <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        )}
      </div>
      <MobileMenuButtons
        isStudy={mode === 'study'}
        isTest={mode === 'test'}
        handleHomeBack={handleHomeBack}
        handleModeStudy={handleModeStudy}
        handleModeTest={handleModeTest}
        isSidePanelOpen={isSidePanelOpen}
      />
    </nav>
  )
}
export default NavBar
