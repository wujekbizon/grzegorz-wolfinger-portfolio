export interface ProfileItems {
  id: number
  icon: JSX.Element
  title: string
  link?: string
}

export interface ProjectData {
  _id: string
  type: string
  name: string
  text: string
  skills: string[]
  url: string
  githubUrl: string
  imgSrc: string
  createdAt?: Date
  x?: number
  y?: number
  z?: number
  color?: string
}

export type ExperienceProps = {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

interface AvailableOption {
  option: string
  isCorrect: boolean
}

export interface QuestionCardInterface {
  number: number
  question: string
  answers: AvailableOption[]
}
