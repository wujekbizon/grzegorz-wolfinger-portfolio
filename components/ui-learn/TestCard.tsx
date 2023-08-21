import styles from './TestCard.module.scss'
import { useState } from 'react'
import { QuestionCardInterface, AvailableOption } from '@/types'
import { LETTERS } from '@/data/constants'
import { toast } from 'react-toastify'

interface TestQuestionCardInterface extends QuestionCardInterface {
  index: number
  length: number
  handleSubmit: (selectedOption: { answer: boolean }) => void
}

const TestCard: React.FC<TestQuestionCardInterface> = ({ answers, question, index, length, handleSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<{ answer: boolean } | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSelectOption = (answer: AvailableOption, index: number) => {
    setActiveIndex(index)

    if (answer.isCorrect) {
      setSelectedAnswer({ answer: true })
    } else {
      setSelectedAnswer({ answer: false })
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedAnswer) {
      toast.error('Proszę wybrać odpowiedz')
      return
    }
    handleSubmit(selectedAnswer)
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.test_card}>
      <p className={styles.test_number}>
        {index + 1}/{length}
      </p>
      <div className={styles.test_question}>{question}</div>
      <ul className={styles.test_options}>
        {answers.map((answer, index) => {
          return (
            <div
              className={`${styles.test_option} ${submitted && (answer.isCorrect ? styles.correct : styles.incorrect)}`}
              key={answer.option}
              onClick={() => !submitted && handleSelectOption(answer, index)}
            >
              <div className={styles.input_container}>
                <div className={`${styles.test_input} ${activeIndex === index ? styles.active : ''}`}>
                  {activeIndex === index && <div className={styles.input_dot} />}
                </div>
              </div>
              <li className={styles.option} key={answer.option}>
                {LETTERS[index]}) <span>{answer.option}</span>
              </li>
            </div>
          )
        })}
      </ul>

      <button className={styles.form_test_btn} type="submit" disabled={submitted}>
        Zatwierdz
      </button>
    </form>
  )
}
export default TestCard
