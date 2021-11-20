import ParticleSystem from "./config/system";
import { AizawaAttractorConfig } from "./all/aizawa/aizawa.attractor";
import { LorenzAttractorConfig } from "./all/lorenz/lorenz.attractor";
import { ThomasAttractorConfig } from "./all/thomas/thomas.attractor";
import { DadrasAttractorConfig } from "./all/dadras/dadras.attractor";
import { ChenAttractorConfig } from "./all/chen/chen.attractor";
import { SimplePendulumAndConfig } from "./all/simplePendulum/simplePendulum";

export type SystemConfig = {
  particles: number;
  zoom: number;
  sizeParticle: number;
  autoRotate: boolean;
  description?: string;
  speed: number;
};
export type SystemAndConfig = {
  name: string;
  system: ParticleSystem;
  config: SystemConfig;
};

export const SYSTEMS: { [key: string]: SystemAndConfig } = {
  lorenz: { ...LorenzAttractorConfig },
  aizawa: { ...AizawaAttractorConfig },
  thomas: { ...ThomasAttractorConfig },
  dadras: { ...DadrasAttractorConfig },
  chen: { ...ChenAttractorConfig },
  simplePendulum: { ...SimplePendulumAndConfig },
};
