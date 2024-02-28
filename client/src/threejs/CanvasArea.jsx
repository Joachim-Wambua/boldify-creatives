import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ContactShadows, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "/model/scene.gltf");

  // Apply glossy metallic material to the model
  // gltf.scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material = new THREE.MeshStandardMaterial({
  //       color: 0x000035, // color
  //       metalness: 0.8, // 100% metallic
  //       roughness: 0, // Slightly rough surface
  //     });
  //   }
  // });

  gltf.scene.scale.set(3, 3, 3);
  gltf.scene.position.set(0, -3, 0);
  gltf.scene.rotation.y = degToRad(120);
  return <primitive object={gltf.scene} />;
};

const CanvasArea = () => {
  return (
    <div className="canvas-three flex justify-center items-center">
      <Canvas camera={{ position: [6, 3, 1] }}>
        <ambientLight color={0xf44336} intensity={1.5} />

        <Scene />
        <ContactShadows
          position={[0, -2.7, 0]}
          opacity={0.65}
          scale={30}
          blur={2.7}
          far={9}
        />
        <Environment blur={2} preset="sunset" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default CanvasArea;
