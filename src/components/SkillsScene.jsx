import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import React from 'react'

function SkillLogo({ texturePath, position }) {
  const texture = useLoader(TextureLoader, texturePath)
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh position={position}>
        <boxGeometry args={[1.2, 1.2, 0.3]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  )
}

export default function SkillsScene() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 5]} intensity={0.8} />
        <OrbitControls enableZoom={false} />
        
        {/* Logos flottants */}
        <SkillLogo texturePath="/assets/pyt.jpg" position={[-2, 1, 0]} />
        <SkillLogo texturePath="/assets/profil.png" position={[2, 1, 0]} />
        <SkillLogo texturePath="/assets/react.svg" position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  )
}
