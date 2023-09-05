import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface ProfileItems {
  id: number
  icon: JSX.Element
  title: string
  link?: string
}

export interface ProjectExtraContent {
  question: string
  content: string
  items: string[]
  summary: string
}

export interface ProjectData {
  _id: string
  type: string
  name: string
  text: string
  skills: string[]
  url: string
  githubUrl: string
  imgSrc: string | StaticImageData
  createdAt?: Date
  x?: number
  y?: number
  z?: number
  color?: string
  extraContent?: ProjectExtraContent
}

export type ExperienceProps = {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

export interface AvailableOption {
  option: string
  isCorrect: boolean
}

export interface QuestionCardInterface {
  number: number
  question: string
  imgSrc?: StaticImageData
  answers: AvailableOption[]
}

export interface CustomButtonInterface {
  onClick: () => void
  children: ReactNode
  className?: string
}

export interface MobileMenuButtonsInterface {
  isStudy?: boolean
  isTest?: boolean
  isForm?: boolean
  isSidePanelOpen: boolean
  handleModeStudy: () => void
  handleModeTest: () => void
  handleHomeBack: () => void
  handleQuestionnaire: () => void
}

export interface InputSearchInterface {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  handleSearch: () => void
}

export interface InfoCardProps {
  title: string
  content: string
  links?: { title: string; url: string }[]
}

export interface MenuButtonsInterface {
  isStudy: boolean
  isTest: boolean
  isForm: boolean
  handleModeStudy: () => void
  handleModeTest: () => void
  handleHomeBack: () => void
  handleQuestionnaire: () => void
  className?: string
}

export interface SidePanelInterface {
  isSidePanelOpen: boolean
  handleModeStudy: () => void
  handleModeTest: () => void
  handleHomeBack: () => void
  handleQuestionnaire: () => void
  mode: string
}

export type SidePanelTitleProps = {
  children: ReactNode
  color?: string
  primaryColor?: string
  secondaryColor?: string
}

export interface CardProps {
  description: string
  title: string
  titleBtn: string
  imgSrc: StaticImageData
  text: string
  url: string
  style?: React.CSSProperties
  custom?: boolean
}

export interface AnnouncementCardInterface {
  title: string
  content: string
}

export type InputValues = {
  selectedOption1: string
  selectedOption2: string
  selectedOption3: string
  selectedOption4: string
  selectedOption5: string
  [key: string]: string
}
