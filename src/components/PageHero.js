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
          <Link to='/'>Accueil </Link>
          {project && <Link to='/projects'> - Projets </Link>}- {title}
        </h3>
        <div className='img-container'>
          <img src={glasses} alt='' className='hero-logo' />
        </div>
      </div>
    </Wrapper>
  );
}

export default PageHero;
