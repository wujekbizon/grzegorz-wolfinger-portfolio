import styles from './CustomRadioInput.module.scss'
import {
  SelectedOptions1,
  SelectedOptions2,
  SelectedOptions3,
  SelectedOptions4,
  SelectedOptions5,
} from '../../types/enums'
import { InputValues } from '@/types'

type OptionProp = {
  label: string
  value: SelectedOptions1 | SelectedOptions2 | SelectedOptions3 | SelectedOptions4 | SelectedOptions5
  name: string
}

interface CustomRadioInputInterface {
  option: OptionProp
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputValues: InputValues
}

const CustomRadioInput: React.FC<CustomRadioInputInterface> = ({ option, onChange, inputValues }) => {
  return (
    <label className={styles.option}>
      <input
        type="radio"
        name={option.name}
        value={option.value}
        checked={inputValues[option.name] === option.value}
        onChange={onChange}
      />
      {option.label}
    </label>
  )
}
export default CustomRadioInput
