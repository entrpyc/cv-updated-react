import './Sidebar.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import Avatar from '../Avatar/Avatar';

function Sidebar() {
  const { sidebar } = useContext(GlobalContext)
  const { info, social, navigation } = sidebar

  return (
    <div className="sidebar">
      <Avatar picture={info.picture} name={info.name} />
      <div className="info">
        <h1>{info.name}</h1>
        <p>{info.position}</p>
      </div>
      <div className="social">
        {social.map((item, index) => (
          <a href={item.href} target="_blank" rel="noreferrer">
            <img src={item.src} key={index} alt={item.alt} />
          </a>
        ))}
      </div>
      <div className="navigation">
        {navigation.map((item, index) => (
          <a href={item.href} key={index}>{item.name}</a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar