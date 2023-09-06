import { motion } from 'framer-motion'

const PythonIcon: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#366994',
  secondary = '#FFC331',
}) => {
  return (
    <svg style={{ width, height }} width="79" height="78" viewBox="0 0 79 78" fill="none">
      <g clipPath="url(#clip0_201_6714)">
        <mask id="mask0_201_6714" maskUnits="userSpaceOnUse" x="0" y="0" width="79" height="78">
          <path d="M78.5 0H0.5V77.688H78.5V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_201_6714)">
          <motion.path
            animate={{ x: [-15, -5, 0], y: [-15, -5, 0], scale: [0.5, 0.7, 1], rotate: [-90, 0, 0, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            d="M39.1649 0.0214844C19.4132 0.0214844 20.6465 8.58697 20.6465 8.58697L20.6684 17.4611H39.5171V20.1253H13.182C13.182 20.1253 0.542969 18.6919 0.542969 38.6211C0.542969 58.551 11.5747 57.8442 11.5747 57.8442H18.1583V48.596C18.1583 48.596 17.8034 37.5643 29.0139 37.5643H47.7084C47.7084 37.5643 58.2115 37.734 58.2115 27.4134V10.3488C58.2115 10.3488 59.8067 0.0214844 39.1649 0.0214844ZM28.7717 5.98914C29.2171 5.98874 29.6583 6.07617 30.0698 6.24644C30.4814 6.4167 30.8554 6.66646 31.1703 6.98141C31.4853 7.29635 31.735 7.67032 31.9053 8.0819C32.0756 8.49347 32.163 8.93459 32.1626 9.37999C32.163 9.8254 32.0756 10.2665 31.9053 10.6781C31.735 11.0897 31.4853 11.4636 31.1703 11.7786C30.8554 12.0935 30.4814 12.3433 30.0698 12.5136C29.6583 12.6838 29.2171 12.7712 28.7717 12.7708C28.3263 12.7712 27.8852 12.6838 27.4736 12.5136C27.0621 12.3433 26.6881 12.0935 26.3732 11.7786C26.0582 11.4636 25.8084 11.0897 25.6382 10.6781C25.4679 10.2665 25.3805 9.8254 25.3809 9.37999C25.3805 8.93459 25.4679 8.49347 25.6382 8.0819C25.8084 7.67032 26.0582 7.29635 26.3732 6.98141C26.6881 6.66646 27.0621 6.4167 27.4736 6.24644C27.8852 6.07617 28.3263 5.98874 28.7717 5.98914Z"
            fill={primary}
          />
          <motion.path
            animate={{ x: [15, 5, 0], y: [15, 5, 0], scale: [0.5, 0.7, 1], rotate: [-90, 0, 0, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            d="M39.7279 77.4215C59.4795 77.4215 58.2463 68.856 58.2463 68.856L58.2243 59.9822H39.3754V57.318H65.7104C65.7104 57.318 78.3495 58.7514 78.3495 38.8216C78.3495 18.892 67.3178 19.5988 67.3178 19.5988H60.7341V28.8467C60.7341 28.8467 61.089 39.8784 49.8785 39.8784H31.184C31.184 39.8784 20.6809 39.7087 20.6809 50.0297V67.0945C20.6809 67.0945 19.0863 77.4215 39.7279 77.4215ZM50.121 71.4545C49.6756 71.4549 49.2345 71.3674 48.8229 71.1972C48.4113 71.0269 48.0374 70.7772 47.7224 70.4622C47.4075 70.1473 47.1577 69.7733 46.9875 69.3617C46.8172 68.9501 46.7298 68.509 46.7302 68.0636C46.7297 67.6182 46.8171 67.177 46.9874 66.7654C47.1576 66.3538 47.4074 65.9798 47.7223 65.6648C48.0373 65.3499 48.4112 65.1001 48.8228 64.9298C49.2344 64.7595 49.6756 64.6721 50.121 64.6725C50.5664 64.6721 51.0075 64.7595 51.4191 64.9298C51.8307 65.1 52.2047 65.3498 52.5196 65.6647C52.8346 65.9797 53.0843 66.3536 53.2546 66.7652C53.4248 67.1768 53.5123 67.6179 53.5119 68.0633C53.5123 68.5087 53.4248 68.9498 53.2546 69.3614C53.0843 69.773 52.8346 70.147 52.5196 70.4619C52.2047 70.7769 51.8307 71.0266 51.4191 71.1969C51.0075 71.3671 50.5664 71.4549 50.121 71.4545Z"
            fill={secondary}
          />
        </g>
      </g>
    </svg>
  )
}
export default PythonIcon