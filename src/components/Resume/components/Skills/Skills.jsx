import React from "react";

import css from "./Skills.module.scss";
import Title from "elements/Title/Title";

const Skills = ({ skills }) => {
  return (
    <div className={css.skillsBlock}>
      {skills?.map((category, index) => (
        <div key={index} className="container-skills">
          <Title tag="h1">{category.category}</Title>
          <ul className="skills">
            {category.items.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
