import styled from "styled-components";

const Wrapper = styled.article`
  overflow: hidden;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .about {
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: var(--cardBackground);
    margin: 3.5rem auto 1.5rem;
    padding: 2rem 1rem;
    color: var(--textColor);
    border-radius: var(--borderRadius);
  }
  .nav {
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
  .nav li {
    padding: 1rem 0;
    border: none;
    font-size: 1.25rem;
    display: block;
    background: var(--secondaryColor);
    width: 50%;
    text-align: center;
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .nav li:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  ul li:hover {
    background: var(--secondaryColor);
  }
  .nav li.active {
    background: var(--backgroundColor);
  }
  .outlet {
    border-radius: var(--borderRadius);
    padding: 0;
  }
  @media screen and (min-width: 990px) {
    .tabs {
      width: 600px;
    }
  }
`;

export default Wrapper;
