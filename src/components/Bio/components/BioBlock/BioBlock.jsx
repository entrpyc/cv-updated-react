import css from './BioBlock.module.scss';

import Title from 'elements/Title/Title'
import Text from 'elements/Text/Text'

function TechSkillBlock({ title, text }) {
  return (
    <div className={css.bioBlock}>
      <Title tag="h3">{title}</Title>
      <div className="content">
        {text.map((paragraph, i) => (
          <Text key={i}>{paragraph}</Text>
        ))}
      </div>
    </div>
  )
}

export default TechSkillBlock