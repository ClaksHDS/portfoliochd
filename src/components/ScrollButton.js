import React, { useState } from "react";
/* React Icons */
import { SlArrowUp } from "react-icons/sl";
/* Styles */
import Wrapper from "../assets/wrappers/scrollBtn";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  //set visible to true when we scroll down to 300px
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // trigger the change of state of visible
  window.addEventListener("scroll", toggleVisible);

  return (
    <Wrapper>
      <SlArrowUp
        onClick={scrollToTop}
        className='scroll-btn'
        style={{ display: visible ? "inline" : "none" }}
      />
    </Wrapper>
  );
};

export default ScrollButton;
