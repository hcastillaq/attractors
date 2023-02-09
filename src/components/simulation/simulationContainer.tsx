import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GuiContext } from "../../context/guiContext";
import {
	AnimationParticles,
	SystemAnimateConfig,
} from "../../core/threejs/config.threejs";
import useSimulation from "../../hooks/useSimulation";
import AttractorGui from "./gui/attractorGui";

const AttractorContainer = styled.div`
  cursor: crosshair;
`;

const ShowGui = styled.button`
  top: 10px;
  right: 20px;
  position: absolute;
  background-color: transparent;
  border: none;
`;
const SimulationContainer = () => {
	const { system, config, color, setAnimation, opacity } = useSimulation();
	const ref = useRef(null);
	const [showGui, setShowGui] = useState<boolean>(false);

	const [color_, setColor] = useState(color);
	const [opacity_, setOpacity] = useState(opacity);
	const [particles, setParticles] = useState(config.particles);
	const [speed, setSpeed] = useState(config.speed);

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
			<ShowGui
				onClick={() => {
					setShowGui(!showGui);
				}}
			>
				⚙️
			</ShowGui>
			<GuiContext.Provider
				value={{
					color: color_,
					setColor,
					opacity: opacity_,
					setOpacity,
					particles,
					setParticles,
					speed,
					setSpeed,
				}}
			>
				{showGui ? <AttractorGui /> : null}
			</GuiContext.Provider>
			<AttractorContainer ref={ref} />
		</div>
	);
};

export default SimulationContainer;
