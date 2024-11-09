import Button from "@/components/shared/Button";
import { redirect } from "next/navigation";
import { SIMULATIONS } from "../../../db/simulations";
import Select from "../../shared/Select";

const SimulationHomePage = () => {
  const handleSubmit = async (data: FormData) => {
    "use server";
    const simulation = data.get("simulation") as string;
    return redirect(`/${simulation}`);
  };

  return (
    <div className=" w-screen h-screen overflow-auto bg-gray-900  gap-16 py-10">
      <form
        className="max-w-xs mx-auto flex flex-col gap-8 items-center"
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

      <div className="h-0.5 w-full bg-white opacity-25 my-10 max-w-lg mx-auto"></div>

      <div className="flex flex-col gap-8 max-w-md mx-auto ">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl text-center font-bold">What is this?</h2>

          <p className="">
            This is a collection of art simulations based in chaos attractors
            created with particles. Each simulation has its own configuration
            and behavior. You can play with the configurations and see how the
            particles behave in different scenarios.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-center font-bold">
            Particle System Library
          </h3>

          <p>
            This project use the library
            <a
              href="https://www.npmjs.com/package/particle-system"
              target="_blank"
              style={{
                color: "cyan",
                textDecoration: "underline",
                margin: "0 5px",
              }}
            >
              particle-system
            </a>
            to create the particle systems.
          </p>

          <p>
            The library use threejs to create the particles and the simulation,
            so you can use the library to create your own particle systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimulationHomePage;
