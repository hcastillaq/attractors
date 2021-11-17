import FactoryAttractorInstance from "./attractors/factory.attractor";
import "./css/style.css";
import {
  AttractorAnimateConfig,
  startAttractorAnimate,
} from "./threejs/config.threejs";

const { attractor, config } = FactoryAttractorInstance.get("aizawa");
const PARTICLES = config.particles;
attractor.setMaxParticles(PARTICLES);
attractor.setSpeed(config.speed);

const configAnimation: AttractorAnimateConfig = {
  attractor,
  zoom: config.zoom,
  material: {
    color: 0x00ffff,
    sizeParticle: config.sizeParticle,
    opacity: 0.7,
  },
  orbitConfig: {
    autoRotate: config.autoRotate,
  },
  parentNode: document.getElementById("app") as HTMLElement,
};

// build Attractor
startAttractorAnimate(configAnimation);
