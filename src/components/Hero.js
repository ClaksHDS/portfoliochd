import React from "react";
import { Link } from "react-router-dom";
import { socials } from "../utils/data";
import standing from "../assets/images/standing.svg";
import sweater from "../assets/images/sweater.svg";
/* Styles */
import Wrapper from "../assets/wrappers/hero";

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='img-container'>
        <img src={sweater} alt='' className='small-img' />
        <img src={standing} alt='' className='main-img' />
      </article>
      <article className='content'>
        <h1>clarisse hd</h1>
        <p>Consultante en accessibilité numérique</p>

        <ul className='social-links'>
          {socials.map((socialLink) => {
            const { id, icon, url } = socialLink;
            return (
              <li key={id}>
                <a
                  href={url}
                  target='_blank'
                  aria-label='link directing to social media accounts GitHub, LinkedIn, Instagram'
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <Link to='/contact' className='hero-btn'>
          Écrivez moi un mail
        </Link>
      </article>
    </Wrapper>
  );
};

export default Hero;
