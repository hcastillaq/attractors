type ParticleVector = [number, number, number];

type ParticleConfig = {
  position: ParticleVector;
  forces: ParticleVector;
  mass: number;
  time: number;
  [key: string]: unknown;
};

type OptionalsParticleConfig = {
  [key in keyof ParticleConfig]?: ParticleConfig[key];
};

class Particle {
  public config: ParticleConfig = {
    position: [0, 0, 0],
    forces: [0, 0, 0],
    mass: 1,
    time: 1,
  };

  public constructor(config: OptionalsParticleConfig | undefined = undefined) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  public setTime(time: number) {
    this.config.time = time;
  }

  public setMass(mass: number): void {
    this.config.mass = mass;
  }

  public move(time: number = this.config.time): void {
    const newPosition: ParticleVector = [0, 0, 0];
    this.config.position.forEach((_: number, index: number) => {
      const newPos = (this.config.forces[index] / this.config.mass) * time;
      newPosition[index] = newPos;
    });
    this.config.position = newPosition;
  }

  public addForces(forces: ParticleVector) {
    forces.forEach((force: number, index: number) => {
      this.config.forces[index] += force;
    });
  }

  public setForces(forces: ParticleVector): void {
    this.config.forces = forces;
  }

  public getX(): number {
    return this.config.position[0];
  }

  public getY(): number {
    return this.config.position[0];
  }

  public getZ(): number {
    return this.config.position[0];
  }

  public getXYZ(): number[] {
    return this.config.position;
  }
}

export default Particle;
