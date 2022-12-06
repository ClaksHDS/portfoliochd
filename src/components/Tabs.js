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
            role='button'
            aria-label='select english version of the text'
          >
            🇬🇧 English
          </button>
          <button
            className={`tab ${activeTab(2, "active")}`}
            onClick={() => handleClick(2)}
            role='button'
            aria-label='select french version of the text'
          >
            🇫🇷 Français
          </button>
        </div>
        <div className='panels'>
          <div className={`panel ${activeTab(1, "active")} `}>
            Palo santo cold-pressed knausgaard pug banh mi sus. Seitan bespoke
            fingerstache post-ironic, Brooklyn etsy meggings biodiesel glossier.
            Intelligentsia pop-up occupy, vaporware humblebrag praxis swag
            glossier 8-bit cronut disrupt tonx typewriter taiyaki venmo. Tonx
            helvetica ugh, pitchfork sustainable adaptogen migas master cleanse
            pork belly chambray photo booth la croix hell of intelligentsia
            gentrify. Direct trade normcore wayfarers twee meh etsy fam.
          </div>
          <div className={`panel ${activeTab(2, "active")} `}>
            Après une license et un master en Histoire, je me retrouve face à un
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
            Je développe (ah, ah) un intérêt tout particulier pour la création
            de User Interface suivant les règles d'accessibilité, l'importance
            d'une interface simple d'utilisation et peut enfin mettre à bon
            escient mon côté rat de bibliothèque pour éplucher Internet et
            trouver des informations pour mener à bien un projet.
          </div>
        </div>
      </>
    </Wrapper>
  );
}

export default Tabs;
