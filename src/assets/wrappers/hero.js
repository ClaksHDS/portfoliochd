import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 60vh;
  width: 100%;
  display: grid;
  margin-top: 2rem;
  gap: 2rem;
  place-items: center;
  justify-content: center;
  padding: 3rem 1rem 2rem;
  .img-container {
    display: none;
  }

  h1 {
    text-align: center;
  }
  p {
    max-width: 45em;
    margin-bottom: 2rem;
    text-transform: capitalize;
    text-align: center;
  }
  .hero-btn {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    text-transform: capitalize;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
    display: inline-block;
    color: var(--btnTextColor);
    margin-left: 1.15rem;
    margin: 2rem;
    display: grid;
    place-items: center;
  }
  .hero-btn:hover,
  .hero-btn:focus {
    background: var(--secondaryColor);
  }
  .social-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 1rem;
    a {
      font-size: 1.55rem;
      color: var(--iconColor);
      transition: var(--transition);
    }
    a:hover,
    a:focus {
      color: var(--secondaryColor);
    }
  }
  @media (min-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0 1rem;
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      display: none;
    }
    .small-img {
      width: 100%;
      height: 275px;
      position: relative;
      display: block;
      object-fit: cover;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--secondaryColor);
      bottom: 5%;
      right: -15%;
      border-radius: var(--borderRadius);
    }
  }
  @media (min-width: 990px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    a {
      font-size: 2rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .small-img {
      display: none;
    }
    .main-img {
      width: 100%;
      height: 450px;
      position: relative;
      display: block;
      object-fit: cover;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.45rem solid var(--secondaryColor);
      bottom: 5%;
      right: -15%;
      border-radius: var(--borderRadius);
    }
  }
`;

export default Wrapper;
