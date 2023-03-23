import { ParticleSystem } from "particle-system";
import { AizawaAttractorConfig } from "./all/aizawa/aizawa.attractor";
import { ChenAttractorConfig } from "./all/chen/chen.attractor";
import { DadrasAttractorConfig } from "./all/dadras/dadras.attractor";
import { LorenzAttractorConfig } from "./all/lorenz/lorenz.attractor";
import { SimplePendulumAndConfig } from "./all/simplePendulum/simplePendulum";
import { SphericalPendulumAndConfig } from "./all/spherical-pendulum/speherical-pendulum";
import { ThomasAttractorConfig } from "./all/thomas/thomas.attractor";

export type SystemConfig = {
	particles: number;
	zoom: number;
	sizeParticle: number;
	autoRotate: boolean;
	description?: string;
	speed: number;
	opacity?: number;
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
	sphericalPendulum: { ...SphericalPendulumAndConfig },
};
