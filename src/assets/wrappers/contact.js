import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;

  .social-links {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-size: 1.55rem;
      color: var(--highlightColor);
      transition: var(--transition);
      padding: 0 1rem;
    }
    a:hover {
      color: var(--secondaryColor);
    }
  }
`;

export default Wrapper;
