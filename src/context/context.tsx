import { createContext } from "react";
import { AnimationParticlesCallBacks } from "../core/threejs/config.threejs";

export type ContextType = {
  animation: AnimationParticlesCallBacks;
  system: string;
  setSystem: (system: string) => void;
  isSelecting: boolean;
  setIsSelecting: (isSelecting: boolean) => void;
  setAnimation: (animation: AnimationParticlesCallBacks) => void;
};

const initialContext: ContextType = {
  animation: {
    start: () => {},
    stop: () => {},
    changeColor: () => {},
    changeOpacity: () => {},
    takePhoto: () => {},
  },
  system: "",
  isSelecting: true,
  setSystem: () => {},
  setIsSelecting: () => {},
  setAnimation: () => {},
};

export const Context = createContext<ContextType>(initialContext);
