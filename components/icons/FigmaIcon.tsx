import { motion } from 'framer-motion'

const FigmaIcon: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#19BCFE',
  secondary = '#A259FF',
}) => {
  return (
    <svg style={{ width, height }} width="56px" height="56px" viewBox="0 0 56 56">
      <g fill="none" fillRule="evenodd">
        <motion.path
          animate={{
            y: [-45, 0, -24, 0, -12, 0, -6, 0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          cx="12"
          cy="12"
          r="4"
          fill={primary}
          d="M37.333 28A9.333 9.333 0 0 1 28 37.333A9.333 9.333 0 0 1 18.667 28A9.333 9.333 0 0 1 37.333 28z"
        />
        <path fill="#09CF83" d="M9.333 56a9.333 9.333 0 0 0 9.333 -9.333v-9.333H9.333a9.333 9.333 0 1 0 0 18.667Z" />
        <path fill="#A259FF" d="M9.333 37.333h9.333V18.667H9.333a9.333 9.333 0 1 0 0 18.667Z" />
        <path fill="#F24E1E" d="M9.333 18.667h9.333V0H9.333a9.333 9.333 0 1 0 0 18.667Z" />
        <motion.path
          animate={{ x: [20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          fill="#FF7262"
          d="M28 18.667H18.667V0h9.333a9.333 9.333 0 1 1 0 18.667Z"
        />
      </g>
    </svg>
  )
}
export default FigmaIcon
