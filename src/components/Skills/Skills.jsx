import css from './Skills.module.scss';

import Title from 'elements/Title/Title';

import SkillBlock from './components/SkillBlock/SkillBlock';
import PortfolioBlock from 'components/Portfolio/components/PortfolioBlock/PortfolioBlock';

function Skills({ skills, list, id }) {
  const remapSkillListForPortfolioBlock = (skillList) => ({
    title: skillList.level,
    techStack: skillList.list.map( skill => ({ title: skill }))
  })

  return (
    <section id={id} className={css.skills}>
      <Title>Skills</Title>
      <div className="skill-lists">
        {list ? (
          <div className="wrap">
            {list.map((skillList, i) => (
              <PortfolioBlock key={i} {...remapSkillListForPortfolioBlock(skillList)} />
            ))}
          </div>
        ): null}
        {skills ? (
          <div className="wrap">
            {skills.map((skill, i) => (
              <SkillBlock key={i} {...skill} />
            ))}
          </div>
        ): null}
      </div>
    </section>
  )
}

export default Skills