import React from "react";

import css from "./WorkExperience.module.scss";

import Icon from "elements/Icon/Icon";
import Title from "elements/Title/Title";
import Text from "elements/Text/Text";

const WorkExperience = ({ workExperience }) => {
  return (
    <div className={css.workExperienceBlock}>
      <Title tag="h1">Work Experience</Title>
      {workExperience?.map((work, index) => (
        <div key={index} className="work">
          <Text className="company">{work.company}</Text>
          <div className="date">
            <Icon className="icon" name="calendar" />
            <Text className="time">{work.date}</Text>
          </div>
          <ul>
            {work.responsibilities.map(
              (responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex}>{responsibility}</li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
