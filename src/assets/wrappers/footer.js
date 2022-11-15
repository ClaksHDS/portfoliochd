import styled from "styled-components";

const Wrapper = styled.footer`
  height: 3vh;
  display: grid;
  padding-top: 0.55rem;
  place-items: center;
  box-shadow: var(--shadow-1);
  .social-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 1rem;
    a {
      font-size: 1.4rem;
      margin: 0 1rem;
      color: var(--textColor);
      transition: var(--transition);
    }
    a:hover {
      font-size: 1.6rem;
      color: var(--headlineColor);
    }
  }
  .logo {
    font-family: var(--headlineFont);
    font-size: 2rem;
  }
`;

export default Wrapper;
