import React, { SyntheticEvent, useContext } from "react";
import styled from "styled-components";
import { SYSTEMS } from "../../core/systems/systems";
import { Context } from "../../context/context";

const Select = styled.select`
  height: 50px;
  cursor: pointer;
`;
const Input = styled.input`
  min-width: 120px;
  height: 50px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0px;
`;
const Form = styled.form`
  min-width: 260px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const H1 = styled.h1`
  &,
  span {
    font-size: 3rem;
  }
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  font-style: italic;
`;
const SelectAttractorStyled = styled.div`
  width: 100%;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SelectAttractor = () => {
  const { setSystem, setIsSelecting } = useContext(Context);

  const options = Object.keys(SYSTEMS).map((key) => ({
    name: SYSTEMS[key].name,
    value: key,
  }));
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const dataForm = new FormData(form);
    setSystem(dataForm.get("attractor") as string);
    setIsSelecting(false);
  };
  return (
    <SelectAttractorStyled>
      <H1>
        <span>Generative Art</span>
        <span>With Particles</span>
      </H1>
      <Form onSubmit={handleSubmit}>
        <Select placeholder="Select Attractor" name="attractor" required>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
        <Input type="submit" value="Simulate" />
      </Form>
    </SelectAttractorStyled>
  );
};

export default SelectAttractor;
