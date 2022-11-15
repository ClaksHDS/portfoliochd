import React from "react";
import { Link } from "react-router-dom";
import { latestProjects } from "../utils/data";
/* Styles */
import Wrapper from "../assets/wrappers/latestProjects";

const LatestProjects = () => {
  return (
    <Wrapper>
      <div className='section-title'>
        <h2>latest projects</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center projects-center'>
        {latestProjects.map((project) => {
          const { id, url, img, title } = project;
          return (
            <a key={id} href={url} target='_blank' rel='noopener'>
              <article className='project'>
                <img
                  src={img}
                  alt='miniature of a website'
                  className='project-img'
                />
                <div className='project-info'>
                  <p>{title}</p>
                </div>
              </article>
            </a>
          );
        })}
      </div>

      <Link to='/projects' className='skills-btn'>
        <p>see more</p>
      </Link>
    </Wrapper>
  );
};

export default LatestProjects;