import { ObjectId } from 'mongodb'
export interface ProfileItems {
  id: number
  icon: JSX.Element
  title: string
  link?: string
}

export interface ProjectData {
  id: ObjectId | number
  type: string
  name: string
  text: string
  items: string[]
  skills: string[]
  btnText: string
  btnCode: string
  url: string
  githubUrl: string
  imgSrc: string
  createdAt: Date
}
