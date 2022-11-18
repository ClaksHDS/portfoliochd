import styled from "styled-components";

const Wrapper = styled.section`
  height: 80vh;
  display: grid;
  place-items: center;
  padding: 2.5rem 2rem;
  .contact-container {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: var(--highlightColor);
      font-size: 2rem;
    }
  }
  .contact-img {
    width: 100%;
    height: 275px;
    padding: 2rem;
  }
  .mail-contact {
    background: var(--highlightColor);
    padding: 1rem;
    border-radius: var(--borderRadius);
    a {
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      color: var(--backgroundColor);
      font-size: 1.25rem;
      padding: 0.5rem;
    }
  }
  .mail-contact:hover {
    background: var(--secondaryColor);
  }
  @media screen and (min-width: 990px) {
    .contact-img {
      margin-bottom: 0;
      height: 350px;
    }
    .contact-container p {
      font-size: 3rem;
    }
    .mail-contact a {
      font-size: 1.65rem;
      padding: 1rem 1.5rem;
    }
  }
`;

export default Wrapper;
