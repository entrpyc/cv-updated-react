import { useContext } from 'react';

import css from './About.module.scss';

import Avatar from 'components/Avatar/Avatar';
import TextListBlock from 'modules/Blocks/TextListBlock/TextListBlock';
import Text from 'elements/Text/Text';

import { InterfaceContext } from 'context/InterfaceContext';

function About({ data }) {
  const { pageInterface } = useContext(InterfaceContext);
  const { navigation } = pageInterface;

  const {
    info,
  } = navigation || {};

  return ((info && data?.length) &&
    <section id="about" className={css.about}>
      <div className="about-me">
        <Avatar picture={info.picture} name={info.name} />
      </div>
      <div className="info">
        <div className="row mobile">
          <Text>{info.name}</Text>
        </div>
        <TextListBlock text={data} />
      </div>
    </section>
  )
}

export default About