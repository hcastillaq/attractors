import HeadSeo from "../components/seo/Head";
import Simulation from "../components/simulation/simulation";

export default () => {
	const seo = {
		title: "Simulator",
		description: `Here find you multiples simulations where you watch the movement of many
    particles, expressed for mathematical equations or physics phenomenons.`,
	};
	return (
		<>
			<HeadSeo title={seo.title} description={seo.description} />
			<Simulation />
		</>
	);
};
