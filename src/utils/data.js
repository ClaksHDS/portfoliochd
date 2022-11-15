import React from "react";
/* Images */
import angstrom from "../assets/images/miniatures/Angstrom.png";
import reddit from "../assets/images/miniatures/reddit.png";
import inspo from "../assets/images/miniatures/inspo.png";
import jump from "../assets/images/miniatures/jump.png";
/* React Icons */
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaNode,
  FaTrello,
  FaFigma,
  FaGithubSquare,
} from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

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
  { id: 6, icon: <FaTrello />, text: "Trello" },
  { id: 7, icon: <FaFigma />, text: "Figma" },
  { id: 8, icon: <FaGithubSquare />, text: "GitHub Desktop" },
  { id: 9, icon: <SiStyledcomponents />, text: "Styled Components" },
];

export const latestProjects = [
  {
    id: 1,
    img: angstrom,
    url: "https://angstrom-project.netlify.app",
    title: "Ängstrøm",
  },
  {
    id: 2,
    img: reddit,
    url: "https://reddit-client-stay-curious.netlify.app/",
    title: "Stay Curious",
  },
  {
    id: 3,
    img: inspo,
    url: "https://inspohomepage-reactproject.netlify.app/",
    title: "Inspirational Homepage",
  },
];

export const projects = [
  {
    id: 1,
    img: "",
    url: "https://angstrom-project.netlify.app",
    description: "",
  },
  {
    id: 2,
    img: "http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Freddit-client-stay-curious.netlify.app",
    url: "https://reddit-client-stay-curious.netlify.app/",
    description: "",
  },
  {
    id: 3,
    img: "http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Finspohomepage-reactproject.netlify.app",
    url: "https://inspohomepage-reactproject.netlify.app/",
    description: "",
  },
  {
    id: 4,
    img: "https://jump-shawnsheep-jump.netlify.app",
    url: "https://jump-shawnsheep-jump.netlify.app/",
    description: "",
  },
];
