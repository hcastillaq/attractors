import React, { useEffect, useState } from "react";
import { Context, ContextType } from "../../context/context";
import { AnimationParticlesCallBacks } from "../../core/threejs/config.threejs";
import SelectAttractor from "./selectSimulation";
import SimulationContainer from "./simulationContainer";
import SimulationStyles from "./simulation.styles";
import { useRouter } from "next/dist/client/router";
import FactoryAttractorInstance from "../../core/systems/config/factory.system";

const Simulation = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(true);
  const [system, setSystem] = useState<string>("");

  const [animation, setAnimation] = useState<AnimationParticlesCallBacks>({
    start: () => {},
    stop: () => {},
    changeColor: () => {},
    changeOpacity: () => {},
    takePhoto: () => {},
  });

  const router = useRouter();

  const ValidateNameParam = (): string | false => {
    const { query } = router;
    if (query.name) {
      return query.name as string;
    }
    return false;
  };

  useEffect(() => {
    const param = ValidateNameParam();
    if (param) {
      try {
        FactoryAttractorInstance.get(param);
        setSystem(param);
        setIsSelecting(false);
      } catch (error) {
        alert(param + " is not valid");
      }
    }
  }, []);

  const handleShowComponent = (): JSX.Element => {
    if (isSelecting) {
      return <SelectAttractor />;
    }
    return <SimulationContainer />;
  };

  const contextValue: ContextType = {
    isSelecting,
    setIsSelecting,
    system,
    setSystem,
    animation,
    setAnimation,
  };

  return (
    <Context.Provider value={contextValue}>
      <SimulationStyles>{handleShowComponent()}</SimulationStyles>
    </Context.Provider>
  );
};

export default Simulation;
