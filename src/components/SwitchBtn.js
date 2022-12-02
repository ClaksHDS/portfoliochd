import React, { useState, useEffect } from "react";
/* Styles */
import Wrapper from "../assets/wrappers/switchBtn";
/* React Icons */
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

// get the theme's preference of the user
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const SwitchBtn = () => {
  const [theme, setTheme] = useState(getStorageTheme);

  // allow user to switch between light & dark themes
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <button
        className='switch'
        onClick={toggleTheme}
        role='button'
        title='select dark or light theme'
      >
        {theme === "light-theme" ? (
          <IoSunnyOutline className='icon' />
        ) : (
          <IoMoonOutline className='icon' />
        )}
      </button>
    </Wrapper>
  );
};

export default SwitchBtn;
