import React from "react";
import { Link, useParams } from "react-router-dom";
import { Project, PageHero } from "../components";
import { projects } from "../utils/data";
/* Styles */
import styled from "styled-components";

const SingleProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find((project) => projectId === project.title);
  return (
    <Wrapper>
      <PageHero title={project.title} project />
      <section className='section-center'>
        <div className='navigate-container'>
          <Link to='/projects' className='btn'>
            all projects
          </Link>
        </div>
        <Project />
      </section>
    </Wrapper>
  );
};

/* Styles */

const Wrapper = styled.section`
  .navigate-container {
    display: grid;
    place-items: center;
    padding-top: 2.5rem;
  }
  .btn {
    text-transform: capitalize;
    padding: 0.55rem 1rem;
    background: var(--highlightColor);
    color: var(--headlineColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    background: var(--secondaryColor);
  }
`;
export default SingleProjectPage;
