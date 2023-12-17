import './BioBlock.scss';

function TechSkillBlock({ title, text }) {
  return (
    <div className="bio-wrapper">
      <h3>{title}</h3>
      <div className="content">
        {text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default TechSkillBlock