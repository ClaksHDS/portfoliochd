import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--cardBackground);
  border-radius: var(--borderRadius);
  .tabs {
    display: flex;
  }
  .tab {
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--backgroundColor);
    border: transparent;
    color: var(--headlineColor);
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
    padding: 1rem 0;
    font-size: 1.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .tab:not(:last-child) {
    border-right: 1px solid var(--backgroundColor);
  }
  .tab.active {
    background: var(--cardBackground);
  }
  .panel {
    display: none;
    padding: 2rem 1rem;
  }
  .panel.active {
    display: block;
  }
`;

export default Wrapper;
