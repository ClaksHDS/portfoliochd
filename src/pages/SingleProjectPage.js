import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../components";
import styled from "styled-components";

const SingleProjectPage = () => {
  return (
    <Wrapper>
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
