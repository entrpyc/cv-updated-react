import './About.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import Avatar from '../Avatar/Avatar';

function About() {
  const { pageData } = useContext(GlobalContext);
  const { about, sidebar } = pageData;
  
  const { 
    birthdate,
    location,
    email,
    phone,
    specialized,
    lookingFor,
    minimumSalaryExpected,
  } = about || {}
  const { info } = sidebar || {}

  return (
    info && about ? (
      <section id="about">
        <div className="about">
          <Avatar picture={info.picture} name={info.name} />
        </div>
        <div className="info">
          <div className="row mobile">{info.name}</div>
          <div className="row">
            <strong>Birthday:</strong> {birthdate}
          </div>
          <div className="row">
            <strong>Location:</strong> {location}
          </div>
          <div className="row">
            <strong>Email:</strong> {email}
          </div>
          <div className="row">
            <strong>Phone:</strong> {phone}
          </div>
          <hr />
          <div className="row accent">
            <strong>Specialized in:</strong> {specialized}
          </div>
          {lookingFor ? (
            <div className="row accent">
              <strong>Looking for:</strong> {lookingFor}
            </div>
          ): null}
          {minimumSalaryExpected ? (
            <div className="row accent">
              <strong>Minimum salary expectation</strong> {minimumSalaryExpected}
            </div>
          ): null}

        </div>
      </section>
    ) : null
  )
}

export default About