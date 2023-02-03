import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--cardBackground);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  color: var(--textColor);
  .section-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    padding: 0.1rem;
    color: var(--textColor);
    transition: var(--transition);
    &:hover,
    &:focus {
      border-bottom: 1px solid var(--secondaryColor);
    }
  }
  h3 {
    text-transform: lowercase;
  }
  .hero-logo {
    display: none;
    width: 100px;
  }
  @media (min-width: 990px) {
    .hero-logo {
      display: block;
    }
  }
`;

export default Wrapper;
