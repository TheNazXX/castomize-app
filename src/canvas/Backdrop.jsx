import {easing} from "maath";
import { useRef } from "react";
import {useFrame} from "@react-three/fiber";
import {AccumulativeShadows, RandomizedLight } from "@react-three/drei";


export const Backdrop = () => {
  const  shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.7}
      scale={500}
      rotation={[Math.PI / 2, 0, 0]}
      position={[2, 2, -1]}
    >
      <RandomizedLight 
        amount={5}
        radius={9}
        intensity={2}
        ambient={25}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  )

};
