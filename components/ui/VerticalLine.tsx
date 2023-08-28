import { motion, VariantLabels, TargetAndTransition, AnimationControls, Transition } from 'framer-motion'

type LineProps = {
  width?: number
  height?: string
  color?: string
  style?: React.CSSProperties
  className?: string
  isMotion?: boolean
  animate?: boolean | VariantLabels | TargetAndTransition | AnimationControls | undefined
  transition?: Transition | undefined
  id?: string
}

const VerticalLine = ({
  height = '80%',
  width = 6,
  color,
  style,
  className,
  isMotion,
  animate,
  transition,
  id,
}: LineProps) => {
  return (
    <>
      {isMotion ? (
        <motion.div
          id={id}
          animate={animate}
          transition={transition}
          className={className}
          style={{
            width: `${width}px`,
            height,
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
            width: `${width}px`,
            height,
            backgroundColor: color || '#7fff00',
            borderRadius: '5px',

            ...style,
          }}
        />
      )}
    </>
  )
}
export default VerticalLine
