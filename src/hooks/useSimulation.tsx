import { useContext } from "react";
import { Context } from "../context/context";
import FactorySystemInstance from "../core/systems/config/factory.system";

const useSimulation = () => {
	const context = useContext(Context);
	const color = 0x00ffff;
	const opacity = 0.5;
	const systemName = context.system;
	const { system, config } = FactorySystemInstance.get(context.system);
	return { ...context, system, config, systemName, color, opacity };
};

export default useSimulation;
