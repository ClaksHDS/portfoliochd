import styled from "styled-components";

const Wrapper = styled.div`
  .full-page {
    min-height: 100vh;
  }
  text-align: center;
  display: grid;
  place-items: center;
  justify-content: center;
  padding: 6rem;
  img {
    width: 80vw;
    display: block;
  }
  h3,
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .btn-link {
    font-size: 1rem;
    text-transform: capitalize;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    color: var(--btnTextColor);
    margin: 2rem auto;
    display: grid;
    place-items: center;
    justify-content: center;
    padding: 0.575rem 0.85rem;
  }
  .btn-link:hover {
    background: var(--secondaryColor);
  }

  @media (min-width: 990px) {
    img {
      width: 600px;
    }
  }
`;

export default Wrapper;
