import './Sidebar.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


function Sidebar() {
  const { sidebar } = useContext(GlobalContext)
  const { info, social, navigation } = sidebar

  return (
    <div className="sidebar">
      <div className="picture">
        <div className="img-container">
          <img src={info.picture} alt={info.name} />
        </div>
      </div>
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