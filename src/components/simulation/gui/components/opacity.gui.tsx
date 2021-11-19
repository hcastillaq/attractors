import React, { SyntheticEvent } from "react";
import useSimulation from "../../../../hooks/useSimulation";
import { InputGui, ItemGui } from "../styles.gui";

const OpacityGiu = () => {
  const initialOpacity = useSimulation().opacity;
  const { animation } = useSimulation();
  const [opacity, setOpacity] = React.useState(initialOpacity);
  const changeOpacity = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value);
    setOpacity(value);
    animation.changeOpacity(value);
  };
  return (
    <ItemGui>
      <span>Particle Opacity: {opacity}</span>
      <InputGui
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        value={opacity}
        onChange={changeOpacity}
      />
    </ItemGui>
  );
};

export default OpacityGiu;
