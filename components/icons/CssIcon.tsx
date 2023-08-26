import { motion } from 'framer-motion'

const CssIcon: React.FC<IconAttributes> = ({ width = 56, height = 56, primary = '#1B73BA', secondary = '#1C88C7' }) => {
  return (
    <motion.svg
      animate={{ rotate: [0, -90], x: [0, 0, 0, 30] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{ width, height }}
      width="56"
      height="56"
      viewBox="0 0 70 78"
      fill="none"
    >
      <g>
        <path
          d="M6.22181 69.8289L0.5 0.130859L68.8333 0.270923L62.7831 69.8289L34.9246 77.8692L6.22181 69.8289Z"
          fill={primary}
        />
        <path d="M34.9258 71.1386V6.76953L63.0659 6.86291L58.0478 64.454L34.9258 71.1386Z" fill={secondary} />
        <path
          d="M56.0777 14.9961H12.7891L13.9618 23.4098H34.5036L14.2902 32.0581L15.4623 40.1917H45.2441L44.1651 51.5506L34.0815 53.5143L24.9364 51.1771L24.2327 44.7259H15.8376L16.9629 58.1424L34.9726 63.1441L52.2323 57.675L54.4366 31.4501H36.1916L56.0771 23.2231L56.0777 14.9961Z"
          fill="white"
        />
      </g>
    </motion.svg>
  )
}
export default CssIcon
