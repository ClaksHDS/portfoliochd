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
        <img
          src={sweater}
          alt='illustration of a girl wearing a sweater and smiling'
          className='small-img'
        />
        <img
          src={standing}
          alt='illustration of a girl with glasses standing and smiling'
          className='main-img'
        />
      </article>
      <article className='content'>
        <h1>clarisse hd</h1>
        <p>web developer & enthusiastic learner</p>

        <ul className='social-links'>
          {socials.map((socialLink) => {
            const { id, icon, url } = socialLink;
            return (
              <li key={id}>
                <a
                  href={url}
                  target='_blank'
                  aria-label='link directing to social media account GitHub, LinkedIn, Instagram'
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <Link to='/contact' className='hero-btn'>
          contact me
        </Link>
      </article>
    </Wrapper>
  );
};

export default Hero;
