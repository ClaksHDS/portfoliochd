import React, { useState, useEffect } from "react";
import { socials } from "../utils/data";
import { motion } from "framer-motion";
/* React Icons */
import { SlPencil } from "react-icons/sl";
/* Styles */
import Wrapper from "../assets/wrappers/contact";

function Contact() {
  // define the initial coordinates for the cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    // capture the mouseMove events & define a listener function that will animate our cursor to a correct position
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    // clean up our event
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#fffffe",
      mixBlendMode: "difference",
    },
  };

  const textEnters = () => setCursorVariant("text");

  const textLeaves = () => setCursorVariant("default");

  return (
    <Wrapper>
      <article className='mail-contact'>
        <a
          href='mailto:huetclarisse2@gmail.com'
          className='mailMe'
          onMouseOver={textEnters}
          onMouseLeave={textLeaves}
        >
          <SlPencil className='pencil-icon' /> write me
        </a>
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
      </article>

      <article className='socials-contact'>
        <p>find me</p>
        <div className='underline'></div>
        <ul className='social-links'>
          {socials.map((socialLink) => {
            const { id, icon, url } = socialLink;
            return (
              <li key={id}>
                <a href={url} target='_blank'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </article>
    </Wrapper>
  );
}

export default Contact;
