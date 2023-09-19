import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#e6e0d1",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png"
});

export default state;