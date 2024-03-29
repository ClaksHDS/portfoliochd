import React from "react";
import contact from "../assets/images/contact.svg";
/* Styles */
import Wrapper from "../assets/wrappers/contact";

function Contact() {
  return (
    <Wrapper className='section-center contact-center'>
      <div className='contact-container'>
        <img src={contact} alt='' className='contact-img' />
        <p>Travaillons ensemble</p>
      </div>
      <div className='mail-contact'>
        <a
          href='mailto:huetclarisse2@gmail.com'
          className='mailMe'
          aria-label='email directly the owner of this portfolio'
        >
          Écrivez moi
        </a>
      </div>
    </Wrapper>
  );
}

export default Contact;
