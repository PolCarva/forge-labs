"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Import THREE
import { Suspense } from "react";

const ThreeDModel = () => {
  const gltf = useLoader(GLTFLoader, "/assets/pc.glb");

  // Component to adjust camera position and clipping planes
  const CameraControls = () => {
    const { camera, scene } = useThree();
    camera.position.set(1000, -500, 1000); // Adjust the camera position here
    camera.near = 0.1; // Clipping plane near
    camera.far = 5000; // Clipping plane far
    camera.updateProjectionMatrix(); // Update the projection matrix to apply changes

    // Set the background color
    scene.background = new THREE.Color(0x1f2427); // Replace with your desired color

    return null;
  };

  return (
    <Suspense fallback={"loading"}>
      <Canvas
        className="rounded-xl ring-1 ring-white"
        style={{ background: "#1f2427" }}
      >
        {" "}
        {/* Replace with your desired color */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CameraControls />
        <primitive object={gltf.scene} />
        <OrbitControls
          minDistance={800} // Minimum distance to the target
          maxDistance={1300} // Maximum distance to the target
        />
      </Canvas>
    </Suspense>
  );
};

export default ThreeDModel;
