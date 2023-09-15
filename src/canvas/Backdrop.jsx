import {easing} from "maath";
import { useRef } from "react";
import {useFrame} from "@react-three/fiber";
import {AccumulativeShadows, RandomizedLight } from "@react-three/drei";


export const Backdrop = () => {
  return (
    <AccumulativeShadows
      position={[0,0,0, -0.14]}
    >
      <RandomizedLight 
        amount={4}

      />
    </AccumulativeShadows>
  );
};
