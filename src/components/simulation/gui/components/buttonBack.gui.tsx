import Link from "next/link";
import styled from "styled-components";

export const Btn = styled.button`
width: 100%;
  height: 50px;
  cursor: pointer;
  border: none;
  padding: 0px 10px;
  margin-top: 10px;
`;

const ButtonBackGui = () => {
	return (
		<Link passHref href='/simulations'>
			<Btn type="button">Change Simulation</Btn>
		</Link>
	);
};

export default ButtonBackGui;
