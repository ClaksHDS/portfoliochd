import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem;
  .projects-center {
    padding-left: 2rem;
    padding-right: 2rem;
    display: grid;
    place-items: center;
    gap: 2rem;
  }
  .section-title {
    padding-bottom: 2rem;
    h2 {
      color: var(--headlineColor);
    }
  }
  .project {
    position: relative;
    background: var(--cardBackground);
    border-radius: var(--borderRadius);
    margin-bottom: 2rem;
  }
  .project-info {
    text-align: center;
    color: var(--highlightColor);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
    opacity: 0;
  }
  .project-info p {
    text-transform: capitalize;
    color: var(--headlineColor);
    letter-spacing: 0.1rem;
  }
  .project:hover .project-info {
    opacity: 1;
  }
  .project-img {
    transition: var(--transition);
    border-radius: var(--borderRadius);
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  .project:hover .project-img {
    opacity: 0.1;
  }
  .project::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.2rem solid var(--highlightColor);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    opacity: 0;
  }
  .project:hover::after {
    opacity: 1;
    transform: scale(0.7);
  }

  .skills-btn {
    font-size: 1rem;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    color: var(--btnTextColor);
    margin: 2rem auto;
    display: grid;
    place-items: center;
    justify-content: center;
    width: 120px;
  }
  .skills-btn:hover,
  .skills-btn:focus {
    background: var(--secondaryColor);
  }
  @media (min-width: 400px) {
    .projects-center {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media (min-width: 990px) {
    .projects-center {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 4rem;
    }
    .skills-btn {
      width: 150px;
    }
  }
`;

export default Wrapper;
