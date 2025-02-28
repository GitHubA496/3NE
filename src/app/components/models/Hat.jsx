import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Hat(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb')
  const modelRef = useRef();
  
  useFrame(()=>{
      modelRef.current.rotation.y += 0.009 
  })

  return (
    <group {...props} dispose={null}
      scale={[1.6, 1.6, 1.6]}
      rotation={[0.4,-1,0]}
      position={[0, 0, 0]}
      ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.8671, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/hat-transformed.glb')
