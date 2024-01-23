import css from './About.module.scss';

import Avatar from 'components/Avatar/Avatar';
import TextListBlock from 'components/Blocks/TextListBlock/TextListBlock';
import Text from 'elements/Text/Text';

function About({ about, info }) {
  return ((info && about?.length) &&
    <section id="about" className={css.about}>
      <div className="about-me">
        <Avatar picture={info.picture} name={info.name} />
      </div>
      <div className="info">
        <div className="row mobile">
          <Text>{info.name}</Text>
        </div>
        <TextListBlock text={about} />
      </div>
    </section>
  )
}

export default About