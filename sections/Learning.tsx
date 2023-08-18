import styles from './Learning.module.scss'
import { useState, useEffect, useRef } from 'react'
import { questions } from '@/data/questions'
import { INFO, TEST } from '@/data/constants'
import { InfoCard, QuestionCard, Test, LearningPanel } from '@/components'
import { BsSearch } from 'react-icons/bs'
import generateRandomQuestions from '@/utils/generateRandomQuestions'

const Learning = () => {
  const [isStudy, setIsStudy] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredQuestions, setFilteredQuestions] = useState(questions)

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
        <div className={styles.side_panel}>
          <div className={styles.side_top}>
            <h2>Praktyczne testy dla Opiekuna Medycznego</h2>
          </div>
          <div className={styles.side_bottom}>
            <div className={styles.btns}>
              <button onClick={handleShowStudy} className={styles.side_btn}>
                Nauka - Wszystkie Pytania
              </button>
              <button onClick={handleShowTest} className={styles.side_btn}>
                Test
              </button>
            </div>
            <p className={styles.info}>{INFO}</p>
            <h4>® WESA 2023</h4>
          </div>
        </div>
        <div className={styles.main_panel}>
          <nav className={styles.nav_panel}>
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
            {!isStudy && !isTest && <InfoCard {...TEST} />}
            {isStudy && <LearningPanel panelArr={filteredQuestions} />}
            {isTest && <Test />}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Learning
