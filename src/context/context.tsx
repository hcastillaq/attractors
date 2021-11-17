import { createContext } from "react";
import { AnimationParticlesCallBacks } from "../threejs/config.threejs";

export type ContextType = {
  animation: AnimationParticlesCallBacks;
  attractor: string;
  setAttractor: (attractor: string) => void;
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
  },
  attractor: "",
  isSelecting: true,
  setAttractor: () => {},
  setIsSelecting: () => {},
  setAnimation: () => {},
};

export const Context = createContext<ContextType>(initialContext);
