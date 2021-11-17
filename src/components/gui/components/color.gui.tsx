import React, { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import useSimulation from "../../../hooks/useSimulation";
import { InputGui, ItemGui } from "../styles.gui";

const BtnColor = styled(InputGui)`
  height: 40px;
  width: 40px;
  padding: 0px;
  overflow: hidden;
`;

const ColorGuiStyles = styled(ItemGui)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ColorGui = () => {
  const initialColor = useSimulation().color;
  const animation = useSimulation().animation;
  let idDebounce: number;

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
    <ColorGuiStyles>
      <BtnColor type="color" value={color} onChange={handleChange} />
      {color}
    </ColorGuiStyles>
  );
};

export default ColorGui;
