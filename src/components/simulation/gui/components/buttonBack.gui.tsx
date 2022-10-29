import styled from "styled-components";
import useSimulation from "../../../../hooks/useSimulation";

export const Btn = styled.button`
  height: 50px;
  cursor: pointer;
  border: none;
  padding: 0px 10px;
  margin-top: 10px;
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
