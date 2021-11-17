import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FactoryAttractorInstance from "../systems/config/factory.attractor";
import { Context } from "../context/context";
import useSimulation from "../hooks/useSimulation";
import {
  AnimationParticles,
  AnimationParticlesCallBacks,
  AttractorAnimateConfig,
} from "../threejs/config.threejs";
import AttractorGui from "./gui/attractorGui";

const AttractorContainer = styled.div`
  cursor: crosshair;
`;

const SimulationContainer = () => {
  const { attractor, config, color, setAnimation, opacity } = useSimulation();
  const ref = useRef(null);

  useEffect(() => {
    let stop = () => {};
    if (ref.current) {
      // config attractor
      attractor.setMaxParticles(config.particles);
      attractor.setSpeed(config.speed);

      //config for animation
      const node: HTMLElement = ref.current as HTMLElement;
      const newConfig: AttractorAnimateConfig = {
        attractor,
        material: {
          color: color,
          sizeParticle: config.sizeParticle,
          opacity: opacity,
        },
        parentNode: node,
        zoom: config.zoom,
        orbitConfig: {
          autoRotate: config.autoRotate,
        },
      };

      // start animation
      const animation = AnimationParticles(newConfig);

      setAnimation({ ...animation });

      // set stop animation
      animation.start();
      stop = animation.stop;
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
