import { FC, PropsWithChildren } from "react";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

const Button: FC<Props> = (props) => {
  const clases = props.className;
  return (
    <button
      {...props}
      className={`${clases} bg-white rounded-2xl text-black py-1 px-4`}
    >
      {props.children}
    </button>
  );
};

export default Button;
