import {motion, AnimatePresence} from "framer-motion";
import state from "../store";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../utils/motion";

export const Home = () => {
  const snap = useSnapshot(state);
   
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation("left")}
        >
          <motion.header>
            <img className="w-8 h-8 object-contain" src="./threejs.png" alt="logo"/>
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};