"use client";
import { Canvas, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'; // Importa THREE

const ThreeDModel = () => {
  const gltf = useLoader(GLTFLoader, "/pc.glb");

  const CameraControls = () => {
    const { camera, scene } = useThree();
    camera.position.set(1000, -500, 1000); // Ajusta la posición de la cámara
    camera.near = 0.1; // Plano de recorte cercano
    camera.far = 5000; // Plano de recorte lejano
    camera.updateProjectionMatrix(); // Actualiza la matriz de proyección para aplicar los cambios

    scene.background = new THREE.Color(0x1f2427); // Color de fondo

    return null;
  };

  return (
    <Canvas className='rounded-xl ring-1 ring-white' style={{ background: '#1f2427' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CameraControls />
      {gltf && <primitive object={gltf.scene} />}
      <OrbitControls
        minDistance={800}
        maxDistance={1300}
      />
    </Canvas>
  );
};

export default ThreeDModel;
