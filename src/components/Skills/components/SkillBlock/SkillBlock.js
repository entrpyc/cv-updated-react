import './SkillBlock.scss';

function TechSkillBlock({ title, text }) {
  return (
    <div className="skills-wrapper">
      <div className="block">
        <p>{title}</p>
      </div>
      <div className="content">
        {text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default TechSkillBlock