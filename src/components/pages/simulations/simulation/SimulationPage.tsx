"use client";

import {
  ParticleSystem,
  ParticleSystemAnimation,
  ParticleSystemAnimationCallbacks,
  ParticleSystemAnimationConfig,
} from "particle-system";
import { FC, useEffect, useRef, useState } from "react";
import { SYSTEMS } from "../../../../core/systems/systems";

import SimulationConfigGui from "./SimulationConfigGui/SimulationConfigGui";
import styles from "./SimulationPage.module.scss";

export const revalidate = 0;

interface Props {
  name: string;
}

const SimulationPage: FC<Props> = ({ name }) => {
  const ref = useRef(null);

  const [system, setSystem] = useState<ParticleSystem | undefined>(undefined);

  const [color, setColor] = useState("#00FFFF");
  const [opacity, setOpacity] = useState(0.5);
  const [speed, setSpeed] = useState(1);
  const [particles, setParticles] = useState(0);

  const [callbacks, setCallbacks] = useState<ParticleSystemAnimationCallbacks>({
    stop: () => {},
    start: () => {},
    changeColor: () => {},
    changeOpacity: () => {},
    takePhoto: () => {},
  });

  useEffect(() => {
    let stop = () => {};
    setSystem(undefined);

    if (ref.current) {
      const systemAndConfig = SYSTEMS[name];
      const systemConfig = systemAndConfig.config;
      const system = systemAndConfig.system;

      setSpeed(systemConfig.speed);
      setParticles(systemConfig.particles);
      setOpacity(systemConfig.opacity || 0.5);

      system.setParticlesNumber(systemConfig.particles);
      system.setSpeed(systemConfig.speed);

      setSystem(system);

      const container = ref.current! as HTMLElement;
      const config: ParticleSystemAnimationConfig = {
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

      const animationCallbacks = ParticleSystemAnimation(config);
      stop = animationCallbacks.stop;
      setCallbacks({ ...animationCallbacks });
      animationCallbacks.start();
    }

    return () => {
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    if (system) {
      system.setSpeed(speed);
      callbacks.changeOpacity(opacity);
      system.setParticlesNumber(particles);
      const numberColor = parseInt(color.replace("#", "0x"), 16);
      callbacks.changeColor(numberColor);
    }
  }, [opacity, speed, particles, color, system, callbacks]);

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
