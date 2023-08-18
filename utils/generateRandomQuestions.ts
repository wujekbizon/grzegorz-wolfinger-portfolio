import { QuestionCardInterface } from '@/types'

function generateRandomQuestions(questionArray: QuestionCardInterface[], numOfQuestions: number) {
  let selectedQuestions = [] as QuestionCardInterface[]
  while (selectedQuestions.length < numOfQuestions) {
    const randomIndex = Math.floor(Math.random() * questionArray.length)
    const randomQuestion = questionArray[randomIndex]
    if (!selectedQuestions.includes(randomQuestion)) {
      selectedQuestions.push(randomQuestion)
    }
  }
  return selectedQuestions
}

export default generateRandomQuestions
