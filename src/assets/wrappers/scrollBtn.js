import styled from "styled-components";

const Wrapper = styled.div`
  .scroll-btn {
    position: fixed;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    left: 85%;
    bottom: 40px;
    font-size: 1rem;
    z-index: 1;
    cursor: pointer;
    background: var(--highlightColor);
    border-color: transparent;
    color: var(--backgroundColor);
    box-shadow: var(--shadow-1);
  }
  .scroll-btn:hover {
    background: var(--secondaryColor);
    border-color: var(--highlightColor);
  }
  @media (min-width: 990px) {
    .scroll-btn {
      left: 95%;
    }
  }
`;

export default Wrapper;
