import React from "react";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNode } from "react-icons/fa";

export const links = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "projects", url: "/projects" },
  { id: 3, text: "about", url: "/about" },
  { id: 4, text: "contact", url: "/contact" },
];

export const socials = [
  { id: 1, url: "https://github.com/ClaksHDS", icon: <SlSocialGithub /> },
  {
    id: 2,
    url: "https://www.linkedin.com/in/clarisse-huet-9b931a19b/",
    icon: <SlSocialLinkedin />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/mediacolorpalette/",
    icon: <SlSocialInstagram />,
  },
];

export const skills = [
  { id: 1, icon: <IoLogoHtml5 />, text: "HTML 5" },
  { id: 2, icon: <IoLogoCss3 />, text: "CSS 3" },
  { id: 3, icon: <IoLogoJavascript />, text: "JavaScript" },
  { id: 4, icon: <FaReact />, text: "React" },
  { id: 5, icon: <FaNode />, text: "Node.js" },
];
