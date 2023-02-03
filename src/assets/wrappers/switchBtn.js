import styled from "styled-components";

const Wrapper = styled.div`
  .switch {
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background-color: var(--secondaryColor);
    position: relative;
    border: transparent;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .icon {
    text-align: center;
    font-size: 1.35rem;
    color: var(--textColor);
  }
`;

export default Wrapper;
