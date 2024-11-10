import { GArtParticle, GArtSystem } from "particle-system";
import { SystemAndConfig } from "../../systems";

interface DadrasParticle extends GArtParticle {
  x: number;
  y: number;
  z: number;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  dt: number;
}
class DadrasAttractor extends GArtSystem<DadrasParticle> {
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
    particles: 3000000,
    speed: 1,
    zoom: 35,
    opacity: 0.2,
    sizeParticle: 0.01,
    autoRotate: true,
    description: "",
  },
};
export default DadrasAttractor;
