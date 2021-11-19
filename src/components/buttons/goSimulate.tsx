import React from "react";
import Link from "next/link";

type Props = {
  text?: string;
  name?: string;
};
const GoSimulate = (props: Props) => {
  const path = "/simulator" + (props.name ? "?name=" + props.name : "");
  return (
    <Link href={path}>
      <a className="go-simulator">{props.text ? props.text : "go simulator"}</a>
    </Link>
  );
};

export default GoSimulate;
