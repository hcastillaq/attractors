import React, { useContext } from "react";
import FactoryAttractorInstance from "../systems/config/factory.attractor";
import { Context } from "../context/context";

const useSimulation = () => {
  const context = useContext(Context);
  const color = 0x00ffff;
  const opacity = 0.5;
  const attractorName = context.attractor;
  const { attractor, config } = FactoryAttractorInstance.get(context.attractor);
  return { ...context, attractor, config, attractorName, color, opacity };
};

export default useSimulation;
