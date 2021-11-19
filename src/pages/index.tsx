import React from "react";
import Link from "next/link";
import GoSimulate from "../components/buttons/goSimulate";
import DB from "./../db/simulations.json";

function index() {
  const { simulations } = DB;
  return (
    <div className="container">
      <header className="flex center column">
        <h1>Generative Art With Particles</h1>
        <GoSimulate />
      </header>

      <h2>Simulations</h2>
      <div className="simulations-list">
        <ul>
          {simulations.map((simulation, index) => (
            <li key={index}>
              <Link href={simulation.path}>
                <div className="simulation-item">
                  <strong>{simulation.title}</strong>
                  <p>{simulation.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default index;
