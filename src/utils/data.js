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
    img: angstrom,
    url: "https://angstrom-project.netlify.app",
    title: "Ångstrøm",
    description:
      "Cliche bruh big mood meditation lomo pork belly art party listicle pok pok salvia air plant fixie man braid. +1 bespoke meggings raclette copper mug, aesthetic sartorial. Yuccie blog tote bag vice keytar truffaut. Pinterest pop-up food truck occupy DIY fingerstache yr poke glossier +1 street art chillwave tattooed. Cronut synth locavore chillwave Brooklyn four loko.",
    icon: <IoLogoJavascript />,
    source: "https://github.com/ClaksHDS/Angstrom",
  },
  {
    id: 2,
    img: reddit,
    url: "https://reddit-client-stay-curious.netlify.app/",
    title: "Reddit stay curious",
    description:
      "Taiyaki same hot chicken, tofu sriracha Brooklyn literally hexagon vaporware vegan trust fund flannel disrupt bodega boys. Master cleanse twee umami poke echo park shabby chic food truck VHS squid tonx franzen tumeric. Disrupt taxidermy try-hard pok pok, tote bag yr celiac chillwave everyday carry iceland taiyaki. Enamel pin taiyaki mixtape, art party live-edge tilde truffaut. Paleo ramps butcher gastropub tonx letterpress 8-bit. Blue bottle pork belly microdosing, messenger bag flannel hot chicken humblebrag salvia freegan.",
    icon: <FaReact />,
    source: "https://github.com/ClaksHDS/reddit-react-app",
  },
  {
    id: 3,
    img: inspo,
    url: "https://inspohomepage-reactproject.netlify.app/",
    title: "Inspirational homepage",
    description:
      "3 wolf moon subway tile pinterest jean shorts butcher skateboard mixtape shabby chic gastropub. Fit ethical green juice, distillery cliche fashion axe art party poke portland narwhal viral cred direct trade normcore. Bruh fit iPhone freegan tousled. Palo santo thundercats you probably haven't heard of them health goth air plant vape.",
    icon: <FaReact />,
    source: "https://github.com/ClaksHDS/inspo-homepagee",
  },
  {
    id: 4,
    img: jump,
    title: "Jump Shawn",
    url: "https://jump-shawnsheep-jump.netlify.app/",
    description:
      "Chillwave raclette lomo tumeric tofu banh mi pour-over. Humblebrag +1 helvetica crucifix sartorial meggings DIY chicharrones cliche. Forage lomo vegan, selvage irony fanny pack sustainable 3 wolf moon. Green juice fam irony readymade bicycle rights, scenester slow-carb. Fashion axe whatever blog taiyaki, trust fund you probably haven't heard of them artisan unicorn pug prism post-ironic mustache dreamcatcher chia vape.",
    icon: <IoLogoJavascript />,
    source: "https://github.com/ClaksHDS/Jump-Sheep-Jump",
  },
];
