import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--cardBackground);
  box-shadow: var(--shadow-1);
  .section-title {
    padding-top: 1rem;
    h2 {
      text-transform: capitalize;
      color: var(--headlineColor);
    }
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }
  .skill {
    p {
      font-size: 1.75rem;
      margin: 0 1rem;
      color: var(--textColor);
    }
  }
  .details-skills {
    display: grid;
    place-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    text-align: left;
    margin: 0 auto;
    padding-left: 1rem;
    li {
      padding: 0.5rem;
    }
    li span {
      text-transform: capitalize;
      font-style: italic;
    }
  }
  @media (min-width: 990px) {
    .skills-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }
    .skill p {
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
