import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../utils/data";
/* Styles */
import Wrapper from "../assets/wrappers/projects";

function Projects() {
  return (
    <Wrapper className='section-center'>
      {projects.map((project) => {
        return (
          <article key={project.id} className='project-card'>
            <div className='project-img-container'>
              <img
                src={project.img}
                alt='miniature of the project'
                className='project-img'
              />
              <span className='project-icon'>{project.icon}</span>
            </div>
            <div className='project-info'>
              <h4>{project.title}</h4>
              <p>{`${project.description.substring(1, 100)} ...`}</p>
              <Link
                to={`/projects/${project.title}`}
                className='project-btn'
                aria-label='More info : navigate to the specific project'
              >
                more info
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}

export default Projects;
