import React from "react";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import coffee from "../assets/images/coffee.svg";
/* Styles */
import Wrapper from "../assets/wrappers/aboutContent";

function AboutContent() {
  return (
    <Wrapper className='section-center about-center'>
      <section className='section-center about-center'>
        <img src={coffee} alt='' className='about-img' />
        <Tabs />
      </section>
      <div className='btn-container'>
        <Link to='/contact' className='contact-btn'>
          Écrivez moi
        </Link>
      </div>
    </Wrapper>
  );
}

export default AboutContent;
