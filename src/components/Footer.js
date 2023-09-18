import React from "react";
import { socials } from "../utils/data";

/* Styles */
import Wrapper from "../assets/wrappers/footer";

const Footer = () => {
  return (
    <Wrapper role='contentinfo'>
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

      <p>
        &copy; <span className='logo'>clarisse hd</span> - tous droits réservés{" "}
        {""}
        {new Date().getFullYear()}
      </p>
    </Wrapper>
  );
};

export default Footer;
