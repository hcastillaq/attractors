"use client";

import { FC, useEffect, useRef, useState } from "react";
import { SYSTEMS } from "../../../core/systems/systems";

import {
  GArt,
  GArtCallbacks,
  GArtConfig,
  GArtParticle,
  GArtSystem,
} from "particle-system";
import SimulationConfigGui from "./SimulationConfigGui/SimulationConfigGui";
import styles from "./SimulationPage.module.scss";

export const revalidate = 0;

interface Props {
  name: string;
}

const SimulationPage: FC<Props> = ({ name }) => {
  const ref = useRef(null);

  const [system, SetSystem] = useState<GArtSystem<GArtParticle> | undefined>(
    undefined
  );

  const [color, setColor] = useState("#00FFFF");
  const [opacity, setOpacity] = useState(0.5);
  const [speed, setSpeed] = useState(1);
  const [particles, setParticles] = useState(0);

  const [callbacks, setCallbacks] = useState<GArtCallbacks>({
    stop: () => {},
    start: () => {},
    changeColor: () => {},
    changeOpacity: () => {},
    takePhoto: () => {},
  });

  const loadSimulation = () => {
    const systemAndConfig = SYSTEMS[name];
    const systemConfig = systemAndConfig.config;
    const system = systemAndConfig.system;

    setSpeed(systemConfig.speed);
    setParticles(systemConfig.particles);
    setOpacity(systemConfig.opacity || 0.5);

    system.setParticlesNumber(systemConfig.particles);
    system.setSpeed(systemConfig.speed);

    const container = ref.current! as HTMLElement;
    const config: GArtConfig = {
      system: system,
      container,
      stats: true,
      material: {
        opacity: opacity,
        sizeParticle: systemConfig.sizeParticle,
        color: color,
      },
      zoom: systemConfig.zoom,
      orbitConfig: {
        autoRotate: systemConfig.autoRotate,
      },
    };

    SetSystem(system);

    const gart = new GArt(config);
    const animationCallbacks = gart.load();
    return animationCallbacks;
  };

  useEffect(() => {
    let stop = () => {};
    if (ref.current) {
      const animationCallbacks = loadSimulation();
      stop = animationCallbacks.stop;
      setCallbacks({ ...animationCallbacks });
      animationCallbacks.start();
    }
    return () => {
      // remove all content from ref
      if (ref.current) {
        const container = ref.current! as HTMLElement;
        container.innerHTML = "";
      }
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    if (system) {
      system.setSpeed(speed);
      callbacks.changeOpacity(opacity);
      system.setParticlesNumber(particles);
      const numberColor = GArt.convertColorStringToNumber(color);
      callbacks.changeColor(numberColor);
    }
  }, [opacity, speed, particles, color, callbacks, system]);

  return (
    <div className={styles.simulation}>
      <SimulationConfigGui
        color={color}
        setColor={setColor}
        opacity={opacity}
        setOpacity={setOpacity}
        speed={speed}
        setSpeed={setSpeed}
        particles={particles}
        setParticles={setParticles}
        takeAPhoto={callbacks.takePhoto}
      />

      <div ref={ref}></div>
    </div>
  );
};

export default SimulationPage;
