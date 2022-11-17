import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;

  .mail-contact {
    padding: 12rem;
    display: grid;
    justify-content: center;
    place-items: center;
    cursor: none;
  }
  .mail-contact a {
    color: var(--headlineColor);
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    text-align: center;
    margin: 0 auto;
  }
  .cursor {
    display: none;
  }

  .socials-contact p {
    text-align: center;
    margin: 0 auto;
    text-transform: capitalize;
    font-size: 1.75rem;
  }

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
  @media (min-width: 990px) {
    // custom cursor
    .cursor {
      display: block;
      background-color: var(--secondaryColor);
      height: 20px;
      width: 20px;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
`;

export default Wrapper;
