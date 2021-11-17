import React, { useState } from "react";
import { Context } from "../context/context";
import SelectAttractor from "./selectAttractor";
import SimulationContainer from "./simulationContainer";

const AttractorApp = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(true);
  const [attractor, setAttractor] = useState<string>("");
  const handleShowComponent = (): JSX.Element => {
    if (isSelecting) {
      return <SelectAttractor />;
    }
    return <SimulationContainer />;
  };

  const contextValue = {
    isSelecting,
    setIsSelecting,
    attractor,
    setAttractor,
  };
  return (
    <Context.Provider value={contextValue}>
      {handleShowComponent()}
    </Context.Provider>
  );
};

export default AttractorApp;
