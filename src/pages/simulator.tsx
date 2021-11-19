import React from "react";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/simulation/simulation"),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;
