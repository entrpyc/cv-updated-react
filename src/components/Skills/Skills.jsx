import css from './Skills.module.scss';

import Title from 'elements/Title/Title';

import SkillBlock from './components/SkillBlock/SkillBlock';

function Skills({ skills }) {
  return (skills &&
    <section id="skills" className={css.skills}>
      <Title>Skills</Title>
      <div className="wrap">
        {skills.map((skill, i) => (
          <SkillBlock key={i} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills