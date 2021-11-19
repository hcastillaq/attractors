import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useSimulation from "../../hooks/useSimulation";
import {
  AnimationParticles,
  AnimationParticlesCallBacks,
  SystemAnimateConfig,
} from "../../core/threejs/config.threejs";
import AttractorGui from "./gui/attractorGui";

const AttractorContainer = styled.div`
  cursor: crosshair;
`;

const SimulationContainer = () => {
  const { system, config, color, setAnimation, opacity } = useSimulation();
  const ref = useRef(null);

  useEffect(() => {
    let stop = () => {};
    if (ref.current) {
      // config attractor
      system.setMaxParticles(config.particles);
      system.setSpeed(config.speed);

      //config for animation
      const node: HTMLElement = ref.current as HTMLElement;
      const newConfig: SystemAnimateConfig = {
        system,
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
