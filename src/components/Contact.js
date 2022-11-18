import React from "react";
import contact from "../assets/images/contact.svg";

/* React Icons */
import { SlPencil } from "react-icons/sl";
/* Styles */
import Wrapper from "../assets/wrappers/contact";

function Contact() {
  return (
    <Wrapper className='section-center contact-center'>
      <div className='contact-container'>
        <img
          src={contact}
          alt='girl wearing glasses and ready to work'
          className='contact-img'
        />
        <p>let's work together.</p>
      </div>
      <div className='mail-contact'>
        <a
          href='mailto:huetclarisse2@gmail.com'
          className='mailMe'
          aria-label='email directly the owner of this portfolio'
        >
          <SlPencil className='pencil-icon' /> write me
        </a>
      </div>
    </Wrapper>
  );
}

export default Contact;
