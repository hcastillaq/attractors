import GoSimulate from "../../components/buttons/goSimulate";
import Code from "../../components/code/Code";
import HeadSeo from "../../components/seo/Head";
const LorenzSimulations = () => {
	const seo = {
		title: "Lorenz Attractor",
		description:
			"The Lorenz system is a system of ordinary differential equations first studied by Edward Lorenz. It is notable for having chaotic solutions for certain parameter values and initial conditions.",
	};
	return (
		<div className="container">
			<HeadSeo title={seo.title} description={seo.description} />
			<div className="flex center">
				<GoSimulate text="Go Simulation" name="lorenz" />
			</div>
			<h1>Lorenz Attractor</h1>
			<div>
				More information in{" "}
				<a
					href="\\wikipedia.org/wiki/Lorenz_system"
					target="_blank"
					className="link"
					rel="noreferrer"
				>
					wikipedia
				</a>
			</div>
			<br />
			<h2>Formule</h2>
			<div className="formule flex column">
				<span>dx/dt = a(y-x)</span>
				<span>dy/dt = (c-a)x - xz + cy</span>
				<span>dz/dt = xy - bz</span>
				<span>a= 10, b= 39.99, c= 8 / 3 </span>
				<span>Initial values: x=1 ; y=1 ; z=1</span>
			</div>
			<h3>Tips And Codes</h3>
			<p>
				{" "}
				For this simulation i used a dt variation between 0.001 - 0.005 for
				every particle, the simulation move 1000000 of particles without
				problems.
			</p>
			<br />
			<h4> Make a particle</h4>
			<Code>
				{`const particle = {
  x: 1,y: 1,z: 1,
  a: 10,b: 39.99,c: 8 / 3,
  dt: this.random(0.001, 0.005)
};`}
			</Code>
			<br />

			<h4>Update a Particle</h4>
			<p>
				speed is a variable that can be changed to make the simulation faster o
				slow, speed = 1 is the normal speed.
			</p>
			<Code>
				{`
const dx = particle.a * (particle.y - particle.x) * particle.dt;
const dy =
(particle.x * (particle.b - particle.z) - particle.y) * particle.dt;
const dz =
(particle.x * particle.y - particle.c * particle.z) * particle.dt;
particle.x += dx * this.speed;
particle.y += dy * this.speed;
particle.z += dz * this.speed;
`}
			</Code>
		</div>
	);
};

export default LorenzSimulations;
