import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
// import './scene.css';

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef();

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#000" size={0.018} sizeAttenuation />
    </points>
  );
};

const CanvasArea = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ width: "50%", height: "75vh" }}>
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
          <ambientLight intensity={0.5} />
          <BasicParticles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
        </Canvas>
      </div>
    </>
  );
};

export default CanvasArea;
