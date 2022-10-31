import React, { useContext } from "react";
import { GuiContext } from "../../../../context/guiContext";
import useSimulation from "../../../../hooks/useSimulation";
import { InputGui, ItemGui } from "../styles.gui";

const ParticlesGui = () => {
  const { system } = useSimulation();
  const { particles, setParticles } = useContext(GuiContext);

  const handleParticlesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    system.changeMaxParticles(value);
    setParticles(value);
  };

  return (
    <ItemGui>
      <span>Particles</span>
      <InputGui
        type="number"
        placeholder="0000"
        min="0"
        step="1000"
        name="particles"
        value={particles}
        onChange={handleParticlesChange}
      />
    </ItemGui>
  );
};

export default ParticlesGui;
