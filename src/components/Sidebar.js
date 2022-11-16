import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { links, socials } from "../utils/data";
import { useGlobalContext } from "../context";
/* React Icons */
import { SlClose } from "react-icons/sl";
/* Styles */
import Wrapper from "../assets/wrappers/sidebar";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='clarisse hd logo' />
          <button
            className='close-btn'
            type='button'
            onClick={closeSidebar}
            aria-label='close sidebar'
          >
            <SlClose />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>

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
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
