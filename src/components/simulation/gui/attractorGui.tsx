import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { InputGui, ItemGui } from "./styles.gui";
import ParticlesGui from "./components/particles.gui";
import ButtonBackGui from "./components/buttonBack.gui";
import SpeedGiu from "./components/speed.gui";
import ColorGui from "./components/color.gui";
import OpacityGiu from "./components/opacity.gui";
import TakePhoto from "./components/takePhoto.gui";

const AttractorGuiStyles = styled.div`
  width: 300px;
  position: absolute;
  top: 10px;
  right: 30px;
  display: flex;
  flex-direction: column;
  background-color: #00000071;
  padding: 20px;
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
