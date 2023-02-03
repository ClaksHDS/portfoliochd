import styled from "styled-components";

const Wrapper = styled.section`
  height: 80vh;
  display: grid;
  place-items: center;
  padding: 2.5rem 2.75rem;
  .contact-container {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: var(--highlightColor);
      font-size: 1.75rem;
      line-height: 1.8;
    }
  }
  .contact-img {
    width: 100%;
    height: 275px;
    padding: 2rem;
  }
  .mail-contact {
    background: var(--highlightColor);
    padding: 0.55rem;
    border-radius: var(--borderRadius);
    a {
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      color: var(--btnTextColor);
      font-size: 1.05rem;
      padding: 0.25rem;
    }
  }
  .mail-contact:hover,
  .mail-contact:focus {
    background: var(--secondaryColor);
    a {
      color: var(--headlineColor);
    }
  }
  @media screen and (min-width: 990px) {
    .contact-img {
      margin-bottom: 0;
      height: 350px;
    }
    .contact-container p {
      font-size: 2.75rem;
    }
    .mail-contact a {
      font-size: 1.35rem;
      padding: 1rem 1.5rem;
    }
  }
`;

export default Wrapper;
