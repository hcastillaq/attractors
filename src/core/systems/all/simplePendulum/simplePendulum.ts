import ParticleSystem from "../../config/system";
import { SystemAndConfig } from "../../systems";

class SimplePendulum extends ParticleSystem {
  private l = [50, 100, 150, 200];
  makeParticle() {
    return {
      x: 0,
      y: 0,
      z: 0,
      l: this.l[Math.floor(Math.random() * this.l.length)],
      angle: this.random(-Math.PI / 2, Math.PI / 2),
      angle2: this.random(-Math.PI, Math.PI),
      angleV: 0,
      g: 0.005,
    };
  }

  update() {
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.particles[i];
      particle.x = particle.l * Math.sin(particle.angle);
      particle.y = -particle.l * Math.cos(particle.angle) + 150;
      particle.z = particle.l * Math.cos(particle.angle2);
      const anularAcceleration =
        -(particle.g / particle.l) * Math.sin(particle.angle);

      particle.angleV += anularAcceleration;
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
    particles: 200000,
    zoom: 700,
    speed: 1,
    sizeParticle: 1,
    autoRotate: true,
    description: "",
  },
};

export default SimplePendulum;
