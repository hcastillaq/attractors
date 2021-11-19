import React from "react";
import Link from "next/link";
import Head from "next/head";
import GoSimulate from "../components/buttons/goSimulate";
import DB from "./../db/simulations.json";
import HeadSeo from "../components/seo/Head";

function index() {
  const { simulations } = DB;
  const seo = {
    title: "Generative Art With Particles",
    description: `Here find you multiples simulations where you watch the movement of many
    particles, expressed for mathematical equations or physics phenomenons.`,
  };
  return (
    <div className="container">
      <HeadSeo title={seo.title} description={seo.description}></HeadSeo>
      <header className="flex center column">
        <h1>Generative Art With Particles</h1>
        <GoSimulate />
      </header>

      <h3>About</h3>
      <span>
        Here find you multiples simulations where you watch the movement of many
        particles, expressed for mathematical equations or physics phenomenons.
      </span>
      <br />
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
