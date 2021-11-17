import { createContext } from "react";
import ParticleSystem from "../attractors/attractor";

type contextType = {
  attractor: string;
  setAttractor: (attractor: string) => void;
  isSelecting: boolean;
  setIsSelecting: (isSelecting: boolean) => void;
};

const initialContext: contextType = {
  attractor: "",
  isSelecting: true,
  setAttractor: () => {},
  setIsSelecting: () => {},
};

export const Context = createContext<contextType>(initialContext);
