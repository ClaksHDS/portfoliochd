import React from "react";
import { Link } from "react-router-dom";
import glasses from "../assets/images/glasses.svg";
/* Styles */
import Wrapper from "../assets/wrappers/pageHero";

function PageHero({ title, project }) {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>home </Link>
          {project && <Link to='/projects'> - Projects </Link>}- {title}
        </h3>
        <div className='img-container'>
          <img src={glasses} alt='pair of glasses' className='hero-logo' />
        </div>
      </div>
    </Wrapper>
  );
}

export default PageHero;
