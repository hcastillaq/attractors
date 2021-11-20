import ParticleSystem from "../../config/system";
import { SystemAndConfig } from "../../systems";

class SimplePendulum extends ParticleSystem {
  makeParticle() {
    return {
      x: 0,
      y: 0,
      z: 0,
      l: this.random(0.1, 2),
      angle: this.random(-Math.PI / 2, Math.PI / 2),
      angleV: 0,
      g: 0.001,
    };
  }

  update() {
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.particles[i];
      particle.x = particle.l * Math.sin(particle.angle);
      particle.y = -particle.l * Math.cos(particle.angle) + 0.99;
      const angleA = -(particle.g / particle.l) * Math.sin(particle.angle);
      particle.angleV += angleA;
      particle.angle += particle.angleV;
      this.geometry.attributes.position.setXYZ(
        i,
        particle.x,
        particle.y,
        particle.z
      );
    }
  }
}

export const SimplePendulumAndConfig: SystemAndConfig = {
  name: "Simple Pendulum",
  system: new SimplePendulum(),
  config: {
    particles: 500000,
    zoom: 3,
    speed: 1,
    sizeParticle: 0.003,
    autoRotate: false,
    description: "",
  },
};

export default SimplePendulum;
