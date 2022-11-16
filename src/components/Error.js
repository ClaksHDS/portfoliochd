import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/error.png";
/* Styles */
import Wrapper from "../assets/wrappers/error";

function Error() {
  return (
    <Wrapper className='full-page'>
      <img src={error} alt='error 404 page not found' />
      <h3>page not found</h3>
      <p>the page you're looking for does not exist</p>
      <Link to='/' className='btn-link'>
        back home
      </Link>
    </Wrapper>
  );
}

export default Error;
