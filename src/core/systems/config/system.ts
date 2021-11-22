import { BufferGeometry, Float32BufferAttribute, Scene } from "three";

export type ParticleInParticleSystem = { [key: string]: number };
abstract class ParticleSystem {
  protected particles: Array<ParticleInParticleSystem> = [];
  public maxParticles: number = 0;
  protected geometry: BufferGeometry = new BufferGeometry();
  protected speed: number = 1;
  protected scene: Scene = new Scene();

  public abstract update(): void;
  protected abstract makeParticle(): ParticleInParticleSystem;

  public getParticlesNumber() {
    return this.particles.length;
  }

  protected validatePositiveNumber(value: number): boolean {
    return value >= 0 ? true : false;
  }

  public setGeometry(geometry: BufferGeometry): void {
    this.geometry = geometry;
    this.makeVertices();
  }

  public setSpeed(speed: number): void {
    this.speed = speed;
  }

  public changeSpeed(speed: number) {
    this.speed = speed;
  }

  public setMaxParticles(maxParticles: number): void {
    this.maxParticles = maxParticles;
  }

  public makeVertices(): void {
    const vertices: Array<any> = [];
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.makeParticle();
      this.particles.push(particle);
      vertices.push(particle.x, particle.y, particle.z);
    }
    this.updateGeometricParticles(vertices);
  }

  public changeMaxParticles(size: number): void {
    size = Number(size.toPrecision(1));
    if (this.validatePositiveNumber(size)) {
      if (size < this.maxParticles) {
        this.particles = this.particles.splice(this.maxParticles - size);
        this.setMaxParticles(this.particles.length);
        this.updateParticles();
      }
      if (size > this.maxParticles) {
        for (let i = 0; i < size; i++) {
          this.particles.push(this.makeParticle());
        }
        this.setMaxParticles(this.maxParticles + size);
        this.updateParticles();
      }
    }
  }

  private updateParticles() {
    const vertices = [];
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      vertices.push(particle.x, particle.y, particle.z);
    }
    this.updateGeometricParticles(vertices);
  }

  protected updateGeometricParticles(vertices: Array<number>) {
    this.geometry.setAttribute(
      "position",
      new Float32BufferAttribute(vertices, 3)
    );
  }

  protected random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public dispose() {
    this.geometry.dispose();
    this.geometry.deleteAttribute("position");
    this.particles = [];
    this.maxParticles = 0;
    this.speed = 1;
  }

  protected randomItemInArray(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
  }

  public setScene(scene: Scene) {
    this.scene = scene;
  }

  public setup() {}
}

export default ParticleSystem;
