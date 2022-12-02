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
            title='select english version of the text'
          >
            🇬🇧 English
          </button>
          <button
            className={`tab ${activeTab(2, "active")}`}
            onClick={() => handleClick(2)}
            role='button'
            title='select french version of the text'
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
            Biographie en français. Kombucha bespoke iPhone humblebrag chambray,
            tumblr 8-bit gatekeep cardigan af vegan poke. Pinterest pickled
            lumbersexual swag. Scenester squid taiyaki wayfarers. Cliche butcher
            microdosing JOMO, art party vice letterpress health goth. Deep v +1
            tilde truffaut.
          </div>
        </div>
      </>
    </Wrapper>
  );
}

export default Tabs;
