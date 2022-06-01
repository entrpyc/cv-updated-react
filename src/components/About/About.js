import './About.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import Avatar from '../Avatar/Avatar';

function About() {
  const { about, sidebar } = useContext(GlobalContext)
  const { 
    birthdate,
    location,
    email,
    phone
  } = about
  const { info } = sidebar

  return (
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
      </div>
    </section>
  )
}

export default About