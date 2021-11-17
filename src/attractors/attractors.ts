import ParticleSystem from "./attractor";
import { AizawaAttractorConfig } from "./aizawa.attractor";
import { LorenzAttractorConfig } from "./lorenz.attractor";

export type AttractorConfig = {
  particles: number;
  zoom: number;
  sizeParticle: number;
  autoRotate: boolean;
  description: string;
  speed: number;
};
export type AttractorAndConfig = {
  attractor: ParticleSystem;
  config: AttractorConfig;
};

export const ATTRACTORS: { [key: string]: AttractorAndConfig } = {
  lorenz: { ...LorenzAttractorConfig },
  aizawa: { ...AizawaAttractorConfig },
};
