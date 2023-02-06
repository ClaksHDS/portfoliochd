import styled from "styled-components";

const Wrapper = styled.main`
  .project-center {
    display: grid;
    gap: 1rem;
    margin: 2.5rem;
    padding: 0 2rem;
    min-height: 70vh;
  }
  span {
    font-size: 1.1rem;
  }
  .project-img {
    max-width: 600px;
    border-radius: var(--borderRadius);
  }
  .desc {
    line-height: 1.75;
    max-width: 45em;
  }
  .btn-container {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    .btn {
      border-color: transparent;
      transition: var(--transition);
    }
    .btn a {
      color: var(--btnTextColor);
    }
  }

  @media (min-width: 990px) {
    .project-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 3rem;
    }
  }
`;

export default Wrapper;
