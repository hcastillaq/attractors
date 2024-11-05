import Button from "@/components/shared/Button";
import { redirect } from "next/navigation";
import { SIMULATIONS } from "../../../../db/simulations";
import Select from "../../../shared/Select";

const SimulationHomePage = () => {
  const handleSubmit = async (data: FormData) => {
    "use server";
    const simulation = data.get("simulation") as string;
    return redirect(`/simulations/${simulation}`);
  };

  return (
    <form
      className="max-w-xs mx-auto flex flex-col gap-8 items-center my-20"
      action={handleSubmit}
    >
      <h1 className="italic font-bold text-4xl text-center leading-normal">
        Generative Art With Particles
      </h1>
      <Select required name="simulation">
        {Object.keys(SIMULATIONS).map((key) => {
          return (
            <option key={key} value={key}>
              {SIMULATIONS[key as keyof typeof SIMULATIONS].title}
            </option>
          );
        })}
      </Select>

      <Button
        type="submit"
        className=" hover:scale-105
        transition-transform duration-300 ease-in-out"
      >
        Go to simulation
      </Button>
    </form>
  );
};

export default SimulationHomePage;
