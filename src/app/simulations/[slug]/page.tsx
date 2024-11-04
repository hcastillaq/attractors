import { notFound } from "next/navigation";
import { FC } from "react";
import SimulationPage from "../../../components/pages/simulations/simulation/SimulationPage";
import { SIMULATIONS } from "../../../db/simulations";

interface Props {
  params: Promise<{ slug: string }>;
}

const Simulation: FC<Props> = async ({ params }) => {
  const { slug } = await params;

  const simulationName = SIMULATIONS[slug as keyof typeof SIMULATIONS];

  if (!simulationName) {
    return notFound();
  }

  return <SimulationPage name={slug} />;
};

export default Simulation;
