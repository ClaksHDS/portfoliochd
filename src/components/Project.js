import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/data";

function Project() {
  const { projectId } = useParams();

  const project = projects.find((project) => projectId === project.title);

  console.log(projects);
  console.log(project);

  return (
    <section>
      <h2>single project</h2>
      <p>{projectId}</p>
      <p>{project.languages}</p>
    </section>
  );
}

export default Project;
