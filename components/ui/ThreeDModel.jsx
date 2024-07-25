"use client";
import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';

const ThreeDModel = ({ modelPath }) => {
  const [gltf, setGltf] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {

        if (!modelPath) {
          throw new Error('Model path is undefined');
        }
        const loadedGltf = await new Promise((resolve, reject) => {
          new GLTFLoader().load(modelPath, resolve, undefined, reject);
        });
        setGltf(loadedGltf);
      } catch (err) {
        setError(err);
        console.error('Error loading GLTF model:', err);
      }
    };

    loadModel();
  }, [modelPath]);

  const CameraControls = () => {
    const { camera, scene } = useThree();
    camera.position.set(1000, -500, 1000); // Ajusta la posición de la cámara
    camera.near = 0.1; // Plano de recorte cercano
    camera.far = 5000; // Plano de recorte lejano
    camera.updateProjectionMatrix(); // Actualiza la matriz de proyección para aplicar los cambios

    scene.background = new THREE.Color(0x1f2427); // Color de fondo

    return null;
  };

  if (error) return <Image src={"/assets/pc.png"} className='w-full h-full object-contain' width={348} height={453} alt='Pc Gamer'/>;
  if (!gltf) return <div className='grid place-content-center w-full h-full'>Loading...</div>;

  return (
    <Canvas className='rounded-xl ring-1 ring-white' style={{ background: '#1f2427' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CameraControls />
      <Suspense fallback={<div className='grid place-content-center w-full h*full'>Loading...</div>}>
        <primitive object={gltf.scene} />
      </Suspense>
      <OrbitControls minDistance={800} maxDistance={1300} />
    </Canvas>
  );
};

export default ThreeDModel;
