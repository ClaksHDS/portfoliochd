import React from "react";
import { PageHero, Projects } from "../components";

const ProjectsPage = () => {
  return (
    <main role='main'>
      <PageHero title='projects' />
      <Projects />
    </main>
  );
};

export default ProjectsPage;
