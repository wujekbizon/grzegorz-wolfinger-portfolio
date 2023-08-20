import styles from './CustomButton.module.scss'
import type { CustomButtonInterface } from '@/types'

const CustomButton: React.FC<CustomButtonInterface> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
export default CustomButton
