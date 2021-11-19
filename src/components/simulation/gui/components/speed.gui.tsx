import React, { SyntheticEvent } from "react";
import useSimulation from "../../../../hooks/useSimulation";
import { InputGui, ItemGui } from "../styles.gui";

const SpeedGiu = () => {
  const { system, config } = useSimulation();
  const [speed, setSpeed] = React.useState(config.speed);
  const changeSpeed = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value);
    setSpeed(value);
    system.changeSpeed(value);
  };
  return (
    <ItemGui>
      <span>Particle Speed: {speed}</span>
      <InputGui
        type="range"
        min="0.001"
        max="2"
        step="0.0001"
        value={speed}
        onChange={changeSpeed}
      />
    </ItemGui>
  );
};

export default SpeedGiu;
