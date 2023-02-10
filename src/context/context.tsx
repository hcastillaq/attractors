import { ParticleSystemAnimationCallbacks } from "particle-system";
import { createContext } from "react";

export type ContextType = {
	animation: ParticleSystemAnimationCallbacks;
	system: string;
	setSystem: (system: string) => void;
	setAnimation: (animation: ParticleSystemAnimationCallbacks) => void;
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
	setSystem: () => {},
	setAnimation: () => {},
};

export const Context = createContext<ContextType>(initialContext);
