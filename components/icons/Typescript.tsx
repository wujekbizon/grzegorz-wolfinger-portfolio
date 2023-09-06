import { motion } from 'framer-motion'

const Typescript: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#007ACC',
  secondary = '#FFFFFF',
}) => {
  return (
    <motion.svg
      animate={{
        animationTimingFunction: [
          'ease-in',
          'ease-out',
          'ease-in',
          'ease-out',
          'ease-in',
          'ease-out',
          'ease-in',
          'ease-out',
          'ease-in',
          'ease-out',
        ],
        y: [-45, 0, -24, 0, -12, 0, -6, 0, -4, 0],
        opacity: [0, 1, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{ width, height }}
      width="79"
      height="78"
      viewBox="0 0 79 78"
      fill="none"
    >
      <g clipPath="url(#clip0_201_6730)">
        <mask id="mask0_201_6730" maskUnits="userSpaceOnUse" x="0" y="0" width="79" height="78">
          <path d="M78.543 0H0.542969V78H78.543V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_201_6730)">
          <path d="M0.542969 39V0H78.543V78H0.542969" fill={primary} />
          <path
            d="M17.6445 39.1374V42.3159H27.7845V71.1759H34.98V42.3159H45.12V39.1959C45.12 37.4409 45.12 36.0174 45.042 35.9784C45.042 35.9199 38.8605 35.9004 31.353 35.9004L17.703 35.9589V39.1569L17.6445 39.1374ZM63.216 35.8809C65.205 36.3489 66.726 37.2459 68.091 38.6694C68.8125 39.4494 69.885 40.8144 69.963 41.1654C69.963 41.2824 66.5895 43.5639 64.542 44.8314C64.464 44.8899 64.152 44.5584 63.84 44.0514C62.826 42.6084 61.7925 41.9844 60.174 41.8674C57.834 41.7114 56.274 42.9399 56.274 44.9874C56.274 45.6114 56.391 45.9624 56.625 46.4694C57.1515 47.5419 58.1265 48.1854 61.149 49.5114C66.726 51.9099 69.144 53.4894 70.6065 55.7514C72.264 58.2864 72.6345 62.2644 71.523 65.2479C70.275 68.5044 67.233 70.7079 62.8845 71.4294C61.5195 71.6634 58.3995 71.6244 56.937 71.3709C53.817 70.7859 50.8335 69.2259 49.0005 67.2174C48.279 66.4374 46.8945 64.3509 46.9725 64.2144L47.7135 63.7464L50.6385 62.0499L52.842 60.7629L53.349 61.4454C53.9925 62.4594 55.4355 63.8244 56.274 64.2924C58.809 65.5989 62.202 65.4234 63.879 63.9024C64.6005 63.2394 64.9125 62.5374 64.9125 61.5624C64.9125 60.6654 64.776 60.2559 64.3275 59.5734C63.7035 58.7154 62.4555 58.0134 58.9455 56.4534C54.909 54.7374 53.193 53.6454 51.594 51.9684C50.6775 50.9544 49.839 49.3749 49.449 48.0684C49.1565 46.9374 49.059 44.1684 49.332 43.0569C50.1705 39.1569 53.115 36.4269 57.327 35.6469C58.692 35.3739 61.9095 35.4909 63.255 35.8419L63.216 35.8809Z"
            fill={secondary}
          />
        </g>
      </g>
    </motion.svg>
  )
}
export default Typescript