import React, { useState } from "react";
/* Styles */
import Wrapper from "../assets/wrappers/tabs";

function Tabs() {
  // contains index of active tab
  const [activeIndex, setActiveIndex] = useState(1);

  // set the active index when a tab is clicked
  const handleClick = (index) => setActiveIndex(index);

  // add the active class for styling & toggle visibility
  const activeTab = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <Wrapper>
      <>
        <div className='tabs'>
          <button
            className={`tab ${activeTab(1, "active")}`}
            onClick={() => handleClick(1)}
            aria-label='select english version of the text'
          >
            🇬🇧 English
          </button>
          <button
            className={`tab ${activeTab(2, "active")}`}
            onClick={() => handleClick(2)}
            aria-label='select french version of the text'
          >
            🇫🇷 Français
          </button>
        </div>
        <div className='panels'>
          <div className={`panel ${activeTab(1, "active")} `}>
            After studying History in university and getting a master degree, I
            faced a lack of opportunities in my field.
            <br />
            At the end of 2021 and after moving in Bristol (UK), I decide to
            start something new and begin a new journey. I decide to become a
            Front-End Developer! I start an online formation on CodeCademy and
            followed courses on Udemy (plus a lot of reading and watching
            regarding the subjects with which I was struggling).
            <br />
            <br />
            For more than a year, I spent my day learning how to code -
            something that seem impossible to me. Learning new languages,
            frameworks, libraries and how to use them. Passionate about
            literature and arts, coding offers me a way to write and practice my
            creativity with a new set of tools. And the good thing with code,
            it's that basically sky is the limit to what you can create (sky and
            your ability to understand an extraordinary amount of sources)!
            <br />I develop a new interest in creating nice User Interface that
            offer the best user experience possible, and applying accessibility
            rules to make Internet a pleasant place for everyone. And the book
            worm in me is extremely pleased with the fact that you have to
            browse a lot to find information about problems you can encounter
            while learning and developing projects.
          </div>
          <div className={`panel ${activeTab(2, "active")} `}>
            Après une licence et un master en Histoire, je me retrouve face à un
            marché de l'emploi offrant peu d'opportunité. Fin 2021 et suite à un
            déménagement de l'autre côté de la Manche, je décide d'entamer une
            reconversion professionnelle pour devenir développeur Front-End et
            commence un apprentissage en ligne sur la plateforme CodeCademy,
            complété par des cours Udemy. <br />
            <br /> Pendant plus d'un an, en autodidacte, je vais apprendre à
            coder - milieu qui me semblait tout bonnement inaccessible.
            Initiation et prise en main de différents langages, de frameworks et
            de librairies. Moi la passionnée de littérature et d'arts, je
            découvre avec le code un nouvel univers riche et créatif qui me
            permet d'écrire sous une toute nouvelle forme, tout en utilisant ma
            créativité ! <br />
            Je développe un intérêt tout particulier pour la création de User
            Interface suivant les règles d'accessibilité, l'importance d'une
            interface simple d'utilisation et peut enfin mettre à bon escient
            mon côté rat de bibliothèque pour éplucher Internet et trouver des
            informations pour mener à bien un projet.
          </div>
        </div>
      </>
    </Wrapper>
  );
}

export default Tabs;
