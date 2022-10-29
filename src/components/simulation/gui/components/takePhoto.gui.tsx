import useSimulation from "../../../../hooks/useSimulation";
import { InputGui, ItemGui } from "../styles.gui";

const TakePhoto = () => {
  const { animation } = useSimulation();
  const handleClick = () => {
    animation.takePhoto();
  };
  return (
    <ItemGui>
      <InputGui type="button" value="Take  Photo" onClick={handleClick} />
    </ItemGui>
  );
};

export default TakePhoto;
