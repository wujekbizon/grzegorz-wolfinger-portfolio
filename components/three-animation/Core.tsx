import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { MeshLineGeometry } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Core = () => {
  const innerCoreRef = useRef<MeshLineGeometry>(null)
  const outerCoreRef = useRef<MeshLineGeometry>(null)

  const innerCoreTexture = useLoader(TextureLoader, '/images/blog04.png')

  useFrame((state, delta) => {
    if (!!outerCoreRef.current) {
      outerCoreRef.current.rotation.x -= -delta / 10
      outerCoreRef.current.rotation.y -= -delta / 15
    }
  })

  useFrame((state, delta) => {
    if (!!innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= -delta * 5
    }
  })
  return (
    <>
      <group>
        <mesh position={[0, 0, 0]} ref={outerCoreRef}>
          <sphereGeometry args={[3.5, 32, 32]} />
          <meshBasicMaterial wireframe color="#2596be" />
        </mesh>

        <mesh position={[0, 0, 0]} ref={innerCoreRef}>
          <sphereGeometry args={[2, 128, 128]} />
          <meshBasicMaterial color="red" map={innerCoreTexture} />
        </mesh>
      </group>
    </>
  )
}
export default Core
