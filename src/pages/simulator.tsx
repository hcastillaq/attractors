import React from "react";
import dynamic from "next/dynamic";
import HeadSeo from "../components/seo/Head";

const Simulator = dynamic(() => import("../components/simulation/simulation"), {
  ssr: false,
});

export default () => {
  const seo = {
    title: "Simulator",
    description: `Here find you multiples simulations where you watch the movement of many
    particles, expressed for mathematical equations or physics phenomenons.`,
  };
  return (
    <>
      <HeadSeo title={seo.title} description={seo.description}></HeadSeo>
      <Simulator />
    </>
  );
};
