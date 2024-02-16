
import css from './Experience.module.scss';

import Block from 'components/Block/Block';
import Title from 'elements/Title/Title';

function Experience({ experience, title, id }) {
  return (experience &&
    <section id={id} className={css.experience}>
      <Title>{title}</Title>
      {experience.map((item, index) => (
        <div className="block-container" key={index} >
          <Block {...item} />
        </div>
      ))}
    </section>
  )
}
 
export default Experience