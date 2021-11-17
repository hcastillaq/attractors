import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import FactoryAttractorInstance from "../attractors/config/factory.attractor";
import { Context } from "../context/context";
import {
  AttractorAnimateConfig,
  startAttractorAnimate,
} from "../threejs/config.threejs";
import AttractorGui from "./attractorGui";

const AttractorContainer = styled.div`
  cursor: crosshair;
`;

const SimulationContainer = () => {
  const attractorName = useContext(Context).attractor;
  const { setIsSelecting } = useContext(Context);

  const ref = useRef(null);
  useEffect(() => {
    let stop = () => {};
    if (ref.current && attractorName) {
      const { attractor, config } = FactoryAttractorInstance.get(attractorName);
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
    };
  }, [ref]);

  return (
    <div>
      <AttractorGui />
      <AttractorContainer ref={ref}></AttractorContainer>
    </div>
  );
};

export default SimulationContainer;
