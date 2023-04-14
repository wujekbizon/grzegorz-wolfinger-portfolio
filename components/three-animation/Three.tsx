import styles from './Three.module.scss'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { PerspectiveCamera, OrbitControls, Environment, Html, MeshLineGeometry } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { angleToRadius } from '@/utils/angle'
// import { timelineAnimation } from '@/utils/timelineAnimation'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Core, Stars, CameraContainer, Ball } from '@/components'
import { technologies } from '@/data/constants'

const Three = () => {
  const mapTexture = useLoader(TextureLoader, '/images/map.png')
  const moonTexture = useLoader(TextureLoader, '/images/blog02.png')

  const [isFreeMode, setIsFreeMode] = useState(false)
  const [earthRotationSpeed, setEarthRotationSpeed] = useState('15')

  // code to move camera around
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const moonSphereRef = useRef(null)
  const ballRef = useRef<MeshLineGeometry>(null)
  const earthRef = useRef<MeshLineGeometry>(null)

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadius(180))
      orbitControlsRef.current.setPolarAngle(y + 1 * angleToRadius(120 - 30))
      orbitControlsRef.current.update()
    }
  })

  useFrame((state, delta) => {
    if (!!earthRef.current) {
      // earthRef.current.rotation.x -= delta / 10
      earthRef.current.rotation.y -= delta / Number(earthRotationSpeed)
    }
  })

  // handlers
  const resetClickHandler = () => {
    orbitControlsRef.current?.reset()
  }

  const freeModeClickHandler = () => {
    setIsFreeMode(!isFreeMode)
  }

  // useEffect(() => {
  //   timelineAnimation(ballRef)
  // }, [ballRef])

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[-10, 40, 1]} />

      {isFreeMode && <OrbitControls makeDefault />}

      {!isFreeMode && (
        <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadius(30)} maxPolarAngle={angleToRadius(180)} />
      )}

      {/* Stars */}
      <Stars color={'#f272c8'} size={0.4} />

      <group>
        {/* Skills Cubes */}
        {technologies.map(({ name, icon, color, position }) => (
          <Ball key={name} imgUrl={icon} color={color} position={position} />
        ))}
      </group>

      <Html className={styles.panel}>
        <CameraContainer
          isFreeMode={isFreeMode}
          earthRotationSpeed={earthRotationSpeed}
          resetClickHandler={resetClickHandler}
          freeModeClickHandler={freeModeClickHandler}
          setEarthRotationSpeed={setEarthRotationSpeed}
        />
      </Html>

      {/* Floor */}
      <mesh rotation={[-angleToRadius(0), 0, 0]} ref={earthRef}>
        <sphereGeometry args={[8, 512, 512]} />
        <meshStandardMaterial attach="material" map={mapTexture} metalness={0.6} roughness={0.6} wireframe />
      </mesh>

      {/* Moon */}
      <mesh position={[10, 18, -5]} rotation={[angleToRadius(50), -angleToRadius(90), 0]} ref={moonSphereRef}>
        <sphereGeometry args={[2.5, 128, 128]} />
        <meshBasicMaterial map={moonTexture} wireframe />
      </mesh>

      {/* Earth Core */}

      <Core />

      {/* Ambient light */}
      <ambientLight args={['#ffffff', 0.3]} />

      <directionalLight args={['#B5F5F3', 8]} position={[25, 38, -15]} />

      {/* Spotlight light */}
      {/* <spotLight args={['#B5F5F3', 20, 150, angleToRadius(10), 2, 0.1]} position={[0, 38, -15]} castShadow /> */}

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[100, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#011627" />
        </mesh>
      </Environment>
    </>
  )
}
export default Three
