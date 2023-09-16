import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../utils/config";
import state from "../store";
import {download} from "../assets/images";
import {downloadCanvasToImage, reader} from "../utils/helpers";
import {EditorTabs, FilterTabs, DecalTypes} from "../utils/constants";
import {fadeAnimation, slideAnimation} from "../utils/motion";

import { AIPicker, ColorPicker, Tab, CustomButton, FilePicker } from "../components";
import { useState } from "react";

export const Castomizer = () => {

  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirtL: true,
    stylishShirt: false
  });

  const generateTabContent = () => {
    switch(activeEditorTab){
      case "colorpicker":
        return  <ColorPicker />
      case "filepicker":
        return <FilePicker 
          file={file}
          setFile={setFile}
        />
      case "aipicker":
        return <AIPicker />
      default: return null
    };
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]){
      handleActiveFilterTab(decalType.filterTab)
    }
  };
  
  const handleActiveFilterTab = (tabName) => {
    switch(tabName){
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName]
        break;
      case "stylishShirt":
        state.isFullTexture = !activeEditorTab[tabName]
        break;
      default:
        state.isFullTexture = false;
        state.isLogoTexture = true;
    }
  };

  const readFile = () => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }


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
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab=""
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
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