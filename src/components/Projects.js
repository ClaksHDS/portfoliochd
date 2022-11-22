import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../utils/data";
/* Styles */
import Wrapper from "../assets/wrappers/projects";

function Projects() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Wrapper className='section-center'>
        {projects.map((project) => {
          const { id, icon, img, title, description } = project;
          return (
            <article key={id} className='project-card'>
              <div className='project-img-container'>
                <img
                  src={img}
                  alt='miniature of the project'
                  className='project-img'
                />
                <span className='project-icon'>{icon}</span>
              </div>
              <div className='project-info'>
                <h4>{title}</h4>
                <p>{`${description.substring(1, 100)} ...`}</p>
                <Link to={`/projects/${id}`} className='project-btn'>
                  read more
                </Link>
              </div>
            </article>
          );
        })}
      </Wrapper>
    </>
  );
}

export default Projects;
