import { motion } from 'framer-motion'

const NextJSIcon: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#FFFFFF',
  secondary = '#FFFFFF',
}) => {
  return (
    <motion.svg
      animate={{ y: [0, -200, 0], rotateX: [0, 360] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{ width, height }}
      width="56px"
      height="56px"
      viewBox="0 0 56 56"
      version="1.1"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <motion.path
          d="M26.166 0.015c-0.12 0.011 -0.504 0.049 -0.849 0.077 -7.954 0.717 -15.404 5.008 -20.123 11.603 -2.628 3.667 -4.308 7.827 -4.943 12.233C0.027 25.466 0 25.92 0 28.005c0 2.085 0.027 2.54 0.252 4.078 1.522 10.514 9.005 19.348 19.154 22.621 1.818 0.586 3.733 0.985 5.912 1.226 0.849 0.093 4.516 0.093 5.365 0 3.761 -0.416 6.947 -1.346 10.089 -2.95 0.482 -0.246 0.575 -0.312 0.509 -0.367 -0.044 -0.033 -2.096 -2.786 -4.56 -6.114l-4.478 -6.048 -5.611 -8.303c-3.087 -4.565 -5.627 -8.298 -5.649 -8.298 -0.022 -0.005 -0.044 3.684 -0.055 8.188 -0.017 7.887 -0.022 8.204 -0.121 8.391 -0.142 0.268 -0.252 0.378 -0.482 0.498 -0.175 0.088 -0.329 0.104 -1.155 0.104h-0.947l-0.252 -0.159a1.024 1.024 0 0 1 -0.367 -0.4l-0.115 -0.246 0.011 -10.974 0.016 -10.979 0.17 -0.213c0.088 -0.115 0.274 -0.263 0.405 -0.334 0.224 -0.109 0.312 -0.12 1.259 -0.12 1.117 0 1.303 0.044 1.593 0.361 0.082 0.088 3.12 4.663 6.755 10.175 3.635 5.511 8.606 13.037 11.047 16.732l4.434 6.716 0.224 -0.148c1.987 -1.292 4.089 -3.131 5.753 -5.047 3.542 -4.067 5.824 -9.025 6.591 -14.312 0.224 -1.538 0.252 -1.992 0.252 -4.078 0 -2.086 -0.027 -2.54 -0.252 -4.078 -1.522 -10.514 -9.005 -19.348 -19.154 -22.621 -1.79 -0.58 -3.695 -0.98 -5.83 -1.221 -0.525 -0.055 -4.144 -0.115 -4.598 -0.071Zm11.463 16.934c0.263 0.131 0.476 0.383 0.553 0.646 0.044 0.142 0.055 3.185 0.044 10.043l-0.016 9.841 -1.735 -2.66 -1.741 -2.66v-7.154c0 -4.625 0.022 -7.225 0.055 -7.351 0.088 -0.306 0.279 -0.547 0.542 -0.69 0.224 -0.115 0.306 -0.126 1.166 -0.126 0.81 0 0.952 0.011 1.133 0.109Z"
          fill={primary}
        />
      </g>
    </motion.svg>
  )
}
export default NextJSIcon
