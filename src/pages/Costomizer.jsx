import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../utils/config";
import state from "../store";
import {download} from "../assets/images";
import {downloadCanvasToImage, reader} from "../utils/helpers";
import {EditorTabs, FilterTabs, DecalTypes} from "../utils/constants";
import {fadeAnimation, slideAnimation} from "../utils/motion";

import { AIPicker, ColorPicker, Tab, CustomButton, FilePicker } from "../components";

export const Castomizer = () => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editorstabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab=""
                    handleClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              className="w-fit px-4 py-2.5 font-bold text-lg text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
};