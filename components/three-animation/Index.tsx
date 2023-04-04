import { useRef, useEffect } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { PerspectiveCamera, OrbitControls, Environment, Ring } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { angleToRadius } from '@/utils/angle'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { ProjectsProps } from '../projects/ProjectList'

const Three = ({ projects }: ProjectsProps) => {
  const result = useLoader(TextureLoader, '/images/map.png')
  const ballImage = useLoader(TextureLoader, '/images/blank.png')
  // code to move camera around
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const ballRef = useRef(null)
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadius(180))
      orbitControlsRef.current.setPolarAngle(y + 1 * angleToRadius(120 - 30))
      orbitControlsRef.current.update()
    }
  })

  console.log(projects.length)

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 20, 5]} />
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadius(30)} maxPolarAngle={angleToRadius(180)} />

      <group>
        {/* Ball */}
        <mesh position={[0, 0.5, 0]} castShadow ref={ballRef}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="white" map={ballImage} />
        </mesh>
        <mesh position={[3, 0.5, 0]} castShadow ref={ballRef}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      {/* Floor */}
      <mesh rotation={[-angleToRadius(0), 0, 0]} receiveShadow>
        <sphereGeometry args={[8, 128, 128]} />
        <meshStandardMaterial attach="material" map={result} />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={['#ffffff', 0.2]} />
    </>
  )
}
export default Three
