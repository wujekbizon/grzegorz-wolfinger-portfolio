import styles from './InputSearch.module.scss'
import { BsSearch } from 'react-icons/bs'
import type { InputSearchInterface } from '@/types'

const InputSearch: React.FC<InputSearchInterface> = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder="szukana fraza lub # pytania"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <BsSearch size={20} className={styles.icon} onClick={handleSearch} />
    </>
  )
}
export default InputSearch
