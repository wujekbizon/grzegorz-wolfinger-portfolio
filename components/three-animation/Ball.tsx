import { Decal, Float, useTexture } from '@react-three/drei'

type BallProps = {
  imgUrl: string
  color?: string
  x?: number
  y?: number
  z?: number
}

const Ball = ({ imgUrl, color = '#fff8eb', x = 0, y = 0, z = 0 }: BallProps) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[x, y, z]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  )
}
export default Ball
