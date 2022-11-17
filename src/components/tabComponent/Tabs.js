import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
/* Styles */
import Wrapper from "../../assets/wrappers/tabs";

function Tabs() {
  // set the active class on nav background
  const [activeTab, setActiveTab] = useState("tab1");

  // Handle tab switching
  const handleTab1 = () => {
    // update state for tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update state for tab2
    setActiveTab("tab2");
  };

  return (
    <Wrapper>
      <section className='about'>
        <div className='tabs'>
          {/* Tab Navigation*/}
          <ul className='nav'>
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              🇬🇧
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              🇫🇷
            </li>
          </ul>
          <div className='outlet'>
            {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Tabs;
