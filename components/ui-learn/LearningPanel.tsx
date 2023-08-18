import styles from './LearningPanel.module.scss'
import type { QuestionCardInterface } from '@/types'
import { QuestionCard } from '@/components'

const LearningPanel = ({ panelArr }: { panelArr: QuestionCardInterface[] }) => {
  return (
    <>
      {panelArr.map((question) => (
        <QuestionCard {...question} key={question.number} />
      ))}
    </>
  )
}
export default LearningPanel
