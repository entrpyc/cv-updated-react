import './Skills.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import SkillBlock from './components/SkillBlock/SkillBlock';


function Skills() {
  const { skills } = useContext(GlobalContext)

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="wrap">
        {skills.map((skill, i) => (
          <SkillBlock key={i} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills