import React from "react";
import styled from "styled-components";
import useSimulation from "../../../../hooks/useSimulation";

export const Btn = styled.button`
  height: 40px;
  cursor: pointer;
  border: none;
  padding: 0px 10px;
  margin-top: 20px;
`;

const ButtonBackGui = () => {
  const { setIsSelecting } = useSimulation();
  return (
    <Btn type="button" onClick={() => setIsSelecting(true)}>
      Change Simulation
    </Btn>
  );
};

export default ButtonBackGui;
