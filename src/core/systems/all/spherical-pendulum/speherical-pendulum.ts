import { ParticleSystem } from "particle-system";
import { SystemAndConfig } from "../../systems";

class SphericalPendulum extends ParticleSystem {
	private l = [100, 200, 300, 400];

	make() {
		return {
			x: 0,
			y: 0,
			z: 0,
			l: this.randomItemInArray(this.l),
			a1: this.random(-Math.PI / 2, Math.PI / 2),
			a2: this.random(-Math.PI, Math.PI),
			av1: 0,
			av2: 0,
			g: 0.01,
		};
	}

	update() {
		for (let i = 0; i < this.numberParticles; i++) {
			const particle = this.particles[i];
			const { l, a1, a2, g, av1, av2 } = particle;

			particle.x = l * Math.sin(a1) * Math.cos(a2);
			particle.y = l * Math.sin(a1) * Math.sin(a2);
			particle.z = l * Math.cos(a1);

			const aa1 =
				Math.sin(a1) * Math.cos(a2) * av1 ** 2 - (g * Math.sin(a1)) / l;

			const aa2 = (-2 * av1 * av2 * Math.cos(a1)) / Math.sin(a1);

			particle.av1 += aa1;
			particle.av2 += aa2;

			particle.a1 += particle.av1;
			particle.a2 += particle.av2;

			this.apply(i, particle.x, particle.y, particle.z);
		}
	}
	private randomItemInArray(array: any[]): any {
		return array[Math.floor(Math.random() * array.length)];
	}
}

export const SphericalPendulumAndConfig: SystemAndConfig = {
	name: "Spherical Pendulum",
	system: new SphericalPendulum(),
	config: {
		particles: 300000,
		zoom: 1200,
		speed: 1,
		sizeParticle: 2,
		autoRotate: false,
		description: "",
	},
};

export default SphericalPendulum;
