import React from "react";
import { socials } from "../utils/data";

/* React Icons */
import { SlPencil } from "react-icons/sl";
/* Styles */
import Wrapper from "../assets/wrappers/contact";

function Contact() {
  return (
    <Wrapper>
      <article className='mail-contact'>
        <a href='mailto:huetclarisse2@gmail.com' className='mailMe'>
          <SlPencil className='pencil-icon' /> write me
        </a>
      </article>
    </Wrapper>
  );
}

export default Contact;
