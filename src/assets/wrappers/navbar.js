import styled from "styled-components";

const Wrapper = styled.nav`
  height: 5rem;
  display: grid;
  place-items: center;

  box-shadow: var(--shadow-2);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--maxWidth);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -30px;
    }
  }
  .toggle-btn {
    background: transparent;
    border: transparent;
    color: var(--headlineColor);
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.65rem;
  }
  .toggle-btn:hover {
    font-size: 1.85rem;
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 990px) {
    .toggle-btn {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: right;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1rem;
        color: var(--textColor);
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          border-bottom: 1px solid var(--secondaryColor);
        }
      }
    }
  }
`;

export default Wrapper;
