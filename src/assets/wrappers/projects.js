import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem 2rem;
  .project-card {
    margin: 2rem 0;
    background: var(--cardBackground);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }
  .project-img-container {
    position: relative;
  }
  .project-icon {
    position: absolute;
    left: 50%;
    bottom: 0;
    font-size: 2rem;
    background: var(--cardBackground);
    padding: 0.25rem 0.6rem;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    color: var(--highlightCardColor);
  }
  .project-card:hover,
  .project-card:focus {
    box-shadow: var(--shadow-2);
  }
  .project-img {
    height: 17rem;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .project-info {
    text-align: center;
    padding: 2rem 1rem 2.5rem 1rem;
  }
  .project-info p {
    padding: 0 2rem;
    text-align: left;
  }
  .project-btn {
    font-size: 0.75rem;
    text-transform: capitalize;
    padding: 0.375rem 0.5rem;
    background: var(--highlightColor);
    color: var(--btnTextColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .project-btn:hover,
  .project-btn:focus {
    background: var(--secondaryColor);
  }
  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 2rem;
  }
`;

export default Wrapper;
