import styled from "styled-components";
import ButtonBackGui from "./components/buttonBack.gui";
import ColorGui from "./components/color.gui";
import OpacityGiu from "./components/opacity.gui";
import ParticlesGui from "./components/particles.gui";
import SpeedGiu from "./components/speed.gui";
import TakePhoto from "./components/takePhoto.gui";

const AttractorGuiStyles = styled.div`
  width: 20vw;
  max-width: 200px;
  min-width: 180px;
  padding: 20px;
  height: fit-content;
  position: absolute;
  top: 60px;
  right: 30px;
  display: flex;
  flex-direction: column;
  background-color: #20202088;
  overflow: hidden;
`;

const AttractorGui = () => {
  return (
    <AttractorGuiStyles>
      <ColorGui />
      <ParticlesGui />
      <SpeedGiu />
      <OpacityGiu />
      <TakePhoto />
      <ButtonBackGui />
    </AttractorGuiStyles>
  );
};

export default AttractorGui;
