import { useContext } from 'react';

import css from './About.module.scss';

import Avatar from 'components/Avatar/Avatar';
import TextListBlock from 'components/Blocks/TextListBlock/TextListBlock';
import Text from 'elements/Text/Text';

import { GlobalContext } from 'context/GlobalContext';

function About({ about, id }) {
  const { pageData } = useContext(GlobalContext);
  const { navigation } = pageData;

  const {
    info,
  } = navigation || {};

  return ((info && about?.length) &&
    <section id={id} className={css.about}>
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