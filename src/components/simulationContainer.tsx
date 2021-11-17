import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ParticleSystem from "../attractors/attractor";
import { AttractorConfig } from "../attractors/attractors";
import FactoryAttractorInstance from "../attractors/factory.attractor";
import { Context } from "../context/context";
import {
  AttractorAnimateConfig,
  startAttractorAnimate,
} from "../threejs/config.threejs";

const AttractorContainer = styled.div`
  cursor: crosshair;
`;
const ButtonBack = styled.button`
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background: #a7a7a7;
  padding: 0px 10px;
`;
const SimulationContainer = () => {
  const attractorName = useContext(Context).attractor;
  const { setIsSelecting } = useContext(Context);

  const ref = useRef(null);
  useEffect(() => {
    let stop = () => {};
    let attractor: ParticleSystem;
    let config: AttractorConfig;
    if (ref.current && attractorName) {
      attractor = FactoryAttractorInstance.get(attractorName).attractor;
      config = FactoryAttractorInstance.get(attractorName).config;
      attractor.setMaxParticles(config.particles);
      attractor.setSpeed(config.speed);
      const node: HTMLElement = ref.current as HTMLElement;
      const newConfig: AttractorAnimateConfig = {
        attractor,
        material: {
          color: 0x00ffff,
          sizeParticle: config.sizeParticle,
        },
        parentNode: node,
        zoom: config.zoom,
        orbitConfig: {
          autoRotate: config.autoRotate,
        },
      };
      stop = startAttractorAnimate(newConfig);
    }

    return () => {
      stop();
      attractor.dispose();
    };
  }, [ref]);

  const handleClick = () => {
    setIsSelecting(true);
  };
  return (
    <div>
      <ButtonBack onClick={handleClick}>Change Attractor</ButtonBack>
      <AttractorContainer ref={ref}></AttractorContainer>
    </div>
  );
};

export default SimulationContainer;
