import styled from "styled-components";

const Wrapper = styled.aside`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.65rem;
    background: transparent;
    border-color: transparent;
    color: var(--headlineColor);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    font-size: 1.85rem;
  }
  .logo {
    justify-self: center;
    height: 40px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.55rem 2rem;
    color: var(--textColor);
    transition: var(--transition);
  }
  .links a:hover {
    background: var(--cardBackground);
    color: var(--headlineColor);
    padding-left: 3rem;
  }
  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-links a {
    font-size: 1.4rem;
    margin: 0 1rem;
    color: var(--highlightColor);
    transition: var(--transition);
  }
  .social-links a:hover {
    font-size: 1.6rem;
    color: var(--secondaryColor);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--backgroundColor);
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    gap: 1rem;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 99;
  }
  @media screen and (min-width: 990px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Wrapper;
