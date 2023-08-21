import styles from './Learning.module.scss'
import { useState, useEffect } from 'react'
import { questions } from '@/data/questions'
import { INFO, TEST } from '@/data/constants'
import { InfoCard, Test, LearningPanel, SidePanel, NavBar } from '@/components'

const Learning = () => {
  const [mode, setMode] = useState<'study' | 'test' | ''>('')
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

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSearch()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleSearch])

  const handleModeStudy = () => {
    setFilteredQuestions(questions)
    setSearchTerm('')
    setMode('study')
  }
  const handleModeTest = () => {
    setFilteredQuestions(questions)
    setSearchTerm('')
    setMode('test')
  }
  const handleHomeBack = () => {
    setFilteredQuestions(questions)
    setSearchTerm('')
    setMode('')
  }

  return (
    <section className={styles.learning}>
      <div className={styles.learning_panel}>
        <SidePanel
          mode={mode}
          handleModeStudy={handleModeStudy}
          handleModeTest={handleModeTest}
          handleHomeBack={handleHomeBack}
          isSidePanelOpen={isSidePanelOpen}
        />
        <div
          className={styles.main_panel}
          style={{
            width: `${isSidePanelOpen ? '80%' : '100%'}`,
          }}
        >
          <NavBar
            mode={mode}
            handleHomeBack={handleHomeBack}
            handleModeStudy={handleModeStudy}
            handleModeTest={handleModeTest}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            isSidePanelOpen={isSidePanelOpen}
            setSearchTerm={setSearchTerm}
            setIsSidePanelOpen={setIsSidePanelOpen}
          />
          <div className={styles.test_container}>
            {!mode && (
              <>
                <InfoCard {...TEST} />
                <InfoCard {...INFO} />
              </>
            )}
            {mode === 'study' && <LearningPanel data={filteredQuestions} />}
            {mode === 'test' && <Test />}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Learning
