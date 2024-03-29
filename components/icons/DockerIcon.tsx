import { motion } from 'framer-motion'

const DockerIcon: React.FC<IconAttributes> = ({
  width = 70,
  height = 70,
  primary = '#00acd3',
  secondary = '#26c2ee',
}) => {
  return (
    <motion.svg
      animate={{ scale: [1, 1.5] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{ width, height }}
      width="56px"
      height="56px"
      viewBox="0 0 2.24 2.24"
    >
      <title>file_type_docker</title>
      <path
        d="M1.273 0.915H1.449v0.18h0.089a0.385 0.385 0 0 0 0.122 -0.02 0.312 0.312 0 0 0 0.059 -0.027 0.22 0.22 0 0 1 -0.041 -0.114 0.24 0.24 0 0 1 0.043 -0.169l0.018 -0.021 0.022 0.018a0.28 0.28 0 0 1 0.11 0.178 0.269 0.269 0 0 1 0.204 0.019l0.024 0.014 -0.013 0.025a0.254 0.254 0 0 1 -0.255 0.122c-0.152 0.379 -0.483 0.558 -0.885 0.558A0.557 0.557 0 0 1 0.441 1.415l-0.002 -0.003 -0.016 -0.032a0.51 0.51 0 0 1 -0.041 -0.259l0.002 -0.027h0.15v-0.18h0.176v-0.176h0.351v-0.176h0.211v0.351Z"
        fill="#3a4e55"
      />
      <path
        d="M1.843 0.981a0.232 0.232 0 0 0 -0.099 -0.197 0.215 0.215 0 0 0 0.02 0.267 0.37 0.37 0 0 1 -0.226 0.073H0.412a0.475 0.475 0 0 0 0.047 0.262l0.013 0.023a0.434 0.434 0 0 0 0.027 0.04q0.069 0.004 0.128 0.003a0.628 0.628 0 0 0 0.187 -0.027 0.014 0.014 0 1 1 0.009 0.026c-0.006 0.002 -0.013 0.004 -0.02 0.006a0.588 0.588 0 0 1 -0.129 0.021c0.003 0 -0.003 0 -0.003 0l-0.006 0a1.502 1.502 0 0 1 -0.141 0l-0.001 0a0.552 0.552 0 0 0 0.424 0.169c0.389 0 0.719 -0.173 0.866 -0.56 0.104 0.011 0.203 -0.016 0.249 -0.104a0.245 0.245 0 0 0 -0.219 -0.002"
        fill="#00aada"
      />
      <path
        d="M1.843 0.981a0.232 0.232 0 0 0 -0.099 -0.197 0.215 0.215 0 0 0 0.02 0.267 0.37 0.37 0 0 1 -0.226 0.073H0.479a0.366 0.366 0 0 0 0.147 0.328 0.628 0.628 0 0 0 0.187 -0.027 0.014 0.014 0 1 1 0.009 0.026c-0.006 0.002 -0.013 0.004 -0.02 0.006a0.618 0.618 0 0 1 -0.133 0.022l-0.001 -0.002c0.132 0.068 0.325 0.068 0.545 -0.017a1.531 1.531 0 0 0 0.637 -0.482l-0.007 0.003"
        fill="#27b9ec"
      />
      <path
        d="M0.414 1.241a0.45 0.45 0 0 0 0.045 0.144l0.013 0.023a0.434 0.434 0 0 0 0.027 0.04q0.069 0.004 0.128 0.003a0.628 0.628 0 0 0 0.187 -0.027 0.014 0.014 0 1 1 0.009 0.026c-0.006 0.002 -0.013 0.004 -0.02 0.006a0.618 0.618 0 0 1 -0.132 0.021h-0.007c-0.02 0.001 -0.042 0.002 -0.065 0.002 -0.025 0 -0.05 0 -0.077 -0.002a0.554 0.554 0 0 0 0.425 0.169c0.333 0 0.623 -0.126 0.791 -0.406Z"
        fill="#088cb9"
      />
      <path
        d="M0.489 1.241a0.338 0.338 0 0 0 0.137 0.211 0.628 0.628 0 0 0 0.187 -0.027 0.014 0.014 0 1 1 0.009 0.026c-0.006 0.002 -0.013 0.004 -0.02 0.006a0.627 0.627 0 0 1 -0.133 0.021c0.132 0.068 0.324 0.067 0.544 -0.018a1.438 1.438 0 0 0 0.376 -0.219Z"
        fill="#039cc7"
      />
      <path
        d="M0.692 0.957h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127H0.646v-0.127Zm-0.023 0h0.013v0.127H0.623v-0.127Zm-0.023 0h0.013v0.127H0.6v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152H0.565V0.944Z"
        fill={primary}
      />
      <motion.path
        animate={{ y: [0, 0.18], x: [0, 0, 0, 0.54] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        d="M0.868 0.781h0.012v0.127H0.868v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152h-0.152v-0.152Z"
        fill="white"
      />
      <motion.path
        animate={{ y: [-3, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        d="M0.868 0.781h0.012v0.127H0.868v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152h-0.152v-0.152Z"
        fill="white"
      />
      <path
        d="M0.868 0.957h0.012v0.127H0.868v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152h-0.152V0.944Z"
        fill={secondary}
      />
      <path
        d="M1.044 0.957h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152h-0.152V0.944Z"
        fill={primary}
      />
      <path
        d="M1.044 0.781h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152h-0.152v-0.152Z"
        fill={secondary}
      />
      <path
        d="M1.219 0.957h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127H1.127v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.012 -0.013h0.152v0.152H1.092V0.944Z"
        fill={secondary}
      />
      <path
        d="M1.219 0.781h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127H1.127v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152H1.092v-0.152Z"
        fill={primary}
      />
      <path
        d="M1.219 0.606h0.012v0.127h-0.012V0.606Zm-0.023 0h0.013v0.127h-0.013V0.606Zm-0.023 0h0.013v0.127h-0.013V0.606Zm-0.023 0h0.013v0.127h-0.013V0.606Zm-0.023 0h0.013v0.127H1.127V0.606Zm-0.023 0h0.012v0.127h-0.012V0.606Zm-0.012 -0.013h0.152v0.152H1.092V0.593Z"
        fill={secondary}
      />
      <motion.path
        animate={{ x: [0, -0.18], y: [0, 0, 0, -0.36] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        d="M1.395 0.957h0.012v0.127h-0.012v-0.127Zm-0.023 0h0.012v0.127H1.372v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.013v0.127h-0.013v-0.127Zm-0.023 0h0.012v0.127h-0.012v-0.127Zm-0.013 -0.013h0.152v0.152h-0.152V0.944Z"
        fill={'white'}
      />
      <path d="M0.883 1.344a0.042 0.042 0 1 1 -0.042 0.042 0.042 0.042 0 0 1 0.042 -0.042" fill="#d5eef2" />
      <path
        d="M0.883 1.355a0.03 0.03 0 0 1 0.011 0.002 0.012 0.012 0 1 0 0.017 0.017 0.03 0.03 0 1 1 -0.028 -0.019"
        fill="#3a4e55"
      />
      <motion.path
        animate={{ y: [0, 0.5] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        d="M0.14 1.256h1.954c-0.043 -0.011 -0.135 -0.025 -0.119 -0.081 -0.077 0.09 -0.264 0.063 -0.311 0.019 -0.052 0.076 -0.358 0.047 -0.379 -0.012 -0.066 0.077 -0.27 0.077 -0.335 0 -0.021 0.059 -0.327 0.088 -0.379 0.012 -0.047 0.044 -0.234 0.071 -0.311 -0.019 0.015 0.056 -0.077 0.07 -0.119 0.081"
        fill="#3a4e55"
      />
      <path
        d="M0.995 1.646a0.37 0.37 0 0 1 -0.193 -0.19 0.644 0.644 0 0 1 -0.139 0.021q-0.031 0.002 -0.064 0.002 -0.039 0 -0.082 -0.002a0.556 0.556 0 0 0 0.43 0.17q0.024 0 0.048 -0.001"
        fill="#c0dbe1"
      />
      <path
        d="M0.84 1.524a0.364 0.364 0 0 1 -0.039 -0.068 0.644 0.644 0 0 1 -0.139 0.021 0.443 0.443 0 0 0 0.178 0.046"
        fill="#d5eef2"
      />
    </motion.svg>
  )
}
export default DockerIcon
