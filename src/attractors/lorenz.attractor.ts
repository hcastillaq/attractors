import ParticleSystem from "./attractor";
import { AttractorAndConfig } from "./attractors";

class LorenzAttractor extends ParticleSystem {
  protected makeParticle() {
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
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.particles[i];
      const dx = particle.a * (particle.y - particle.x) * particle.dt;
      const dy =
        (particle.x * (particle.b - particle.z) - particle.y) * particle.dt;
      const dz =
        (particle.x * particle.y - particle.c * particle.z) * particle.dt;
      particle.x += dx * this.speed;
      particle.y += dy * this.speed;
      particle.z += dz * this.speed;
      if (this.geometry) {
        this.geometry.attributes.position.setXYZ(
          i,
          particle.x,
          particle.y,
          particle.z
        );
      }
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}

export const LorenzAttractorConfig: AttractorAndConfig = {
  attractor: new LorenzAttractor(),
  config: {
    particles: 1000000,
    zoom: 100,
    speed: 1,
    sizeParticle: 0.1,
    autoRotate: false,
    description: "",
  },
};

export default LorenzAttractor;
