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
    <Wrapper role='main'>
      <PageHero title={project.title} project />
      <section className='section-center'>
        <div className='navigate-container'>
          <Link
            to='/projects'
            className='btn'
            aria-label='All projects : navigate to the projects page'
          >
            Découvrir tous les projets
          </Link>
        </div>
        <Project />
      </section>
    </Wrapper>
  );
};

/* Styles */

const Wrapper = styled.main`
  .navigate-container {
    display: grid;
    place-items: center;
    padding-top: 2.5rem;
  }
  .btn {
    padding: 0.55rem 1rem;
    background: var(--highlightColor);
    color: var(--btnTextColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover,
  .btn:focus {
    background: var(--secondaryColor);
  }
`;
export default SingleProjectPage;
