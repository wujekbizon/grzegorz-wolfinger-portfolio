import styles from './QuestionnaireForm.module.scss'
import React, { useState, useEffect, useCallback } from 'react'
import { CustomRadioInput } from '@/components'
import { InputValues } from '@/types'
import { questionnaireOptions } from '@/data/questionnaireOptions'
import { toast } from 'react-toastify'

const QuestionnaireForm = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<'' | 'study' | 'test' | 'form'>>
}) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [inputValues, setInputValues] = useState<InputValues>({
    selectedOption1: '',
    selectedOption2: '',
    selectedOption3: '',
    selectedOption4: '',
    selectedOption5: '',
  })

  useEffect(() => {
    setIsFormValid(
      questionnaireOptions?.every(({ options }) => options.some((option) => inputValues[option.name] !== ''))
    )
  }, [inputValues, questionnaireOptions])

  const handleOptionChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({ ...prevState, [name]: value }))
  }, [])

  const sendSurvey = async () => {
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ survey: inputValues }),
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Coś poszło nie tak, proszę spróbować pózniej.')
        console.log(error)
      }
    }
  }

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (isFormValid) {
        sendSurvey()
        setInputValues({
          selectedOption1: '',
          selectedOption2: '',
          selectedOption3: '',
          selectedOption4: '',
          selectedOption5: '',
        })
        setMode('')
        toast.success(`Twoja ankieta została wysłana pomyślnie - Dziękuje`)
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
