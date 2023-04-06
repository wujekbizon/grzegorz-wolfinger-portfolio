import styles from './Three.module.scss'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { PerspectiveCamera, OrbitControls, Environment, Html, MeshLineGeometry } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { angleToRadius } from '@/utils/angle'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { ProjectsProps } from '../projects/ProjectList'
import { Core, Stars } from '@/components'

const Three = ({ projects }: ProjectsProps) => {
  const result = useLoader(TextureLoader, '/images/map.png')
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

  useEffect(() => {
    if (!!ballRef.current) {
      // Timeline
      let timeline = gsap.timeline({ paused: false, delay: 2 })

      // start timeline

      timeline.to(
        ballRef.current.position,
        {
          y: 11,
          duration: 2
        },
        '>'
      )

      for (let i = 1; i < 100; i++) {
        timeline.to(ballRef.current.position, { y: 11 - i * 0.08, z: 0 + i * 0.12, duration: 0.05 }, '>')
      }

      timeline.to(ballRef.current.position, { y: 0, z: 12, duration: 2 }, '>')

      for (let i = 1; i < 100; i++) {
        timeline.to(ballRef.current.position, { y: 0 - i * 0.1, z: 12 - i * 0.1, duration: 0.05 }, '>')
      }

      timeline.to(ballRef.current.position, { x: 0, y: -11, z: 0, duration: 2 }, '>')
      timeline.to(ballRef.current.position, { x: 0, y: 0, z: 0, duration: 2 }, '>')

      // Play
      timeline.play()
      timeline.repeat(Infinity)
    }
  }, [ballRef])

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[-10, 30, 1]} />

      {isFreeMode && <OrbitControls makeDefault />}

      {!isFreeMode && (
        <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadius(30)} maxPolarAngle={angleToRadius(180)} />
      )}

      {/* Stars */}
      <Stars color={'#f272c8'} size={0.5} />

      {/* Projects Spheres */}
      <group>
        {projects.map(({ _id, x = 0, y = 0, z = 0, color = '#ffffff' }) => (
          <mesh key={_id} position={[x, y, z]} ref={ballRef}>
            <sphereGeometry args={[0.7, 64, 64]} />
            <meshStandardMaterial attach="material" color={color} wireframe />
          </mesh>
        ))}
      </group>

      <Html className={styles.panel}>
        <div className={styles.camera_container}>
          <div className={styles.btns}>
            <h4>OrbitControl Camera</h4>
            <button onClick={resetClickHandler}>Reset Camera</button>
            <button onClick={freeModeClickHandler}>Free Mode {!isFreeMode ? 'On' : 'Off'}</button>
            <div className={styles.earth_speed}>
              <div className={styles.speed}>
                <h4>Earth Rotation Speed</h4> - <h4>{earthRotationSpeed}</h4>
              </div>
              <input
                id="range"
                type="range"
                min={1}
                max={40}
                value={earthRotationSpeed}
                onChange={(e) => setEarthRotationSpeed(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Html>

      {/* Floor */}
      <mesh rotation={[-angleToRadius(0), 0, 0]} ref={earthRef}>
        <sphereGeometry args={[8, 512, 512]} />
        <meshStandardMaterial attach="material" map={result} metalness={0.6} roughness={0.6} wireframe />
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
          {/* <Stars color={'#B5F5F3'} size={0.002} /> */}
          <sphereGeometry args={[100, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#011627" />
        </mesh>
      </Environment>
    </>
  )
}
export default Three
