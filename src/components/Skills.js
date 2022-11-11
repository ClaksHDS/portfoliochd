import React from "react";
import { skills } from "../utils/data";
/* Styles */
import Wrapper from "../assets/wrappers/skills";

const Skills = () => {
  return (
    <Wrapper>
      <div className='section-title'>
        <h2>skills</h2>
        <div className='underline'></div>
      </div>
      <section className='skills-section'>
        <div className='skills'>
          {skills.map((skill) => {
            const { id, icon, text } = skill;
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
              <span>back-end:</span> Node.js
            </li>
            <li>
              <span>management tools & libraries:</span> GitHub Desktop, Figma,
              Trello, Styled Components, Redux Toolkit
            </li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
