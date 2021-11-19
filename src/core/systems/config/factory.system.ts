import { SystemAndConfig, SYSTEMS } from "../systems";

class FactorySystem {
  private static instance: FactorySystem;
  public constructor() {
    if (!FactorySystem.instance) {
      FactorySystem.instance = this;
    }
    return FactorySystem.instance;
  }
  get(name: string): SystemAndConfig {
    if (!SYSTEMS.hasOwnProperty(name)) {
      throw new Error(`System ${name} not found`);
    }
    return SYSTEMS[name];
  }
}

const FactorySystemInstance = new FactorySystem();
export default FactorySystemInstance;
