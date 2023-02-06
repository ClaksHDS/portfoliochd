import React from "react";
/* Images */
import angstrom from "../assets/images/miniatures/Angstrom.png";
import reddit from "../assets/images/miniatures/reddit.png";
import inspo from "../assets/images/miniatures/inspo.png";
import jump from "../assets/images/miniatures/jump.png";
import eshop from "../assets/images/miniatures/cestnous-eshop.png";

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
      " The goal of this CodeCademy project was to design and build the layout for an existing or fictional company (the option I chose). The purpose was to build a responsive website. I also add some JavaScript allowing me to add a sidebar on smaller devices to navigate on the page. All the images used in this project come from Unsplash API. It's the first website I create from scratch, and with time (and the new things I learnt on the way) I add and improve elements. For example, to enhance the user experience I work on the colors contrast to improve accessibility. ",
    languages: "HTML, CSS, JavaScript",
    icon: <IoLogoJavascript />,
    source: "https://github.com/ClaksHDS/Angstrom",
  },
  {
    id: 2,
    img: reddit,
    url: "https://reddit-client-stay-curious.netlify.app/",
    title: "Reddit stay curious",
    languages: "HTML, CSS, JavaScript, React",
    description:
      " A Front-end project of a Reddit client application for Codecademy's Front End Engineering Path. Reddit is a website where people share links to articles, media and other things on the web. I use the Reddit API to integrate the data to the application. This app allows users to view posts, search for subreddit, and view comments provided by the API. I also add other features to offer a better user experience such as a sidebar that allows users to navigate to one of the most popular subreddit of the moment, a button to scroll back to the top, a search bar, and a sidebar for the smaller devices. You can learn more about the tools I used to create this app on the source code linked below. Because, I want to improve the accessibility on my projects, I'll have to improve a lot of elements to offer the best experience for everyone. ",
    icon: <FaReact />,
    source: "https://github.com/ClaksHDS/reddit-react-app",
  },
  {
    id: 3,
    img: inspo,
    url: "https://inspohomepage-reactproject.netlify.app/",
    title: "Inspirational homepage",
    languages: "HTML, CSS, JavaScript, React",
    description:
      " A Front-end project of an inspirational homepage for Codecademy's Front End Engineering Path. This application interacts with different APIs to display the current weather, a background image and an inspirational quote. There is also a dynamic to-do list where users can add some tasks, mark as completed or delete. Users can dynamically change the background, click on a button to display a quote and hide it after. The list of tasks is preserved when a user refreshes the page. You can learn more about the tools I used to create this app on the source code linked below. ",
    icon: <FaReact />,
    source: "https://github.com/ClaksHDS/inspo-homepagee",
  },
  {
    id: 4,
    img: eshop,
    title: "E-shop Distillerie C'est Nous",
    url: "https://project-cestnous-eshop.netlify.app/",
    languages: "HTML, CSS, JavaScript, React",
    description:
      "This project is a copy of the existing website of the distillery C'est Nous. The web application uses all the featured you can find on an e-shop : filters to select and search products, add or remove products, a payment option using Stripe and its library, a login and logout system to access the payment page and finalize an order. I also set up a database with Airtable to fetch all the products and retrieve a single product. The app displays all the needed information regarding the distillery, its history, its founders, how to contact them and its policy privacy. The user can authenticate himself/herself via Auth0. The user can also subscribe to the newsletter via the use of FormSpree. I also try to focus on Accessibility on this project to offer the best user experience for everyone.",
    icon: <FaReact />,
    source: "https://github.com/ClaksHDS/cest-nous",
  },
  {
    id: 5,
    img: jump,
    title: "Jump Shawn",
    url: "https://jump-shawnsheep-jump.netlify.app/",
    languages: "HTML, CSS, JavaScript",
    description:
      " This little game was inspired by the T-Rex Dinosaur Game, the browser game developed by Google. This project was realized by following two different tutorials, one for building the game itself with a tutorial video by Ania Kubów. And the other one to create a little sheep that I named Shawn (I was living in Bristol (UK) - the city of the creators of Shawn the Sheep). Shawn was entirely build with CSS following a step by step written by Suzanne Aitchison. You can find the links of both tutorials on the source code below. I truly believe that you can really improve your skills by following tutorials and adjust them to match the project you want to build! ",
    icon: <IoLogoJavascript />,
    source: "https://github.com/ClaksHDS/Jump-Sheep-Jump",
  },
];
