/*
	Known Issue -> Since video is played automatically,
	it means some nrowsers might want to block it,
	think about the way to deal with it.
	One way is to add click event, but I really don'w like
	the final product with it
*/
import * as THREE from 'three';
import { Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Reflector, Text, useTexture, Preload, Html } from '@react-three/drei'; // useGLTF, useProgress,
// import { LoadingScreen } from '@/components/loading-screen';

export default function ThreeDScene({ animColor }) {
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
        camera={{ position: [0, 3, 100], fov: 20 }} // 15 -> ? for fov
      >
        <color attach="background" args={[animColor]} />
        <fog attach="fog" args={[animColor, 15, 18]} />
        <Suspense fallback={<Loader />}>
          <group position={[0, -1, 0]}>
            <VideoText {...store} position={[0, 1.3, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
          <Intro start={ready && clicked} set={setReady} />
          <Preload all />
        </Suspense>
      </Canvas>
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
      src: '/LastCut.mp4',
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

function Loader() {
  // const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <>
      <Html center>
        {/* <Heading variant="h1" fontSize="10rem"> {progress} % loaded </Heading> */}
        {/* {active && <LoadingScreen />} */}
        {/* <Heading variant="h1" fontSize="7rem"> Loading... </Heading> */}
        {/* <Flex justifyContent="space-evenly"> */}
        {/* <Heading variant="h1" fontSize="5rem" sx={{ "font-family": "Iosevka" }}>LOADING</Heading> */}
        {/* LOADING */}
        {/* FIX THE ISSUE WITH PHONES LEAVE ANIMATION ONLY */}
        {/* Reproduce the issue on a dev server and submit an issue on chakra ui github */}
        <div className="loadingTwo">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
        {/* </Flex> */}
      </Html>
    </>
  );
}
