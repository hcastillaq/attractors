import { useContext } from "react";
import { Context } from "../context/context";
import FactorySystemInstance from "../core/systems/config/factory.system";

const useSimulation = () => {
	const context = useContext(Context);
	const { system, config } = FactorySystemInstance.get(context.system);
	const color = 0x00ffff;
	const opacity = config.opacity || 0.5;
	const systemName = context.system;
	return { ...context, system, config, systemName, color, opacity };
};

export default useSimulation;
