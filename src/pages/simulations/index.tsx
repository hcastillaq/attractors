import HeadSeo, { defaultMeta } from "../../components/seo/Head";
import SelectAttractor from "../../components/simulation/SelectAttractor";
import SimulationStyles from "../../components/simulation/simulation.styles";

const Simulations = () => {
	return (
		<>
			<HeadSeo
				meta={{
					...defaultMeta,
					title: `${defaultMeta.title} - Simulations`,
				}}
			/>
			<SimulationStyles>
				<SelectAttractor />
			</SimulationStyles>
		</>
	);
};

export default Simulations;
