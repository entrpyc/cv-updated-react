import React from "react";
import Icon from "elements/Icon/Icon";

import css from "./Profile.module.scss";

import Title from "elements/Title/Title";
import Text from "elements/Text/Text";

const Profile = ({ profile }) => {
  return (
    <section className={css.profileBlock}>
      <div className="profile">
        <Title tag="h1" className="name">
          {profile?.name}
        </Title>
        <Title tag="h3" className="position">{profile?.position}</Title>
      </div>
      <div>
        <ul className="info-container">
          {profile?.contact.map((info, index) => (
            <li className="info" key={index}>
              <Icon className="icon" name={info.icon} />
              {info.link ? <a href={info.link} className="text">{info.text}</a> :
              <Text href={info.text} className="text">{info.text}</Text>
              }
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
