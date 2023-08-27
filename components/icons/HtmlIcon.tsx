import { motion } from 'framer-motion'

const HtmlIcon: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#E34F26',
  secondary = '#E34F26',
}) => {
  return (
    <motion.svg
      animate={{ rotate: [0, 90], x: [0, 0, 0, -20] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{ width, height }}
      width="69"
      height="78"
      viewBox="0 0 69 78"
      fill="none"
    >
      <mask id="mask0_201_6737" maskUnits="userSpaceOnUse" x="0" y="0" width="69" height="78">
        <path d="M68.4568 0H0.542969V78H68.4568V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_201_6737)">
        <path
          d="M6.22966 69.83L0.542969 0.130859L68.4568 0.270923L62.4437 69.83L34.7562 77.8703L6.22966 69.83Z"
          fill={primary}
        />
        <path d="M34.7578 71.1377V6.76758L62.7252 6.86095L57.7379 64.4526L34.7578 71.1377Z" fill={secondary} />
        <path
          d="M55.0317 22.85L55.8237 14.3418H12.8008L15.1778 40.4267H44.8698L43.7054 51.5522L34.1964 54.1227L24.5477 51.3182L24.0351 44.6802H15.5042L16.6697 58.2368L34.1958 63.1451L51.8616 58.2368L54.2386 31.7784H23.0558L22.1702 22.85H55.0317Z"
          fill="white"
        />
      </g>
    </motion.svg>
  )
}
export default HtmlIcon
