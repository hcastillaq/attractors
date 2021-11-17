import { AttractorAndConfig, ATTRACTORS } from "../config/attractors";

class FactoryAttractor {
  private static instance: FactoryAttractor;
  public constructor() {
    if (!FactoryAttractor.instance) {
      FactoryAttractor.instance = this;
    }
    return FactoryAttractor.instance;
  }
  get(name: string): AttractorAndConfig {
    if (!ATTRACTORS.hasOwnProperty(name)) {
      throw new Error(`Attractor ${name} not found`);
    }
    return ATTRACTORS[name];
  }
}

const FactoryAttractorInstance = new FactoryAttractor();
export default FactoryAttractorInstance;
