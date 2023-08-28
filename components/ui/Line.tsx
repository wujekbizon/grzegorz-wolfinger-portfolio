import { motion, VariantLabels, TargetAndTransition, AnimationControls, Transition } from 'framer-motion'

type LineProps = {
  width?: string
  height?: number
  color?: string
  style?: React.CSSProperties
  className?: string
  isMotion?: boolean
  animate?: boolean | VariantLabels | TargetAndTransition | AnimationControls | undefined
  transition?: Transition | undefined
  id?: string
}

const Line = ({ width = '80%', height = 6, color, style, className, isMotion, animate, transition, id }: LineProps) => {
  return (
    <>
      {isMotion ? (
        <motion.div
          id={id}
          animate={animate}
          transition={transition}
          className={className}
          style={{
            width,
            height: `${height}px`,
            backgroundColor: color || '#7fff00',
            borderRadius: '5px',

            ...style,
          }}
        />
      ) : (
        <div
          id={id}
          className={className}
          style={{
            width,
            height: `${height}px`,
            backgroundColor: color || '#7fff00',
            borderRadius: '5px',

            ...style,
          }}
        />
      )}
    </>
  )
}
export default Line
