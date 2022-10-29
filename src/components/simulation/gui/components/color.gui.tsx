import { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import useSimulation from "../../../../hooks/useSimulation";

const BtnColor = styled.input`
  height: 30px;
  width: 30px !important;
  padding: 0px !important;
  overflow: hidden;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ColorGui = () => {
  const initialColor = useSimulation().color;
  const animation = useSimulation().animation;
  let idDebounce: any;

  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(numberToString(initialColor));
  }, []);

  const stringToNumber = (color: string): number => {
    if (color.length === 7 && color.includes("#")) {
      const newColor = "0x" + color.split("#")[1];
      return parseInt(newColor);
    }
    return 0xffffff;
  };

  const numberToString = (color: number) => {
    return "#" + color.toString(16).padStart(6, "0");
  };

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    clearTimeout(idDebounce);
    idDebounce = setTimeout(() => {
      animation.changeColor(stringToNumber(value));
      setColor(value);
    }, 500);
  };

  return (
    <div className="flex justify-end items-center">
      <span className="mr1">{color}</span>
      <BtnColor type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorGui;
