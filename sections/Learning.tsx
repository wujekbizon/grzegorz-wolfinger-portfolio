import styles from './Learning.module.scss'
import { useState, useEffect, useRef } from 'react'
import { questions } from '@/data/questions'
import { INFO, TEST } from '@/data/constants'
import { InfoCard, Test, LearningPanel, CustomButton, SidePanelTitle } from '@/components'
import { BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'

const Learning = () => {
  const [isStudy, setIsStudy] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredQuestions, setFilteredQuestions] = useState(questions)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true)

  const handleShowStudy = () => {
    setIsTest(false)
    setIsStudy(true)
  }
  const handleShowTest = () => {
    setIsStudy(false)
    setIsTest(true)
  }

  const handleSearch = () => {
    const filterItem = questions.filter((item) => {
      const regex = new RegExp(searchTerm, 'i')
      return regex.test(item.question) || item.number.toString().includes(searchTerm)
    })
    setFilteredQuestions(filterItem)
  }

  return (
    <section className={styles.learning}>
      <div className={styles.learning_panel}>
        <div
          className={styles.side_panel}
          style={{
            width: `${isSidePanelOpen ? '20%' : '0%'}`,
            display: `${isSidePanelOpen ? 'flex' : 'none'}`,
          }}
        >
          <SidePanelTitle>Praktyczne testy dla Opiekuna Medycznego</SidePanelTitle>
          <div className={styles.side_bottom}>
            <div className={styles.btns}>
              <CustomButton onClick={handleShowStudy} className={styles.side_btn}>
                Nauka - Wszystkie Pytania
              </CustomButton>
              <CustomButton onClick={handleShowTest} className={styles.side_btn}>
                Test
              </CustomButton>
            </div>
            {/* <p className={styles.info}>{INFO}</p> */}
            <h4>® WESA 2023</h4>
          </div>
        </div>
        <div className={styles.main_panel}>
          <nav className={styles.nav_panel}>
            <RxHamburgerMenu size={24} className={styles.icon} onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} />
            WESA E-Lerning Platform 2023
            <div className={styles.nav_search}>
              <input
                type="text"
                className={styles.nav_input}
                placeholder="szukana fraza lub # pytania"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <BsSearch size={20} className={styles.icon} onClick={handleSearch} />
            </div>
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
