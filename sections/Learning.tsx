import styles from './Learning.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { INFO, TEST, MULTIMEDIA, ANNOUNCEMENT } from '@/data/constants'
import { InfoCard, Test, LearningPanel, SidePanel, NavBar, AnnouncementCard, QuestionnaireForm } from '@/components'
import { QuestionCardInterface } from '@/types'

const Learning = ({ questions }: { questions: QuestionCardInterface[] }) => {
  const [mode, setMode] = useState<'study' | 'test' | 'form' | ''>('')
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
    setIsSidePanelOpen(false)
  }
  const handleModeTest = () => {
    setFilteredQuestions(questions)
    setSearchTerm('')
    setMode('test')
    setIsSidePanelOpen(false)
  }
  const handleHomeBack = () => {
    setFilteredQuestions(questions)
    setSearchTerm('')
    setMode('')
    setIsSidePanelOpen(false)
  }

  const handleQuestionnaire = () => {
    setFilteredQuestions(questions)
    setSearchTerm('')
    setMode('form')
    setIsSidePanelOpen(false)
  }

  return (
    <section className={styles.learning}>
      <div className={styles.learning_panel}>
        <SidePanel
          mode={mode}
          handleModeStudy={handleModeStudy}
          handleModeTest={handleModeTest}
          handleHomeBack={handleHomeBack}
          handleQuestionnaire={handleQuestionnaire}
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
            handleQuestionnaire={handleQuestionnaire}
            searchTerm={searchTerm}
            isSidePanelOpen={isSidePanelOpen}
            setSearchTerm={setSearchTerm}
            setIsSidePanelOpen={setIsSidePanelOpen}
          />
          {!mode && (
            <div className={styles.image_container}>
              <Image src="/images/online.png" alt="learn" width={650} height={300} className={styles.image} priority />
            </div>
          )}
          <div className={styles.test_container}>
            {!mode && (
              <>
                <AnnouncementCard {...ANNOUNCEMENT} />
                <InfoCard {...TEST} />
                <InfoCard {...MULTIMEDIA} />
                <InfoCard {...INFO} />
              </>
            )}
            {mode === 'study' && <LearningPanel data={filteredQuestions} />}
            {mode === 'test' && <Test />}
            {mode === 'form' && <QuestionnaireForm />}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Learning
