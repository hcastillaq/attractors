import { BufferGeometry, Line, Points, PointsMaterial, Shape } from "three";
import ParticleSystem from "../systems/config/attractor";
import { CAMERA, RENDERER, SCENE } from "./globals.three";
import { getOrbitControl, OrbitControlConfig } from "./orbitControl.config";
import Stats from "three/examples/jsm/libs/stats.module";

export type AttractorAnimateConfig = {
  attractor: ParticleSystem;
  material: {
    color: number;
    opacity?: number;
    sizeParticle: number;
  };
  parentNode: HTMLElement;
  zoom: number;
  orbitConfig?: OrbitControlConfig;
};

export type AnimationParticlesCallBacks = {
  start: () => void;
  stop: () => void;
  changeColor: (color: number) => void;
  changeOpacity: (opacity: number) => void;
};

export const AnimationParticles = function (
  config: AttractorAnimateConfig
): AnimationParticlesCallBacks {
  // render element in the DOM
  config.parentNode.appendChild(RENDERER.domElement);

  //stats
  const stats = Stats();
  config.parentNode.appendChild(stats.domElement);

  //OrbitControl configuration
  const controls = getOrbitControl(
    CAMERA,
    RENDERER.domElement,
    config.orbitConfig
  );
  CAMERA.position.z = config.zoom;

  // geometry
  const geometry = new BufferGeometry();
  const material = new PointsMaterial({
    transparent: true,
    opacity: config.material.opacity || 0.7,
    size: config.material.sizeParticle,
    color: config.material.color,
  });

  config.attractor.setGeometry(geometry);

  // Points
  const points = new Points(geometry, material);
  SCENE.add(points);

  // Resize
  const resize = () => {
    CAMERA.aspect = window.innerWidth / window.innerHeight;
    CAMERA.updateProjectionMatrix();
    RENDERER.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", resize, false);

  //rotate
  const rotate = () => {
    if (config.orbitConfig?.autoRotate) {
      SCENE.rotateX(((-90 * Math.PI) / 180) * 0.001);
      SCENE.rotateY(((90 * Math.PI) / 180) * 0.001);
    }
  };

  //change color
  const changeColor = (color: number) => {
    material.color.set(color);
  };

  // change opacity
  const changeOpacity = (opacity: number) => {
    material.opacity = opacity;
  };

  // animation stop
  let idAnimation: number;
  const stopAnimation = () => {
    cancelAnimationFrame(idAnimation);
    points.geometry.dispose();
    points.material.dispose();
    controls.dispose();
    RENDERER.clear();
    CAMERA.position.set(0, 0, 0);
    CAMERA.lookAt(0, 0, 0);
    CAMERA.clear();
    SCENE.rotation.set(0, 0, 0);
    SCENE.remove(points);
    SCENE.remove(CAMERA);
    SCENE.clear();
    config.attractor.dispose();
    window.removeEventListener("resize", resize, false);
    console.log("stop animations");
  };

  //animate
  const animate = () => {
    idAnimation = requestAnimationFrame(animate);
    config.attractor.update();
    rotate();
    controls.update();
    RENDERER.render(SCENE, CAMERA);
    stats.update();
  };

  return {
    start: animate,
    stop: stopAnimation,
    changeColor,
    changeOpacity,
  };
};
