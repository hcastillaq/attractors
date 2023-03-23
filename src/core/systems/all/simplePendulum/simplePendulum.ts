import { ParticleSystem } from "particle-system";
import { SystemAndConfig } from "../../systems";

class SimplePendulum extends ParticleSystem {
	private l = [50, 100, 150, 200];
	make() {
		return {
			x: 0,
			y: 0,
			z: 0,
			l: this.randomItemInArray(this.l),
			angle: this.random(-Math.PI / 2, Math.PI / 2),
			angle2: this.random(-Math.PI, Math.PI),
			angleV: 0,
			g: 0.005,
		};
	}

	update() {
		for (let i = 0; i < this.numberParticles; i++) {
			const particle = this.particles[i];
			particle.x = particle.l * Math.sin(particle.angle);
			particle.y = -particle.l * Math.cos(particle.angle) + 150;
			particle.z = particle.l * Math.cos(particle.angle2);
			const anularAcceleration =
				-(particle.g / particle.l) * Math.sin(particle.angle);

			particle.angleV += anularAcceleration;
			particle.angle += particle.angleV;
			this.apply(i, particle.x, particle.y, particle.z);
		}
	}

	private randomItemInArray(array: any[]): any {
		return array[Math.floor(Math.random() * array.length)];
	}
}

export const SimplePendulumAndConfig: SystemAndConfig = {
	name: "Simple Pendulum",
	system: new SimplePendulum(),
	config: {
		particles: 1000000,
		zoom: 700,
		speed: 1,
		opacity: 0.15,
		sizeParticle: 0.01,
		autoRotate: true,
		description: "",
	},
};

export default SimplePendulum;
