import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from 'maath/random'
import { Points as PointsType } from 'three'

const Stars = (props: any) => {
  const ref = useRef<PointsType>(null)
  const [sphere] = useState(() => inSphere(new Float32Array(100000), { radius: 350, center: [0, 0, 0] }))

  useFrame((state, delta) => {
    if (!!ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color={props.color} size={props.size} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default Stars
