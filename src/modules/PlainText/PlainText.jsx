
import css from './PlainText.module.scss';

import PlainTextBlock from 'modules/Blocks/PlainTextBlock/PlainTextBlock';
import Title from 'elements/Title/Title';

function PlainText({ text, title, id }) {
  return (text &&
    <section id={id} className={css.experience}>
      <Title>{title}</Title>
      {text.map((item, index) => (
        <div className="block-container" key={index} >
          <PlainTextBlock {...item} />
        </div>
      ))}
    </section>
  )
}
 
export default PlainText