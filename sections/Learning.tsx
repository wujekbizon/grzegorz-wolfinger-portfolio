import styles from './Learning.module.scss'
import { useState, useEffect, useRef } from 'react'
import { questions } from '@/data/questions'
import { INFO, TEST } from '@/data/constants'
import { InfoCard, Test, LearningPanel, SidePanelTitle, MenuButtons, CustomButton } from '@/components'
import { BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'

const Learning = () => {
  const [isStudy, setIsStudy] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredQuestions, setFilteredQuestions] = useState(questions)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true)

  const handleSearch = () => {
    const filterItem = questions.filter((item) => {
      const regex = new RegExp(searchTerm, 'i')
      return regex.test(item.question) || item.number.toString().includes(searchTerm)
    })
    setFilteredQuestions(filterItem)
  }

  const handleShowStudy = () => {
    setIsTest(false)
    setIsStudy(true)
  }
  const handleShowTest = () => {
    setIsStudy(false)
    setIsTest(true)
  }
  const handleHomeBack = () => {
    setIsStudy(false)
    setIsTest(false)
  }

  return (
    <section className={styles.learning}>
      <div className={styles.learning_panel}>
        <div
          className={styles.side_panel}
          style={{
            width: `${isSidePanelOpen ? '20%' : '0%'}`,
            opacity: `${isSidePanelOpen ? '1' : '0'}`,
          }}
        >
          <SidePanelTitle>Praktyczne testy dla Opiekuna Medycznego</SidePanelTitle>
          <div className={styles.side_bottom}>
            <MenuButtons
              isStudy={isStudy}
              isTest={isTest}
              handleShowStudy={handleShowStudy}
              handleShowTest={handleShowTest}
              handleHomeBack={handleHomeBack}
            />
            <h4>® WESA 2023</h4>
          </div>
        </div>
        <div
          className={styles.main_panel}
          style={{
            width: `${isSidePanelOpen ? '80%' : '100%'}`,
          }}
        >
          <nav className={styles.nav_panel}>
            <RxHamburgerMenu size={24} className={styles.icon} onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} />
            <h4 className={styles.nav_brand}>WESA E-Learning Platform 2023</h4>
            <div className={styles.nav_search}>
              {isStudy && (
                <>
                  <input
                    type="text"
                    className={styles.nav_input}
                    placeholder="szukana fraza lub # pytania"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                  <BsSearch size={20} className={styles.icon} onClick={handleSearch} />
                </>
              )}
            </div>
            <aside className={`${styles.mobile_side_panel} ${isSidePanelOpen ? styles.side_open : styles.side_close}`}>
              {!isStudy && (
                <CustomButton onClick={handleShowStudy} className={styles.mobile_side_btn}>
                  Nauka
                </CustomButton>
              )}
              {!isTest && (
                <CustomButton onClick={handleShowTest} className={styles.mobile_side_btn}>
                  Test
                </CustomButton>
              )}
              {(isTest || isStudy) && (
                <CustomButton onClick={handleHomeBack} className={styles.mobile_side_btn}>
                  Strona Główna
                </CustomButton>
              )}
            </aside>
          </nav>
          <div className={styles.test_container}>
            {!isStudy && !isTest && (
              <>
                <InfoCard {...TEST} />
                <InfoCard {...INFO} />
              </>
            )}
            {isStudy && <LearningPanel panelArr={filteredQuestions} />}
            {isTest && <Test />}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Learning
