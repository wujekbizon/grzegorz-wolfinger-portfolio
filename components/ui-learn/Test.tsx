import styles from './Test.module.scss'
import { useState } from 'react'
import { InfoCard, CustomButton, TestCard } from '@/components'
import { questions } from '@/data/questions'
import generateRandomQuestions from '@/utils/generateRandomQuestions'
import type { QuestionCardInterface } from '@/types'

const Test = () => {
  const [randomQuestions, setRandomQuestions] = useState<QuestionCardInterface[]>([])
  const [isTestRun, setIsTestRun] = useState(false)
  const [answers, setAnswers] = useState<{ answer: boolean }[]>([])
  const [isTestFinished, setIsTestFinished] = useState(false)

  const handleSubmit = (selectedOption: { answer: boolean }) => {
    setAnswers([...answers, selectedOption])
  }

  const handleStart = (questionCount: number) => {
    setIsTestRun(true)
    setRandomQuestions(generateRandomQuestions(questions, questionCount))
  }

  const handleCancelTest = () => {
    setIsTestRun(false)
    setAnswers([])
  }

  const handleSubmitTest = () => {
    setIsTestRun(false)
    setIsTestFinished(true)
  }

  const handleGoBack = () => {
    setIsTestFinished(false)
    setAnswers([])
  }

  const renderProgressCircle = () => {
    const correctAnswers = answers.filter((answerObj) => answerObj.answer).length
    const progress = (correctAnswers / answers.length) * 100
    return (
      <aside className={styles.progress_container}>
        <progress value={progress.toFixed(2)} max={100} className={styles.progress_bar}>
          {progress}
        </progress>
        <div className={styles.progress_content}>
          <p className={styles.progress_text}>
            Odpowiedziałeś na {correctAnswers}/{answers.length} pytań
          </p>
          {progress <= 60 && (
            <p className={styles.progress_text}>
              Nie udało się tym razem, proponuje jeszcze trochę sie pouczyć i spróbować ponownie!
            </p>
          )}
          {progress > 60 && progress < 90 && <p className={styles.progress_text}>Dobra robota, tak trzymaj!</p>}
          {progress >= 90 && (
            <p className={styles.progress_text}>Wow, perfekcja! Moja babcia bedzie w dobrych rękach!</p>
          )}
        </div>
      </aside>
    )
  }

  return (
    <div className={styles.test_container}>
      {!isTestFinished && !isTestRun && (
        <InfoCard
          title="Test wiedzy z losowo wygenerowanych 20, 40 lub 100 pytań."
          content="Test wyboru - 3 możliwości: Podstawowy - 20 pytań, Zaawansowany - 40 pytań, Legenda - 100 pytań; Test w formacie: pytanie i 3 lub 4 odpowiedzi, zawsze tylko jedna właściwa. Przy każdym pytaniu proszę zaznaczyć poprawną odpowiedż a nastepnie przejść do następnego pytania. Kolejność odpowiedz na pytania jest dowolna. Nie ma limitu czasowego, można w każdym momencie opuścić test."
        />
      )}
      {!isTestRun && !isTestFinished && (
        <div className={styles.test_btns}>
          <CustomButton className={styles.test_btn} onClick={() => handleStart(20)}>
            Podstawowy - 20 pytań
          </CustomButton>
          <CustomButton className={styles.test_btn} onClick={() => handleStart(40)}>
            Zaawansowany - 40 pytań
          </CustomButton>
          <CustomButton className={styles.test_btn} onClick={() => handleStart(100)}>
            Legenda - 100 pytań
          </CustomButton>
        </div>
      )}
      {isTestRun && !isTestFinished && (
        <div className={styles.test_page}>
          {randomQuestions.map((question, index) => (
            <TestCard
              {...question}
              index={index}
              length={randomQuestions.length}
              handleSubmit={handleSubmit}
              key={question.number}
            />
          ))}

          <div className={styles.test_btns}>
            {(answers.length === 20 || answers.length === 40 || answers.length === 100) && (
              <CustomButton className={styles.submit_btn} onClick={handleSubmitTest}>
                Zatwierdz Test
              </CustomButton>
            )}
            <CustomButton className={styles.cancel_btn} onClick={handleCancelTest}>
              Zakończ Test
            </CustomButton>
          </div>
        </div>
      )}
      {!isTestRun && isTestFinished && (
        <div className={styles.final_score}>
          <h1>Twój wynik test {answers.length} pytań</h1>
          {renderProgressCircle()}
          <button className={styles.score_btn} onClick={handleGoBack}>
            Powrót
          </button>
        </div>
      )}
    </div>
  )
}
export default Test
