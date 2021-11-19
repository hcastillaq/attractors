import particle from "../../../particles/particle";
import { AttractorAndConfig } from "../../systems";
import ParticleSystem from "../../config/attractor";

class DadrasAttractor extends ParticleSystem {
  makeParticle() {
    const particle = {
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

    return particle;
  }

  update() {
    for (let i = 0; i < this.maxParticles; i++) {
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

      this.geometry.attributes.position.setXYZ(
        i,
        particle.x,
        particle.y,
        particle.z
      );
    }
  }
}

export const DadrasAttractorConfig: AttractorAndConfig = {
  attractor: new DadrasAttractor(),
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
