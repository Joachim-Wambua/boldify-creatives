import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ContactShadows, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "/boldify.gltf");

  // Apply glossy metallic material to the model
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0x333333, // color
        metalness: 1.2, // 100% metallic
        roughness: 0.2, // Slightly rough surface
      });
    }
  });

  gltf.scene.scale.set(0.04, 0.04, 0.04);
  gltf.scene.position.set(0, 0, 0);
  return <primitive object={gltf.scene} />;
};

const CanvasArea = () => {
  return (
    <div className="canvas-three flex justify-center items-center">
      <Canvas camera={{ position: [5, 1.5, 1.5] }}>
        {/* <ambientLight intensity={0.5} /> */}

        <Scene />
        <ContactShadows
          position={[0, -2.7, 0]}
          opacity={0.65}
          scale={40}
          blur={1}
          far={9}
        />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default CanvasArea;
