import SimulationPage from "@/components/pages/simulation/SimulationPage";
import { SIMULATIONS } from "@/db/simulations";
import { notFound } from "next/navigation";
import { FC } from "react";

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
