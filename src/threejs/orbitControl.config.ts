import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type OrbitControlConfig = {
  enableDamping?: boolean;
  dampingFactor?: number;
  enableZoom?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

const defaultConfig: OrbitControlConfig = {
  enableDamping: true,
  dampingFactor: 0.25,
  enableZoom: true,
  autoRotate: false,
  autoRotateSpeed: 0.5,
};
export const getOrbitControl = (
  camera: PerspectiveCamera,
  element: HTMLElement,
  config: OrbitControlConfig | undefined
): OrbitControls => {
  config = config ? config : defaultConfig;
  const controls: OrbitControls = new OrbitControls(camera, element);
  controls.enableDamping = config.enableDamping || true;
  controls.dampingFactor = config.dampingFactor || 0.25;
  controls.enableZoom = config.enableZoom || true;
  controls.autoRotate = false;
  controls.autoRotateSpeed = config.autoRotateSpeed || 0.3;
  return controls;
};
