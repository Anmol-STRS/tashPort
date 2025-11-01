import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { Mesh } from "three";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const fallback = (
  <img
    src="/chocolate-fallback.png"
    alt="Illustrated chocolate truffles on a warm background"
    className="h-full w-full rounded-[calc(var(--radius-card)-1rem)] object-cover"
    loading="lazy"
  />
);

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

type PieceProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  geometry: "box" | "cylinder";
  scale: [number, number, number];
  hue: number;
  floatOffset: number;
};

const ChocolatePiece = ({
  position,
  rotation,
  geometry,
  scale,
  hue,
  floatOffset
}: PieceProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const meshRef = useRef<Mesh | null>(null);
  const baseY = position[1];
  const baseRotY = rotation[1];

  useFrame(({ clock }) => {
    if (!meshRef.current || prefersReducedMotion) {
      return;
    }
    const t = clock.getElapsedTime() + floatOffset;
    meshRef.current.position.y = baseY + Math.sin(t * 0.6) * 0.18;
    meshRef.current.rotation.y = baseRotY + Math.cos(t * 0.35) * 0.4;
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.4) * 0.15;
  });

  const color = `hsl(${hue} 35% 32%)`;
  const highlight = `hsl(${hue} 40% 55%)`;

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
    >
      {geometry === "box" ? (
        <boxGeometry args={[1, 0.5, 1]} />
      ) : (
        <cylinderGeometry args={[0.7, 0.7, 0.4, 32, 1, false]} />
      )}
      <meshStandardMaterial
        color={color}
        metalness={0.18}
        roughness={0.48}
        emissive={highlight}
        emissiveIntensity={0.08}
      />
    </mesh>
  );
};

const ChocolateCluster = () => {
  const pieces: PieceProps[] = [
    {
      position: [-0.8, 0.2, 0.4],
      rotation: [0.4, 0.6, 0.2],
      geometry: "box",
      scale: [1.2, 1.2, 1.2],
      hue: 18,
      floatOffset: 0
    },
    {
      position: [0.8, 0.3, -0.2],
      rotation: [0.2, -0.4, -0.35],
      geometry: "cylinder",
      scale: [1.1, 1, 1.1],
      hue: 24,
      floatOffset: 0.8
    },
    {
      position: [0, 0.4, 0.8],
      rotation: [0.1, 0.3, -0.2],
      geometry: "box",
      scale: [1, 1, 1],
      hue: 16,
      floatOffset: 1.6
    },
    {
      position: [-0.2, -0.1, -0.6],
      rotation: [-0.25, 0.2, 0.3],
      geometry: "cylinder",
      scale: [1, 0.9, 1],
      hue: 28,
      floatOffset: 2.4
    }
  ];

  return (
    <group>
      {pieces.map((piece) => (
        <ChocolatePiece key={`${piece.position.join("-")}`} {...piece} />
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[6, 8, 6]}
        angle={0.6}
        penumbra={0.4}
        intensity={1.1}
        castShadow
      />
      <directionalLight
        position={[-4, -2, -4]}
        intensity={0.35}
        color="#F7F2EE"
      />
      <Environment preset="city" />
      <group position={[0, 0, 0]}>
        <ChocolateCluster />
        <mesh
          position={[0, -1.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <circleGeometry args={[4, 64]} />
          <meshStandardMaterial
            color="#3F2B25"
            metalness={0.1}
            roughness={0.6}
          />
        </mesh>
      </group>
    </>
  );
};

const ChocolateScene = () => {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (supported === false) {
    return fallback;
  }

  return (
    <>
      {supported ? (
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [3, 2.5, 4.5], fov: 40 }}
          className="h-full w-full rounded-[calc(var(--radius-card)-1rem)]"
        >
          <Suspense
            fallback={
              <Html center>
                <div className="rounded-full bg-white/70 px-4 py-2 text-sm text-cocoa">
                  Melting chocolate…
                </div>
              </Html>
            }
          >
            <Scene />
          </Suspense>
        </Canvas>
      ) : (
        fallback
      )}
    </>
  );
};

export default ChocolateScene;
