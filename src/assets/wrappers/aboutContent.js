import styled from "styled-components";

const Wrapper = styled.section`
  .about-img {
    width: 100%;
    height: 275px;
    padding: 2rem;
  }
  @media screen and (min-width: 990px) {
    .about-img {
      margin-bottom: 0;
      height: 400px;
    }
    .about-center {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 2.5rem 2rem;
    }
  }
  .btn-container {
    display: grid;
    place-items: center;
    padding: 2.5rem;
  }
  .contact-btn {
    padding: 0.375rem 0.75rem;
    text-transform: capitalize;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    color: var(--headlineColor);
    transition: var(--transition);
  }
  .contact-btn:hover {
    background: var(--secondaryColor);
  }
`;

export default Wrapper;
