import styles from './QuestionCard.module.scss'
import { QuestionCardInterface } from '@/types'
import { questions } from '@/data/questions'
import { useState } from 'react'
import { LETTERS } from '@/data/constants'
import Image from 'next/image'

const QuestionCard: React.FC<QuestionCardInterface> = ({ number, answers, question, imgSrc }) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const handleCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer)
  }

  return (
    <div className={styles.question_card}>
      <p className={styles.question_number}>
        {number}/{questions.length}
      </p>
      <h4 className={styles.question}>{question}</h4>
      <ul className={styles.answers_list}>
        {answers.map(({ option, isCorrect }, index) => {
          return (
            <li
              className={`${styles.anwser} ${showCorrectAnswer && (isCorrect ? styles.correct : styles.incorrect)}`}
              key={option}
            >
              {LETTERS[index]}) <span>{option}</span>
            </li>
          )
        })}
      </ul>
      {imgSrc && (
        <div className={styles.card_image_container}>
          <Image src={imgSrc} alt="img" width={400} height={250} priority className={styles.card_image} />
        </div>
      )}
      <button onClick={handleCorrectAnswer} className={styles.correct_answer_btn}>
        {showCorrectAnswer ? 'Powrót' : 'Poprawna odpowiedz'}
      </button>
    </div>
  )
}
export default QuestionCard
