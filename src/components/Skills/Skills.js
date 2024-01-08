import './Skills.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import SkillBlock from './components/SkillBlock/SkillBlock';


function Skills() {
  const { pageData } = useContext(GlobalContext)
  const { skills } = pageData

  return (
    skills ? (
      <section id="skills">
        <h2>Skills</h2>
        <div className="wrap">
          {skills.map((skill, i) => (
            <SkillBlock key={i} {...skill} />
          ))}
        </div>
      </section>
    ) : null
  )
}

export default Skills