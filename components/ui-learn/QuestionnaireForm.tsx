import styles from './QuestionnaireForm.module.scss'
import React, { useState, useEffect, useCallback } from 'react'
import { CustomRadioInput } from '@/components'
import { InputValues } from '@/types'
import { questionnaireOptions } from '@/data/questionnaireOptions'

const QuestionnaireForm = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    selectedOption1: '',
    selectedOption2: '',
    selectedOption3: '',
    selectedOption4: '',
    selectedOption5: '',
  })
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(Object.values(inputValues).every((val) => val !== ''))
  }, [inputValues])

  const handleOptionChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({ ...prevState, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (isFormValid) {
        console.log('Form valid')
        console.log(inputValues)
      }
    },
    [isFormValid, inputValues]
  )

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {questionnaireOptions?.map(({ title, options }) => (
        <div className={styles.form_question} key={title}>
          <div className={styles.question}>
            <h4>{title}</h4>
          </div>
          <div className={styles.options}>
            {options.map((option) => (
              <CustomRadioInput
                option={option}
                onChange={handleOptionChange}
                inputValues={inputValues}
                key={option.label}
              />
            ))}
          </div>
        </div>
      ))}
      <button type="submit" className={styles.form_btn} disabled={!isFormValid}>
        Wyślij Ankietę
      </button>
    </form>
  )
}
export default QuestionnaireForm
