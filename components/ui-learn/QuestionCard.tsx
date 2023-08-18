import styles from './QuestionCard.module.scss'
import { QuestionCardInterface } from '@/types'
import { questions } from '@/data/questions'
import { useState } from 'react'

const letters = ['a', 'b', 'c', 'd']

const QuestionCard: React.FC<QuestionCardInterface> = ({ number, answers, question }) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const handleCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer)
  }

  return (
    <div className={styles.question_card}>
      <p className={styles.question_number}>
        {number}/{questions.length}
      </p>
      <div className={styles.question}>{question}</div>
      <ul className={styles.answers_list}>
        {answers.map(({ option, isCorrect }, index) => {
          return (
            <li
              className={`${styles.anwser} ${showCorrectAnswer && (isCorrect ? styles.correct : styles.incorrect)}`}
              key={option}
            >
              {letters[index]}) <span>{option}</span>
            </li>
          )
        })}
      </ul>
      <button onClick={handleCorrectAnswer} className={styles.correct_answer_btn}>
        {showCorrectAnswer ? 'Powrót' : 'Poprawna odpowiedz'}
      </button>
    </div>
  )
}
export default QuestionCard
