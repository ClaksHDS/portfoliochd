import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/data";
/* Styles */
import Wrapper from "../assets/wrappers/project";

function Project() {
  const { projectId } = useParams();

  const project = projects.find((project) => projectId === project.title);

  return (
    <Wrapper>
      <div className='project-center'>
        <img
          src={project.img}
          alt='miniature of the website'
          className='img project-img'
        />
        <section className='content'>
          <h2>{project.title}</h2>
          <p>
            <span>Langages & Frameworks :</span> {project.languages}
          </p>
          <p className='desc'>{project.description}</p>
          <hr />
          <div className='btn-container'>
            <button className='btn' title='navigate to the website'>
              <a
                href={project.url}
                aria-label='navigate to the website'
                target='_blank'
              >
                live site
              </a>
            </button>
            <button className='btn' aria-label='navigate to the website'>
              <a
                href={project.source}
                aria-label='have a look to the source code'
                target='_blank'
              >
                code source
              </a>
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default Project;
