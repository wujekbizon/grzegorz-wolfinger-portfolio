import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

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
  isSidePanelOpen: boolean
  handleModeStudy: () => void
  handleModeTest: () => void
  handleHomeBack: () => void
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
  handleModeStudy: () => void
  handleModeTest: () => void
  handleHomeBack: () => void
  className?: string
}

export interface SidePanelInterface {
  isSidePanelOpen: boolean
  handleModeStudy: () => void
  handleModeTest: () => void
  handleHomeBack: () => void
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
