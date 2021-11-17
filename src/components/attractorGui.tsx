import React, { useContext, useEffect, useState } from "react";
import FactoryAttractorInstance from "../attractors/factory.attractor";
import { Context } from "../context/context";
import styled from "styled-components";
import ParticleSystem from "../attractors/attractor";

const AttractorGuiStyles = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  display: flex;
  flex-direction: column;
  background-color: #00000071;
  padding: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 10px;
  color: #000;
  cursor: pointer;
`;

const ItemGui = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0px;
`;

type GuiDataTypes = {
  particles: number;
  speed: number;
};
const AttractorGui = () => {
  const { attractor } = useContext(Context);
  const [data, setData] = useState<GuiDataTypes>({ particles: 0, speed: 1 });
  const FactoryAttractor = FactoryAttractorInstance.get(attractor);

  useEffect(() => {
    console.log(FactoryAttractor.attractor);
    setData({
      ...data,
      particles: FactoryAttractor.config.particles,
      speed: FactoryAttractor.config.speed,
    });
  }, []);

  const handleParticlesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value !== NaN) {
      FactoryAttractor.attractor.changeMaxParticles(value);
    }
    setData({ ...data, particles: value });
  };

  const handleParticleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleParticleSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setData({ ...data, speed: value });
    console.log(value);
    FactoryAttractor.attractor.changeSpeed(value);
  };

  return (
    <AttractorGuiStyles>
      <ItemGui>
        <span>Particles</span>
        <Input
          type="number"
          placeholder="0000"
          min="0"
          step="1000"
          name="particles"
          value={data.particles}
          onChange={handleParticlesChange}
        />
      </ItemGui>
      <ItemGui>
        <span>Particle Speed: {data.speed}</span>
        <Input
          type="range"
          min="0.001"
          max="2"
          step="0.0001"
          value={data.speed}
          onChange={handleParticleSpeed}
        />
      </ItemGui>
    </AttractorGuiStyles>
  );
};

export default AttractorGui;
