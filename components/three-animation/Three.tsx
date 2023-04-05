import styles from './Three.module.scss'

import { useRef, useEffect, useState } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { PerspectiveCamera, OrbitControls, Environment, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { angleToRadius } from '@/utils/angle'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { ProjectsProps } from '../projects/ProjectList'
import * as THREE from 'three'

const Three = ({ projects }: ProjectsProps) => {
  const result = useLoader(TextureLoader, '/images/map.png')
  const moonTexture = useLoader(TextureLoader, '/images/blog02.png')

  // code to move camera around
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const moonSphereRef = useRef(null)
  const ballRef = useRef(null)

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadius(180))
      orbitControlsRef.current.setPolarAngle(y + 1 * angleToRadius(120 - 30))
      orbitControlsRef.current.minZoom = 1
      orbitControlsRef.current.update()
    }
  })

  const resetClickHandler = () => {
    orbitControlsRef.current?.reset()
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[-10, 40, 1]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadius(30)}
        maxPolarAngle={angleToRadius(180)}
        enableRotate={false}
      />

      <group>
        {/* Spheres */}

        {projects.map(({ _id, x = 0, y = 9, z = 0, color = '#ffffff' }) => (
          <mesh key={_id} position={[x, y, z]} ref={ballRef}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={color} />
          </mesh>
        ))}
      </group>

      <Html className={styles.panel}>
        <div className={styles.camera_container}>
          <div className={styles.btns}>
            <h4>OrbitControl Camera</h4>

            <button onClick={resetClickHandler}>Reset Camera</button>
          </div>
        </div>
      </Html>

      {/* Floor */}
      <mesh rotation={[-angleToRadius(0), 0, 0]} receiveShadow>
        <sphereGeometry args={[8, 512, 512]} />
        <meshStandardMaterial attach="material" map={result} metalness={0.6} roughness={0.6} wireframe />
      </mesh>

      {/* Moon */}

      <mesh position={[10, 18, -5]} rotation={[angleToRadius(50), -angleToRadius(90), 0]} ref={moonSphereRef}>
        <sphereGeometry args={[2.5, 128, 128]} />
        <meshBasicMaterial map={moonTexture} wireframe />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={['#ffffff', 0.3]} />

      <directionalLight args={['#B5F5F3', 8]} position={[25, 38, -15]} />

      {/* Spotlight light */}
      {/* <spotLight args={['#B5F5F3', 20, 50, angleToRadius(90), 2, 0.1]} position={[0, 38, -15]} castShadow /> */}

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#011627" />
        </mesh>
      </Environment>
    </>
  )
}
export default Three
