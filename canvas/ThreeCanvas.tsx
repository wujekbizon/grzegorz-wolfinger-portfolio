import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Three } from '@/components'
import { CanvasLoader } from '@/components'

const ThreeCanvas = () => {
  return (
    <>
      <Canvas id="canvas-projects-element">
        <Suspense fallback={<CanvasLoader />}>
          <Three />
        </Suspense>
      </Canvas>
    </>
  )
}

export default ThreeCanvas
