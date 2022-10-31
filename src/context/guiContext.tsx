import { createContext } from "react";

export type TypeGuiContext = {
  speed: number;
  setSpeed: (speed: number) => void;
  color: number;
  setColor: (color: number) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
  particles: number;
  setParticles: (particles: number) => void;
};

const initialContext: TypeGuiContext = {
  speed: 0,
  setSpeed: () => {},
  color: 0,
  setColor: () => {},
  opacity: 0,
  setOpacity: () => {},
  particles: 0,
  setParticles: () => {},
};

export const GuiContext = createContext<TypeGuiContext>(initialContext);
