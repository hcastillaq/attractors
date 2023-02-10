import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import styled from "styled-components";
import { SIMULATIONS } from "../../db/simulations";

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
    font-size: clamp(2.5rem, 1vw, 3rem);
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
	const router = useRouter();
	const options = Object.keys(SIMULATIONS).map((key) => ({
		name: SIMULATIONS[key].title,
		value: key,
	}));
	const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const dataForm = new FormData(form);
		const attractor = dataForm.get("attractor");
		router.push(`/simulations/${attractor}`);
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
