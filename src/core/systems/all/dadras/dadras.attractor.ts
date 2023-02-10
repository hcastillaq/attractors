import { ParticleSystem } from "particle-system";
import { SystemAndConfig } from "../../systems";

class DadrasAttractor extends ParticleSystem {
	make() {
		return {
			x: 1.1,
			y: 2.1,
			z: -2.0,
			a: 3,
			b: 2.7,
			c: 1.7,
			d: 2,
			e: 9,
			dt: this.random(0.005, 0.03),
		};
	}

	update() {
		for (let i = 0; i < this.numberParticles; i++) {
			const particle = this.particles[i];
			const dx =
				particle.y -
				particle.a * particle.x +
				particle.b * particle.y * particle.z;
			const dy = particle.c * particle.y - particle.x * particle.z + particle.z;
			const dz = particle.d * particle.x * particle.y - particle.e * particle.z;

			particle.x += dx * particle.dt * this.speed;
			particle.y += dy * particle.dt * this.speed;
			particle.z += dz * particle.dt * this.speed;

			this.apply(i, particle.x, particle.y, particle.z);
		}
	}
}

export const DadrasAttractorConfig: SystemAndConfig = {
	system: new DadrasAttractor(),
	name: "Dadras Attractor",
	config: {
		particles: 2000000,
		speed: 1,
		zoom: 25,
		sizeParticle: 0.02,
		autoRotate: true,
		description: "",
	},
};
export default DadrasAttractor;
