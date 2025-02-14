import { GArtParticle, GArtSystem } from "particle-system";
import { SystemAndConfig } from "../../systems";

interface LorenzParticle extends GArtParticle {
  x: number;
  y: number;
  z: number;
  a: number;
  b: number;
  c: number;
  dt: number;
}

class LorenzAttractor extends GArtSystem<LorenzParticle> {
  make() {
    return {
      x: 1,
      y: 1,
      z: 1,
      a: 10,
      b: 39.99,
      c: 8 / 3,
      dt: this.random(0.001, 0.005),
    };
  }
  public update(): void {
    for (let i = 0; i < this.numberParticles; i++) {
      const particle = this.particles[i];
      const dx = particle.a * (particle.y - particle.x) * particle.dt;
      const dy =
        (particle.x * (particle.b - particle.z) - particle.y) * particle.dt;
      const dz =
        (particle.x * particle.y - particle.c * particle.z) * particle.dt;
      particle.x += dx * this.speed;
      particle.y += dy * this.speed;
      particle.z += dz * this.speed;
      this.apply(i, particle.x, particle.y, particle.z);
    }
  }
}

export const LorenzAttractorConfig: SystemAndConfig = {
  system: new LorenzAttractor(),
  name: "Lorenz Attractor",
  config: {
    particles: 4000000,
    zoom: 150,
    speed: 1,
    sizeParticle: 0.01,
    autoRotate: false,
    description: "",
    opacity: 0.1,
  },
};

export default LorenzAttractor;
