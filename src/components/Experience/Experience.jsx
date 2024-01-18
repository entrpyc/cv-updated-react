
import css from './Experience.module.scss';

import Block from 'components/Block/Block';
import Title from 'elements/Title/Title';

function Experience({ experience }) {
  return (experience &&
    <section id="experience" className={css.experience}>
      <Title>Experience</Title>
      {experience.map((item, index) => (
        <div className="block-container" key={index} >
          <Block {...item} />
        </div>
      ))}
    </section>
  )
}
 
export default Experience