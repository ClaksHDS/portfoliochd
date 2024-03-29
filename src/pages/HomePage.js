import React from "react";
import { Hero, Skills, LatestProjects, ScrollButton } from "../components";

const HomePage = () => {
  return (
    <main role='main'>
      <Hero />
      <Skills />
      <LatestProjects />
      <ScrollButton />
    </main>
  );
};

export default HomePage;
