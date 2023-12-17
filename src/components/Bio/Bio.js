import './Bio.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import BioBlock from './components/BioBlock/BioBlock';


function Bio() {
  const { bio } = useContext(GlobalContext)

  return (
    <section id="bio">
      <h2>Bio</h2>
      <div className="wrap">
        {bio.map((bio, i) => (
          <BioBlock key={i} {...bio} />
        ))}
      </div>
    </section>
  )
}

export default Bio