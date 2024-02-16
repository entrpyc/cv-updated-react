
import css from './PlainText.module.scss';

import Block from 'components/Block/Block';
import Title from 'elements/Title/Title';

function PlainText({ text, title, id }) {
  return (text &&
    <section id={id} className={css.experience}>
      <Title>{title}</Title>
      {text.map((item, index) => (
        <div className="block-container" key={index} >
          <Block {...item} />
        </div>
      ))}
    </section>
  )
}
 
export default PlainText