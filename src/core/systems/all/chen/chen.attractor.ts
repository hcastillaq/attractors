import { GArtParticle, GArtSystem } from "particle-system";
import { SystemAndConfig } from "../../systems";

interface ChenAttractorParticle extends GArtParticle {
  x: number;
  y: number;
  z: number;
  dt: number;
  a: number;
  b: number;
  c: number;
}
class ChenAttractor extends GArtSystem<ChenAttractorParticle> {
  make() {
    return {
      x: 5,
      y: 10,
      z: 10,
      dt: this.random(0.001, 0.01),
      a: 5,
      b: -10,
      c: -38,
    };
  }

  update() {
    for (let i = 0; i < this.numberParticles; i++) {
      const particle = this.particles[i];

      const dx = particle.a * particle.x - particle.y * particle.z;
      const dy = particle.b * particle.y + particle.x * particle.z;
      const dz = particle.c * particle.z + (particle.x * particle.y) / 3;

      particle.x += dx * particle.dt * this.speed;
      particle.y += dy * particle.dt * this.speed;
      particle.z += dz * particle.dt * this.speed;

      this.apply(i, particle.x, particle.y, particle.z);
    }
  }
}

export const ChenAttractorConfig: SystemAndConfig = {
  system: new ChenAttractor(),
  name: "Chen  Attractor",
  config: {
    particles: 3000000,
    zoom: 250,
    speed: 1,
    opacity: 0.2,
    sizeParticle: 0.01,
    autoRotate: true,
    description: "",
  },
};

export default ChenAttractor;
