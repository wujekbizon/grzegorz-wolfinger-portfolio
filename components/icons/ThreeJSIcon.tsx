import { motion } from 'framer-motion'

const ThreeJSIcon: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#61DAFB',
  secondary = '#FFFFFF',
}) => {
  return (
    <svg
      style={{ width, height }}
      fill="none"
      strokeLinecap="square"
      strokeMiterlimit="10"
      version="1.1"
      viewBox="0 0 226.77 226.77"
    >
      <g
        transform="translate(8.964 4.2527)"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <motion.path
          animate={{ rotate: [90, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="m63.02 200.61-43.213-174.94 173.23 49.874z"
          fill="#fff"
        />
        <motion.path
          animate={{ rotate: [90, 0], opacity: [0, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="m106.39 50.612 21.591 87.496-86.567-24.945z"
        />
        <motion.path
          animate={{ rotate: [-90, 0], opacity: [0, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="m84.91 125.03-10.724-43.465 43.008 12.346z"
        />
        <motion.path
          animate={{ rotate: [90, 0], opacity: [0, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="m63.458 38.153 10.724 43.465-43.008-12.346z"
        />
        <motion.path
          animate={{ rotate: [90, 0], opacity: [0, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="m149.47 62.93 10.724 43.465-43.008-12.346z"
        />
        <motion.path
          animate={{ rotate: [-90, 0], opacity: [0, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="m84.915 125.06 10.724 43.465-43.008-12.346z"
        />
      </g>
    </svg>
  )
}
export default ThreeJSIcon
