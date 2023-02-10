import React from "react";
import { skills } from "../utils/data";
/* Styles */
import Wrapper from "../assets/wrappers/skills";

const Skills = () => {
  return (
    <Wrapper>
      <div className='section-title'>
        <h2>skills</h2>
        <div className='underline' aria-hidden='true'></div>
      </div>
      <section className='skills-section'>
        <div className='skills' aria-hidden='true'>
          {skills.map((skill) => {
            const { id, icon } = skill;
            return (
              <div className='skill' key={id}>
                <p>{icon}</p>
              </div>
            );
          })}
        </div>
        <div className='details-skills'>
          <ul>
            <li>
              <span>front-end:</span> HTML/CSS, JavaScript, React
            </li>
            <li>
              <span>back-end:</span> Node.js, Express.js
            </li>
            <li>
              <span>libraries:</span> Redux Toolkit, Styled Components
            </li>
            <li>
              <span>management tools:</span> GitHub Desktop, Figma, Trello
            </li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
