import {motion, AnimatePresence} from "framer-motion";
import state from "../store";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../utils/motion";

import { CustomButton } from "../components";

export const Home = () => {
  const snap = useSnapshot(state);
   
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            <img className="w-8 h-8 object-contain" src="./threejs.png" alt="logo"/>
          </motion.header>

          <motion.div
            className="home-content"
            {...headContainerAnimation}
          >
            <motion.div
              {...headTextAnimation}
            >
              <h1 className="head-text">Let's <br className="xl:block hidden"/>DO IT</h1>
            </motion.div>

            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-900 text-base">Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.</p>
            </motion.div>

            <CustomButton 
              type="filled"
              title="Customize It"
              handleClick={() => state.intro = false}
              customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};