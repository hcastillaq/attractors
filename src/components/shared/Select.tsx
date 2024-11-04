import { PropsWithChildren } from "react";

interface Props
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    PropsWithChildren {}

const Select = (props: Props) => {
  const clases = props.className;
  return (
    <select {...props} className={`${clases} text-black w-full p-2`}>
      {props.children}
    </select>
  );
};

export default Select;
