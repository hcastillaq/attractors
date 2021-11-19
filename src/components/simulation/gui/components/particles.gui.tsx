import React, { useContext, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import useSimulation from "../../../../hooks/useSimulation";
import { InputGui, ItemGui } from "../styles.gui";

const ParticlesGui = () => {
  const { system, config } = useSimulation();
  const [particles, setParticles] = useState(config.particles);
  const debounceParticles = useDebounce(particles, 500);

  useEffect(() => {
    if (!isNaN(debounceParticles)) {
      system.changeMaxParticles(debounceParticles);
    }
  }, [debounceParticles]);

  const handleParticlesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value !== NaN) {
    }
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
