/*
	Known Issue -> Since video is played automatically,
	it means some nrowsers might want to block it,
	think about the way to deal with it.
	One way is to add click event, but I really don'w like
	the final product with it
*/
import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { useScrollPosition } from '@/hooks/useScrollPosition';
// import { ScrollArrow } from '@/components/scroll';

export default function ThreeDScene() {
  // const { scrollPos } = useScrollPosition();
  const { threeAnimColor } = useColorModeSwitcher();
  const [clicked, setClicked] = useState(true);
  const [ready, setReady] = useState(true);
  const store = { clicked, setClicked, ready, setReady };
  return (
    <div id="three-js-canvas">
      <Overlay {...store} />
      <Canvas
        concurrent
        gl={{ alpha: false }}
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 3, 100], fov: 15 }}
      >
        <color attach="background" args={[threeAnimColor]} />
        <fog attach="fog" args={[threeAnimColor, 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            {/* <Carla
              rotation={[0, Math.PI - 0.4, 0]}
              position={[-1.2, 0, 0.6]}
              scale={[0.26, 0.26, 0.26]}
            /> */}
            <VideoText {...store} position={[0, 1.3, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>
      </Canvas>
      {/* <ScrollArrow
        scrollPos={scrollPos}
        displayIcon={true}
        bottom="100%"
        position="fixed"
      /> */}
    </div>
  );
}

// function Carla(props) {
//   const { scene } = useGLTF('/carla-draco.glb');
//   return <primitive object={scene} dispose={null} {...props} />;
// }

function VideoText({ clicked, ...props }) {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/drei.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true
    })
  );
  useEffect(() => void (clicked && video.play()), [video, clicked]);
  return (
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      {'./AV'}
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    '/SurfaceImperfections003_1K_var1.jpg',
    '/SurfaceImperfections003_1K_Normal.jpg'
  ]);
  return (
    <Reflector
      resolution={512}
      args={[10, 10]}
      mirror={0.4}
      mixBlur={8}
      mixStrength={1}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[400, 100]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[1, 1]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3());
  useEffect(() => setTimeout(() => set(true), 500), []);
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(
        vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
        0.05
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
}
// REFACTOR OVERLAY TO BE RENDERED CONDITIONALLY instead of ThreeDScene on the first load
function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      <div
        className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${
          clicked && 'clicked'
        }`}
      >
        <div onClick={() => ready && setClicked(true)}>
          {!ready ? 'loading' : 'click to continue'}
        </div>
      </div>
    </>
  );
}
