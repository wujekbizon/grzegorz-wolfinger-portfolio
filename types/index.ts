import { IconType } from 'react-icons/lib/esm/iconBase'

export interface ProfileItems {
  id: number
  icon: IconType
  title?: string
  link?: string
  date?: Date
}
