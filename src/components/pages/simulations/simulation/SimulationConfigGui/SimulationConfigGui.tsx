"use client";

import { useRouter } from "next/navigation";
import { FC, useRef, useState } from "react";
import styles from "./SimulationConfigGui.module.scss";

interface Props {
  color: string;
  setColor: (color: string) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  particles: number;
  setParticles: (particles: number) => void;
  takeAPhoto: () => void;
}

const SimulationConfigGui: FC<Props> = ({
  color,
  setColor,
  opacity,
  setOpacity,
  speed,
  setSpeed,
  particles,
  setParticles,
  takeAPhoto,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const colorRef = useRef<HTMLInputElement>(null);

  const changeSimulation = () => {
    router.push("/simulations");
  };

  return (
    <div className={styles.gui}>
      <div className="flex justify-end">
        <button onClick={toggle}>⚙️</button>
      </div>
      {isOpen ? (
        <div className={`flex flex-col gap-4  ${styles.options}`}>
          <span>Configuration</span>

          <div className="flex items-center gap-2">
            <span className="text-xs">Color</span>
            <div
              className="rounded-full overflow-hidden flex 
            justify-center items-center bg-red-50 h-5 w-5 cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => {
                colorRef.current?.click();
              }}
            >
              <input
                ref={colorRef}
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="opacity-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs">Number of particles</span>
            <input
              className="text-black p-1 text-md"
              type="number"
              value={particles}
              onChange={(e) => {
                setParticles(Number(e.target.value));
              }}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs">Opacity: {opacity}</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.01"
              value={opacity}
              onChange={(e) => {
                setOpacity(parseFloat(e.target.value));
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs">Speed: {speed}</span>
            <input
              type="range"
              min="0"
              max="2"
              step="0.01"
              value={speed}
              onChange={(e) => {
                setSpeed(parseFloat(e.target.value));
              }}
            />
          </div>

          <div>
            <button
              className="bg-white text-black rounded-lg w-full text-center p1"
              type="button"
              onClick={() => {
                takeAPhoto();
              }}
            >
              Take a photo 📷
            </button>
          </div>

          <button
            className="bg-white text-black rounded-lg w-full text-center p1 "
            type="button"
            onClick={() => {
              changeSimulation();
            }}
          >
            Change simulation
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SimulationConfigGui;
