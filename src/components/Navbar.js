import React from "react";
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/data";
import { useGlobalContext } from "../context";
import SwitchBtn from "./SwitchBtn";
/* React Icons */
import { SlMenu } from "react-icons/sl";
/* Styles */
import Wrapper from "../assets/wrappers/navbar";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  // This styling will be applied when the route that it links to is selected
  let activeStyle = {
    color: "#9d174d",
    fontSize: "1.15rem",
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='clarisse hd logo' />
          </Link>
          <SwitchBtn />
          <button
            type='button'
            className='toggle-btn'
            onClick={openSidebar}
            aria-label='open sidebar'
            title='open sidebar'
          >
            <SlMenu />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
