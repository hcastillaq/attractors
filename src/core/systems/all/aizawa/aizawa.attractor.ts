import ParticleSystem from "../../config/system";
import { SystemAndConfig } from "../../systems";

class AizawaAttractor extends ParticleSystem {
  protected makeParticle() {
    return {
      x: 0.1,
      y: 1.0,
      z: 0.01,
      a: 0.95,
      b: 0.7,
      c: 0.6,
      d: 3.5,
      e: 0.25,
      f: 0.1,
      dt: this.random(0.01, 0.08),
    };
  }
  public update(): void {
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.particles[i];

      let dx = (particle.z - particle.b) * particle.x - particle.d * particle.y;
      let dy = particle.d * particle.x + (particle.z - particle.b) * particle.y;
      let dz =
        particle.c +
        particle.a * particle.z -
        Math.pow(particle.z, 3) / 3 -
        (Math.pow(particle.x, 2) + Math.pow(particle.y, 2)) *
          (1 + particle.e * particle.z) +
        particle.f * particle.z * Math.pow(particle.x, 3);

      dx *= particle.dt;
      dy *= particle.dt;
      dz *= particle.dt;

      particle.x += dx * this.speed;
      particle.y += dy * this.speed;
      particle.z += dz * this.speed;

      this.geometry.attributes.position.setXYZ(
        i,
        particle.x,
        particle.y,
        particle.z
      );
    }
  }
}

export default AizawaAttractor;

export const AizawaAttractorConfig: SystemAndConfig = {
  system: new AizawaAttractor(),
  name: "Aizawa Attractor",
  config: {
    particles: 200000,
    zoom: 4,
    speed: 1,
    sizeParticle: 0.013,
    autoRotate: true,
    description: "",
  },
};
