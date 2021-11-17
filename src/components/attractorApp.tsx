import React, { useState } from "react";
import { Context, ContextType } from "../context/context";
import { AnimationParticlesCallBacks } from "../threejs/config.threejs";
import SelectAttractor from "./selectAttractor";
import SimulationContainer from "./simulationContainer";

const AttractorApp = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(true);
  const [attractor, setAttractor] = useState<string>("");
  const [animation, setAnimation] = useState<AnimationParticlesCallBacks>({
    start: () => {},
    stop: () => {},
    changeColor: () => {},
    changeOpacity: () => {},
  });

  const handleShowComponent = (): JSX.Element => {
    if (isSelecting) {
      return <SelectAttractor />;
    }
    return <SimulationContainer />;
  };

  const contextValue: ContextType = {
    isSelecting,
    setIsSelecting,
    attractor,
    setAttractor,
    animation,
    setAnimation,
  };
  return (
    <Context.Provider value={contextValue}>
      {handleShowComponent()}
    </Context.Provider>
  );
};

export default AttractorApp;
