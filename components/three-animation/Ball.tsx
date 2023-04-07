import { Decal, Float, useTexture } from '@react-three/drei'

type BallProps = {
  imgUrl: string
  color?: string
  position: {
    x: number
    y: number
    z: number
  }
}

const Ball = ({ imgUrl, color, position }: BallProps) => {
  const { x, y, z } = position
  const mapTexture = useTexture(imgUrl)

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={4}>
      <mesh castShadow receiveShadow position={[x, y, z]}>
        <boxGeometry args={[1.1, 1.1, 1.1]} />
        <meshStandardMaterial color={color} map={mapTexture} metalness={0.4} roughness={0.6} />
        <Decal position={[x, y, z]} rotation={[2 * Math.PI, 0, 6.25]} scale={2} flatShading />
      </mesh>
    </Float>
  )
}
export default Ball
